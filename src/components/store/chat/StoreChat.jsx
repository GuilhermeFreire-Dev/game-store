import { useState } from "react";
import ChatButton from "./ChatButton";
import Chat from "./Chat";
import { useCookies } from "react-cookie";

function StoreChat() {

  const [chatActive, setChatActive] = useState(false);
  const [cookies, setCookies] = useCookies(["user"]);

  function setUserId(id) {
    if (!cookies.user) {
      setCookies("user", id);
    }
    console.log("cookie", cookies);
  }

  return (
    <>
      <Chat chatActive={chatActive} setChatActive={setChatActive} useMode={'client'} chatId={cookies.user} setUserId={setUserId} chatMessages={[]}></Chat>
      {
        !chatActive && (
          <ChatButton setChatActive={setChatActive}></ChatButton>
        )
      }
    </>
  );
}

export default StoreChat;