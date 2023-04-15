import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Button from './components/Button';

interface Props {
   children?: ReactNode[];
}

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 1rem;
   /* height: 100vh; */
`;

const ViewContainer = styled.div`
   border: 1px solid #ccc;
`;

const FormContainer = styled.div``;

const ButtonContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 1rem;
   padding: 0.75rem;
`;

const QuickAccess: React.FC<Props> = (props: Props) => {
   const { children } = props;
   const [showForm, setShowForm] = React.useState(false);
   const [showButtons, setShowButtons] = React.useState(false);

   return (
      <Container>
         <button
            onClick={() => {
               setShowButtons(!showButtons);
               setShowForm(false);
            }}
         >
            Quick Add
         </button>
         <ViewContainer>
            {showButtons && (
               <ButtonContainer>
                  <Button>Test1</Button>
                  <Button>Test2</Button>
                  <Button>Test3</Button>
                  <Button>Test4</Button>
                  <Button>Test5</Button>
                  <Button>Test6</Button>
                  {children && children.map((child, index) => <Button key={index}>{child}</Button>)}
               </ButtonContainer>
            )}
            {showForm && (
               <FormContainer>
                  <form action='submit'>Hidden Form</form>
               </FormContainer>
            )}
         </ViewContainer>
      </Container>
   );
};

export default QuickAccess;
