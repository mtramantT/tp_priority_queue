import styled from 'styled-components';

type Props = {
   // add your component props here
};

const Button = styled.button<Props>`
   display: inline-block;
   padding: 0.5rem 1rem;
   border: 1px solid #000;
   border-radius: 0.25rem;
   background-color: #fff;
   color: #000;
   font-size: 1rem;
   font-weight: 400;
   line-height: 1.5;
   text-align: center;
   text-decoration: none;
   vertical-align: middle;
   cursor: pointer;
   user-select: none;
   transition: all 0.2s ease-in-out;
   &:hover {
      background-color: #000;
      color: #fff;
   }
`;

export default Button;
