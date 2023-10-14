import { useEffect, useRef, useState } from "react";
import { socket } from "../../../socket";
import { MdChatBubble, MdClose, MdMessage, MdPerson, MdSend } from "react-icons/md";


function Chat() {

  const inputMessageRef = useRef(null);
  const divMessagesRef = useRef(null);
  const [socket, setSocket] = useState(null);
  const [chatActive, setChatActive] = useState(false);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: 'vendedor(a)',
      content: 'Olá! no que posso ajudar?',
      time: '09:35',
      origin: 'server'
    }
  ]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function scrollToBottom() {
    if (divMessagesRef.current) {
      divMessagesRef.current.scrollTop = divMessagesRef.current.scrollHeight;
    }
  }

  function socketConnect() {
    // socket.connect();
    setChatActive(true);
  }

  function socketDisconnect() {
    socket.disconnect();
  }

  function sendMessage() {
    const time = new Date();
    if (inputMessageRef.current.value) {
      const newMessage = {
        id: crypto.randomUUID(),
        user: 'Você',
        content: inputMessageRef.current.value,
        time: `${time.getHours()}:${time.getMinutes()}`,
        origin: 'client'
      };
      inputMessageRef.current.value = "";
      setMessages([...messages, newMessage]);
    }
  }

  return (
    <span className="fixed flex flex-col items-end bottom-0 right-0 mr-10 mb-10">
      {
        chatActive && (
          <>
            <div className="flex flex-col justify-between w-[19rem] p-2 h-[28rem] bg-stone-100 rounded-2xl text-stone-950">
              <div className="h-5/6">
                <div className="flex flex-row items-center justify-between pr-2 pb-2 pl-2">
                  <h5 className="font-medium">Chat</h5>
                  <MdClose className="cursor-pointer hover:bg-stone-300 rounded-full text-xl" onClick={() => {setChatActive(false)}}></MdClose>
                </div>
                <div className="h-full pb-2 pt-1 overflow-y-scroll scroll-auto" ref={divMessagesRef}>
                  {
                    messages.map((message) => {
                      return (
                        <div className="flex mt-2 pl-2" key={message.id}>
                          {
                            message.origin === "server" && (
                              <div className="flex justify-center items-center w-8 h-8 mr-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600">
                                <MdPerson className="text-white"></MdPerson>
                              </div>
                            )
                          }
                          <span className="shadow-xl w-4/5 p-2 text-xs bg-white rounded-lg">
                            <p className="font-semibold">{ message.user }</p>
                            <p>{ message.content }</p>
                            <p className="text-right font-semibold text-[10px]">{ message.time }</p>
                          </span>
                          {
                            message.origin === "client" && (
                              <div className="flex justify-center items-center w-8 h-8 ml-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-600">
                                <MdPerson className="text-white"></MdPerson>
                              </div>
                            )
                          }
                        </div>
                      );
                    })
                  }
                </div>
              </div>
              <div className="flex justify-between items-center pr-2 pl-2 bg-white h-10 rounded-xl shadow-lg">
                <input className="text-xs pl-2 focus:outline-none w-4/5" type="text" placeholder="Digite sua mensagem" ref={inputMessageRef}/>
                <button className="flex justify-center items-center right-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 hover:opacity-80">
                  <MdSend className="text-white" onClick={sendMessage}></MdSend>
                </button>
              </div>
            </div>
          </>
        )
      }
      {
        !chatActive && (
          <button className="flex justify-center items-center w-[5rem] h-[5rem] p-5 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full hover:opacity-80" 
            onClick={() => {setChatActive(true)}}>
            <MdChatBubble className="text-4xl"></MdChatBubble>
          </button>
        )
      }
    </span>
  );
}

export default Chat;