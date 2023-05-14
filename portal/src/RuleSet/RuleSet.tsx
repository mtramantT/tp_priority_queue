import React, { useEffect } from 'react';
import styled from 'styled-components';

interface RuleSetProps {
   onClick: () => void;
   onAddRule: () => void;
}

const Container = styled.div``;
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

const RuleSet: React.FC<RuleSetProps> = (props: RuleSetProps) => {
   const { onAddRule } = props;

   useEffect(() => {
      console.log('Set TimeBlocks from fetch or leave as default if fetch fails');
   }, []);

   const handleAddRule = () => {
      console.log('handleAddRule');
      onAddRule();
   };
   return (
      <Container>
         <ListGroup>
            <ListItem bgColor={'white'} onClick={handleAddRule}>
               +
            </ListItem>
         </ListGroup>
      </Container>
   );
};

export default RuleSet;
