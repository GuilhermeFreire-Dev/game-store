import { useEffect, useRef, useState } from "react";
import { MdClose, MdOutlineAttachFile, MdPerson, MdSend } from "react-icons/md";
import Utils from "../../../scripts/Utils";

function ChatBody({setChatActive, messages, sendMessage, user, attach}) {

  const inputMessageRef = useRef(null);
  const divMessagesRef = useRef(null);
  const utils = new Utils();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function scrollToBottom() {
    if (divMessagesRef.current) {
      divMessagesRef.current.scrollTop = divMessagesRef.current.scrollHeight;
    }
  }

  function send() {
    sendMessage(inputMessageRef.current.value, 'message');
    inputMessageRef.current.value = "";
  }

  function getTime(date) {
    if (date) {
      return date.match(/T(\d{2}:\d{2})/, date)[1];
    }
    return "";
  }

  function autoSend(event) {
    if (event.key === 'Enter') {
      send();
    }
  }

  return (
    <span className="fixed flex flex-col items-end bottom-0 right-0 mr-10 mb-10">
      <div className="flex flex-col justify-between w-[19rem] p-2 h-[28rem] bg-stone-100 rounded-2xl text-stone-950">
        <div className="h-5/6">
          <div className="flex flex-row items-center justify-between pr-2 pb-2 pl-2">
            <h5 className="font-medium">Chat</h5>
            <MdClose className="cursor-pointer hover:bg-stone-300 rounded-full text-xl" onClick={() => {setChatActive(false)}}></MdClose>
          </div>
          <div className="h-full pb-4 pt-1 overflow-y-scroll scroll-auto" ref={divMessagesRef}>
            {
              messages.map((message) => {
                return (
                  <div className="flex mt-3 pl-2" key={message.id}>
                    {
                      (message.origin !== user) && (
                        <div className="flex justify-center items-center w-8 h-8 mr-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600">
                          <MdPerson className="text-white"></MdPerson>
                        </div>
                      )
                    }
                    <span className="shadow-xl w-4/5 p-2 text-xs bg-white rounded-lg">
                      <p className="font-semibold">{ message.origin === user ? 'Você' : (user === 'client' ? 'Vendedor(a)' : 'Cliente') }</p>
                      <div>
                        { 
                          message.content.type === undefined && 
                          <p>{ message.content }</p> 
                        }
                        {
                          message.content.type === 'suggestion' &&
                          <a href={`${process.env.REACT_APP_URL}/game/${message.content.id}`} target="_blank">
                            <img className="w-16 h-24 mt-1 rounded-lg" src={message.content.image} alt={message.content.name} />
                            <div className="mt-2">
                              <p>{ message.content.name }</p>
                              <p className="text-lg font-semibold">{ utils.getMonetaryFormat(message.content.price) }</p>
                            </div>
                          </a>
                        }
                      </div>
                      <p className="text-right font-semibold text-[10px]">{ getTime(message.time) }</p>
                    </span>
                    {
                      (message.origin === user) && (
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
          <button onClick={() => attach(true)}>
            <MdOutlineAttachFile></MdOutlineAttachFile>
          </button>
          <input className="text-xs pl-2 focus:outline-none w-4/5" type="text" placeholder="Digite sua mensagem" ref={inputMessageRef} onKeyDown={autoSend}/>
          <button className="flex justify-center items-center right-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 hover:opacity-80">
            <MdSend className="text-white" onClick={send}></MdSend>
          </button>
        </div>
      </div>
    </span>
  );
}

export default ChatBody;