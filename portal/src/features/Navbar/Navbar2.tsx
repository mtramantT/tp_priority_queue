import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
   display: flex;
   flex-direction: column;
   background-color: #333;
   color: #fff;
   padding: 1rem;

   @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
   }
`;

const Logo = styled.a`
   font-size: 1.5rem;
   font-weight: bold;
   text-decoration: none;
   margin-bottom: 1rem;

   @media (min-width: 768px) {
      margin-bottom: 0;
   }
`;

const Menu = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;
   display: flex;
   flex-direction: column;

   @media (min-width: 768px) {
      flex-direction: row;
   }
`;

const MenuItem = styled.li`
   margin: 0 1rem;

   @media (min-width: 768px) {
      margin: 0;
   }
`;

const NavLink = styled.a`
   color: #fff;
   text-decoration: none;
   padding: 0.5rem;

   &:hover {
      background-color: #fff;
      color: #333;
   }

   @media (min-width: 768px) {
      padding: 1rem;
   }
`;

const Navbar2 = () => {
   return (
      <Nav>
         <Logo href='#'>My App</Logo>
         <Menu>
            <MenuItem>
               <NavLink href='#'>Home</NavLink>
            </MenuItem>
            <MenuItem>
               <NavLink href='#'>About</NavLink>
            </MenuItem>
            <MenuItem>
               <NavLink href='#'>Contact</NavLink>
            </MenuItem>
         </Menu>
      </Nav>
   );
};

export default Navbar2;
