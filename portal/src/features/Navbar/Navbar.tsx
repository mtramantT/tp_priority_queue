// Create a simple navbar component
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 0 1rem;
   height: 3rem;
   background-color: #fff;
   box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

const Left = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   /* flex-basis: 40%; */
`;

const Right = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   /* flex-basis: 40%; */
`;

const Middle = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   /* flex-basis: 20%; */
   justify-content: center;
   @media (max-width: 768px) {
      flex-basis: 100%;
      margin-bottom: 0.5rem;
   }
`;

const Icon = styled(FontAwesomeIcon)`
   font-size: 1.5rem;
   margin: 0 0.5rem;
   cursor: pointer;
`;

const Navbar: React.FC = () => {
   return (
      <Container>
         <Left>
            <Icon icon={faBars} />
         </Left>
         <Middle>
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
         </Middle>
         <Right>
            <Icon icon={faSearch} />
            <Icon icon={faBell} />
            <Icon icon={faUserCircle} />
         </Right>
      </Container>
   );
};

export default Navbar;
