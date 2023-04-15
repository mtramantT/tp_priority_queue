import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
   children: ReactNode;
}

const Container = styled.div``;

const BodyLayout: React.FC<Props> = (props: Props) => {
   const { children } = props;
   return (
      <Container>
         <div style={{ textAlign: 'center' }}>
            <h1>Inbox</h1>
            <div>{children}</div>
         </div>
      </Container>
   );
};

export default BodyLayout;
