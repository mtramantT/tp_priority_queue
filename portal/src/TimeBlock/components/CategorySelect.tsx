import React from 'react';
import styled from 'styled-components';
import useModal from '../../Modal/useModal';
import Modal from '../../Modal/modal';

export interface CategorySelectProps {
   categories: { name: string; color: string; handleClick: (color: string) => void }[];
}

const Container = styled.div`
   text-align: center;
   box-sizing: border-box;
`;

const ListGroup = styled.ul`
   list-style-type: none;
   margin: 0;
   padding: 0;
`;

const ListItem = styled.li<{ bgColor: string }>`
   padding: 10px;
   border: 1px solid black;
   background-color: ${(props) => props.bgColor};
`;

const CategorySelect: React.FC<CategorySelectProps> = (props: CategorySelectProps) => {
   const { categories } = props;
   const { isOpen, toggle } = useModal();

   return (
      <Container>
         <Modal isOpen={isOpen} toggle={toggle}>
            Hello World
         </Modal>
         <h1>Categories</h1>
         <ListGroup>
            {categories.map((category) => {
               return (
                  <ListItem
                     bgColor={category.color}
                     onClick={() => category.handleClick(category.color)}
                  >
                     {category.name}
                  </ListItem>
               );
            })}
            <ListItem bgColor={'white'} onClick={() => toggle()}>
               +
            </ListItem>
         </ListGroup>
      </Container>
   );
};

export default CategorySelect;
