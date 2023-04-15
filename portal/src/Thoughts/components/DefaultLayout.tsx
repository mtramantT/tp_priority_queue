import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
   category: string;
}

// const Container = styled.div``;
const Container = styled.div`
   padding: 0 10px;
`;

const FormContainer = styled.div<{ showInputs: boolean }>`
   /* position: relative; */
   display: flex;
   flex-direction: row;
   /* align-items: center;
   justify-content: center; */

   /* input[type='text'],
   input[type='submit'] {
      position: absolute;
      top: 0;
      left: ${({ showInputs }) => (showInputs ? '50px' : '-100px')};
      opacity: ${({ showInputs }) => (showInputs ? '1' : '0')};
      transition: all 0.5s ease-in-out;
   } */
`;

const AddNew = styled.button``;

const Submit = styled(FontAwesomeIcon)<{ disabled: boolean }>`
   position: absolute;
   right: 8px;
   top: 5px;
   color: ${({ disabled }) => (disabled ? '#ddd' : 'black')};
`;

const ExpandContainer = styled.div<{ showInput: boolean }>`
   position: relative;
   width: 100%;
   display: ${({ showInput }) => (showInput ? 'block' : 'none')};
   transition: all 0.5s;
   input[type='text'] {
      position: absolute;
      left: 0;
      width: 100%;
   }
`;

const DefaultLayout: React.FC<Props> = (props: Props) => {
   const { category } = props;
   const [showInput, setShowInput] = useState(false);
   const [value, setValue] = useState<string>('');
   return (
      <Container>
         <FormContainer showInputs={showInput}>
            <AddNew onClick={() => setShowInput(!showInput)}>+</AddNew>
            <ExpandContainer showInput={showInput}>
               <input
                  type='text'
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
               />
               <Submit
                  disabled={value === ''}
                  icon={icon({ name: 'circle-plus' })}
                  onClick={() => {
                     if (value !== '') {
                        console.log(value);
                     }
                  }}
               />
            </ExpandContainer>
         </FormContainer>
      </Container>
   );
};

export default DefaultLayout;
