import { useState } from "react";
import Table from "../../admin/layout/content/Table";
import Header from "../../admin/layout/header/Header";
import TableHeader from "../../admin/layout/content/TableHeader";
import TableRow from "../../admin/layout/content/TableRow";
import TableItem from "../../admin/layout/content/TableItem";
import Content from "../../admin/layout/content/Content";

function ChatsView() {

  return (
    <>
      <Header title={'Chats'}></Header>
      <Content content={
        <Table tHead={
          <>
            <TableHeader header={'ID Cliente'}></TableHeader>
            <TableHeader header={'Ultima mensagem'}></TableHeader>
            <TableHeader header={'Horário'}></TableHeader>
            <TableHeader header={'Status'}></TableHeader>
            <TableHeader header={''}></TableHeader>
          </>
        } tBody={
          <>
            <TableRow row={
              <>
                <TableItem item={'4565481'}></TableItem>
                <TableItem item={'Teste'}></TableItem>
                <TableItem item={'17/10 20:54'}></TableItem>
                <TableItem item={ 
                  <>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </>
                 }></TableItem>
                <TableItem item={ <button className="bg-stone-600 pt-2 pr-5 pb-2 pl-5 rounded-lg">chat</button> }></TableItem>
              </>
            }></TableRow>
            <TableRow row={
              <>
                <TableItem item={'4564848'}></TableItem>
                <TableItem item={'Teste'}></TableItem>
                <TableItem item={'17/10 20:54'}></TableItem>
                <TableItem item={ 'ativo' }></TableItem>
                <TableItem item={ <button className="bg-stone-600 pt-2 pr-5 pb-2 pl-5 rounded-lg">chat</button> }></TableItem>
              </>
            }></TableRow>
          </>
        }>
        </Table>
      }>
      </Content>
    </>
  );
}

export default ChatsView;