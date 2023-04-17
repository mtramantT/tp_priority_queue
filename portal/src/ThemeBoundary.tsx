import React, { ReactNode } from 'react';
import styled, { createGlobalStyle, css, ThemeProvider } from 'styled-components';

interface Props {
   children: ReactNode;
}

const GlobalStyleWrapper = createGlobalStyle`
   html * {
      font-family: 'Roboto Flex', sans-serif;
   }
   body {
      margin: 0;
      width: 100%;
   }
   * {
      box-sizing: border-box;
   }
`;
const Wrapper = styled.div`
   min-height: 100vh;
`;

const ThemeBoundary: React.FC<Props> = (props: Props) => {
   const { children } = props;
   return (
      <ThemeProvider theme={{}}>
         <GlobalStyleWrapper />
         <Wrapper>{children}</Wrapper>
      </ThemeProvider>
   );
};

export default ThemeBoundary;
