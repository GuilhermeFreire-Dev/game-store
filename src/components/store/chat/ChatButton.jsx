import { MdChatBubble } from "react-icons/md";

function ChatButton({setChatActive}) {
  return (
    <span className="fixed flex flex-col items-end bottom-0 right-0 mr-10 mb-10">
      <button className="flex justify-center items-center w-[5rem] h-[5rem] p-5 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full hover:opacity-80" 
        onClick={() => {setChatActive(true)}}>
        <MdChatBubble className="text-4xl"></MdChatBubble>
      </button>
    </span>
  );
}

export default ChatButton;