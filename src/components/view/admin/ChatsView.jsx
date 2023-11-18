import { useEffect, useState } from "react";
import Table from "../../admin/layout/components/Table";
import Header from "../../admin/layout/header/Header";
import TableHeader from "../../admin/layout/components/TableHeader";
import TableRow from "../../admin/layout/components/TableRow";
import TableItem from "../../admin/layout/components/TableItem";
import Content from "../../admin/layout/components/Content";
import Chat from "../../store/chat/Chat";
import axios from "axios";
import Pagination from "../../admin/layout/components/Pagination";

function ChatsView() {

  const [chatActive, setChatActive] = useState(false);
  const [chats, setChats] = useState([]);
  const [chatId, setChatId] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  let request = false;

  useEffect(() => {
    if (!request) {
      request = true;
      getChats();
    }
  }, [page]);

  function getChats() {
    axios.get(`${process.env.REACT_APP_API_URL}/chat/chats?size=8&page=${page}`)
    .then((response) => {
      setChats(response.data.data);
      setPagination(response.data.pagination);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      request = false;
    }) 
  }

  function openChat(chat) {
    setChatActive(true);
    setChatId(chat.id);
    setMessages(chat.content.messages);
    setClientId(chat.client_id);
  }

  return (
    <>
      <Header title={'Chats'}></Header>
      <Content 
        content={
          <>
            <Table 
              tHead={
                <>
                  <TableHeader header={'ID'}></TableHeader>
                  <TableHeader header={'Horário'}></TableHeader>
                  <TableHeader header={'Status'}></TableHeader>
                  <TableHeader header={''}></TableHeader>
                </>
              } 
              tBody={
                chats.map((chat) => {
                  return (
                    <TableRow 
                      row={
                        <>
                          <TableItem item={chat.connection_id}></TableItem>
                          <TableItem item={chat.updatedAt}></TableItem>
                          <TableItem item={chat.status}></TableItem>
                          <button className="bg-stone-500 pt-2 pr-5 pb-2 pl-5 mt-2 mb-2 rounded-xl" onClick={() => openChat(chat)}>chat</button>
                        </>
                      }>
                    </TableRow>
                  );
                })
              }>
            </Table>
            {
              pagination && (
                <Pagination 
                  pageSize={pagination.pageSize} 
                  totalItems={pagination.total} 
                  page={page} 
                  setPage={setPage}>
                </Pagination>
              )
            }
          </>
        }>
      </Content>
      <Chat chatActive={chatActive} setChatActive={setChatActive} useMode={'seller'} chatId={chatId} chatMessages={messages} clientId={clientId}></Chat>
    </>
  );
}

export default ChatsView;