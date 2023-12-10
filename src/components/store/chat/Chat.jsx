import { useEffect, useState } from "react";
import ChatBody from "./ChatBody";
import { socket } from "../../../socket";
import axios from "axios";

function Chat({
  chatActive, 
  setChatActive, 
  useMode, 
  chatId, 
  setCookie,
  chatMessages, 
  clientId, 
  attach, 
  externalMessage
}) {

  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [sellerConn, setSellerConn] = useState(null);
  let socketListenerEnabled = false;
  let request = false;

  useEffect(() => {
    console.log(chatMessages);
    if (!socketListenerEnabled && !connected) {
      socketListenerEnabled = true;

      socket.connect();

      if (useMode == 'client') {
        socket.on('clientReceiveMsg', (content) => {
          console.log("contentClient", content);
          /**
           * Ao receber a confirmação de conexão do servidor, salvar o id gerado
           * no cookie da página
           */
          if (content.type == 'configuration') {
            console.log(content);
            setCookie(content.id);
          }
          else {
            setSellerConn(content.seller_id);
          }
          setMessages(content.data.messages);
        });

        socket.on('sellerOk', (connId) => {
          setSellerConn(connId);
          console.log('seller on chat');
        });
      }
      else {
        socket.on('sellerReceiveMsg', (content) => {
          console.log("contentSeller", content);
          /**
           * Ao receber a confirmação de conexão do servidor, salvar o id gerado
           * no cookie da página
           */
          if (content.type == 'configuration') {
            setCookie(content.data.id);
          }
          else {
            // setClientConn(content.client_id);
          }
          setMessages(content.data.messages);
        });
      }
      if (useMode == 'seller' && chatActive) {
        socket.emit('sellerOn', {
          client_id: clientId,
          seller_id: socket.id
        });
      }
      setConnected(true);
    }
  }, []);

  useEffect(() => {
    if (chatMessages.length) {
      setMessages(chatMessages);
    }
  }, [chatMessages]);

  useEffect(() => {
    if (externalMessage) {
      sendMessage(externalMessage, externalMessage.type);
    }
  }, [externalMessage]);

  useEffect(() => {
    if (!chatMessages.length) {
      console.log('getmessages');
      getMessages();
    }
  }, []);

  function getMessages() {
    if (!request) {
      request = true;
      axios.get(`${process.env.REACT_APP_API_URL}/chat/${chatId}`)
      .then((response) => {
        setMessages(response.data.data.content.messages);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        request = false;
      })
    }
  }

  function sendMessage(message, type) {
    if (message) {
      let newMessage = {
        content: message,
        origin: useMode,
        chat_id: chatId,
        status: 'active',
        type: type
      };

      if (useMode == 'client') {
        newMessage.client_id = socket.id;
        newMessage.seller_id = sellerConn;
        console.log(newMessage);
        socket.emit('clientSendMsg', newMessage);
      }
      else {
        newMessage.seller_id = socket.id;
        console.log(newMessage);
        socket.emit('sellerSendMsg', newMessage);
      }
    }
  }
 
  return (
    <span className="fixed flex flex-col items-end bottom-0 right-0 mr-10 mb-10">
      {
        chatActive && (
          <ChatBody 
            setChatActive={setChatActive} 
            sendMessage={sendMessage} 
            messages={messages}
            attach={attach}
            user={useMode}>
          </ChatBody>
        )
      }
    </span>
  );
}

export default Chat;