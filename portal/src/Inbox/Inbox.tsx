import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../store';
import { addItem } from '../Items/Items.slice';
import InboxItem, { InboxColumn } from './components/InboxItem';
import { useGetItemsQuery } from '../features/api/apiSlice';

interface Props {}

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   /* height: 100vh; */
`;

// Styled List Group
const ListGroup = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;
   border: 1px solid #ccc;
`;

const Inbox: React.FC<Props> = (props: Props) => {
   const {} = props;
   const { data: items, isLoading, isSuccess, isError, error } = useGetItemsQuery();

   useEffect(() => {
      console.log('Items', items);
   }, [items]);

   return (
      <Container>
         {/* <h1>Inbox</h1> */}
         <ListGroup>
            {/* {data.map((item) => (
               <InboxItem key={item.id}>{item.thought}</InboxItem>
            ))} */}
            <InboxItem>
               <InboxColumn>This is a test string!</InboxColumn>
               <InboxColumn>This is a test string!</InboxColumn>
            </InboxItem>
            <InboxItem>This is a test string!</InboxItem>
            <InboxItem>This is a test string!</InboxItem>
            <InboxItem>This is a test string!</InboxItem>
            <InboxItem>This is a test string!</InboxItem>
            <InboxItem>This is a test string!</InboxItem>
            <InboxItem>This is a test string!</InboxItem>
         </ListGroup>
      </Container>
   );
};

export default Inbox;
