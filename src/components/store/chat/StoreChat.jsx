import { useState } from "react";
import ChatButton from "./ChatButton";
import Chat from "./Chat";
import { useCookies } from "react-cookie";

function StoreChat() {

  const [chatActive, setChatActive] = useState(false);
  const [cookies, setCookies] = useCookies(["chat"]);

  function setCookie(id) {
    if (!cookies.chat) {
      setCookies("chat", id);
    }
    console.log("cookie", cookies);
  }

  return (
    <>
      <Chat chatActive={chatActive} setChatActive={setChatActive} useMode={'client'} chatId={cookies.chat} setCookie={setCookie} chatMessages={[]}></Chat>
      {
        !chatActive && (
          <ChatButton setChatActive={setChatActive}></ChatButton>
        )
      }
    </>
  );
}

export default StoreChat;