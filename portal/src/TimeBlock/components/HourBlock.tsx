import React, { memo } from 'react';
import styled from 'styled-components';

export interface HourBlockProps {
   blockNumber: number;
   color: string;
   dataIndex: number;
}

const Container = styled.div<{ color: string }>`
   border: 1px solid black;
   height: 50px;
   width: 50px;
   background-color: ${(props) => props.color || 'white'};
   user-select: none;
   text-align: center;
   vertical-align: middle;
   line-height: 50px;
`;

const HourBlock: React.FC<HourBlockProps> = (props: HourBlockProps) => {
   const { blockNumber, color, dataIndex } = props;

   return (
      <Container color={color} data-index={dataIndex}>
         {blockNumber}
      </Container>
   );
};

export default memo(HourBlock);
