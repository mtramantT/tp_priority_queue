import React from 'react';
import styled from 'styled-components';
import IdeaCard from './IdeaCard';
import NewIdeaForm from './NewIdeaForm';

interface Props {}

const Container = styled.div`
   padding: 0 15px;
`;

const ListGroup = styled.ul`
   padding: 0;
   margin: 0;
`;

const IdeaSort: React.FC<Props> = (props: Props) => {
   const {} = props;
   return (
      <Container>
         <NewIdeaForm />
         <ListGroup>
            <IdeaCard>The train does not leave at 8AM.</IdeaCard>
            <IdeaCard>The table had a black marble top.</IdeaCard>
            <IdeaCard>May I come in?</IdeaCard>
         </ListGroup>
      </Container>
   );
};

export default IdeaSort;
