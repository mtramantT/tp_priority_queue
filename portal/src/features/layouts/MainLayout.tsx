import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { isObject } from '../../types';

interface Props {
   children: ReactNode | NamedChildSlot;
}

interface NamedChildSlot {
   sidebar?: ReactNode;
   navBar?: ReactNode;
   body: ReactNode;
}

const Container = styled.div``;

const MainLayout: React.FC<Props> = (props: Props) => {
   const { children } = props;

   // Child = undefined / null
   if (!children)
      throw new Error("'children' property missing or possibly undefined. It is required!");

   // Child = NamedChildSlot
   if (isNamedChildSlot(children)) {
      const { sidebar, navBar, body } = children;
      return (
         <Container>
            {navBar && <div>{navBar}</div>}
            <div>{body}</div>
         </Container>
      );
   }
   // Child = ReactNode
   return <Container>{children}</Container>;
};

// Helper
const isNamedChildSlot = (children: ReactNode | NamedChildSlot): children is NamedChildSlot =>
   isObject<NamedChildSlot>(children);

export default MainLayout;
