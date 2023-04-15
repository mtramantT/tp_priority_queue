import React from 'react';
import styled from 'styled-components';

interface Props {}

const InputRow = styled.div`
   display: flex;
   flex-wrap: nowrap;
   align-items: center;
   width: 100%;
   max-width: 100%;
   box-sizing: border-box;
   height: 100%;
`;

const Button = styled.input.attrs({ type: 'submit' })`
   /* background-color: #89d9ea;
   border-radius: 0 50% 50% 0;
   border: 1px solid black;
   height: 100%;
   width: 32px; */
   height: 100%;
`;

const Input = styled.input`
   flex-grow: 1;
   width: 100%;
   box-sizing: border-box;
   height: 100%;
`;

const NewIdeaForm: React.FC<Props> = (props: Props) => {
   const {} = props;
   return (
      <form style={{ height: '2rem' }}>
         <InputRow>
            <Input type='text' placeholder='Enter an Idea or Todo' />
            <Button value='+' />
         </InputRow>
      </form>
   );
};

export default NewIdeaForm;
