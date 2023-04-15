import React from 'react';
import styled from 'styled-components';

interface Props extends React.HtmlHTMLAttributes<HTMLLIElement> {}

const Container = styled.li`
   border: 1px solid gray;
   list-style-type: none;
`;

const Card = styled.div`
   display: flex;
   align-items: stretch;
   padding: 5px;
   width: 100%;
`;

const CardColor = styled.div<{ color: 'red' | 'green' | 'yellow' | 'blue' }>`
   background-color: ${({ color }) => color};
   min-width: 16px;
   margin-right: 5px;
   border-radius: 20px 5px;
   border: 1px solid #919191;
`;
const CardBody = styled.div`
   flex-grow: 1;
   padding: 3px;
`;

const IdeaCard: React.FC<Props> = (props: Props) => {
   const { children } = props;
   return (
      <Container>
         <Card>
            <CardColor color='green' />
            <CardBody>{children}</CardBody>
         </Card>
      </Container>
   );
};

export default IdeaCard;
