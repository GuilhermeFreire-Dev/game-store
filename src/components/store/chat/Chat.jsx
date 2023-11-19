import { useEffect, useState } from "react";
import ChatBody from "./ChatBody";
import { socket } from "../../../socket";

function Chat({chatActive, setChatActive, useMode, chatId, setUserId, chatMessages, clientId, attach, externalMessage}) {

  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [sellerConn, setSellerConn] = useState(null);
  let socketListenerEnabled = false;

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
            setUserId(content.id);
          }
          else {
            setSellerConn(content.seller_id);
          }
          setMessages(content.data.messages);
        });

        socket.on('sellerOk', (connId) => {
          setSellerConn(connId);
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
            setUserId(content.data.id);
          }
          else {
            // setClientConn(content.client_id);
          }
          setMessages(content.data.messages);
        });

        socket.emit('sellerOn', {
          client_id: clientId, //não é isso aqui não
          seller_id: socket.id
        });
      }
      setConnected(true);
    }
  }, []);

  useEffect(() => {
    setMessages(chatMessages);
  }, [chatMessages]);

  useEffect(() => {
    sendMessage(externalMessage, externalMessage.type);
  }, [externalMessage]);

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