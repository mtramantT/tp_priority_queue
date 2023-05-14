import React, { memo } from 'react';
import styled from 'styled-components';

export interface TimeBlockProps {
   dataIndex: number;
   size?: BlockSize; // Defaults to 'large'
   color?: string; // Defaults to 'white'
}

interface ContainerProps {
   color?: string;
   size?: BlockSize;
}

export type BlockSize = 'small' | 'large';

const blockSizeMap: { [key in BlockSize]: string } = {
   small: '25px',
   large: '50px',
};

const Container = styled.div.attrs<ContainerProps>((props) => ({
   id: `time-block-${props.id}`,
   className: 'time-block',
}))<ContainerProps>`
   border: 1px solid black;
   ${(props) => {
      const size = props.size || 'large';
      return `height: ${blockSizeMap[size]}; width: ${blockSizeMap[size]};`;
   }}
   background-color: ${(props) => props.color || 'white'};
   user-select: none;
   display: flex;
   text-align: center;
   justify-content: center;
   align-items: center;
`;

const TimeBlock: React.FC<TimeBlockProps> = (props: TimeBlockProps) => {
   const { dataIndex } = props;
   return (
      <Container {...props} data-index={props.dataIndex} id={`${props.dataIndex}`}>
         <div>
            <span style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'center' }}>
               {dataIndex < 12 ? dataIndex : dataIndex - 12}
               <br style={{ marginTop: '-0.3em' }} />
               {dataIndex < 12 ? 'AM' : 'PM'}
            </span>
         </div>
      </Container>
   );
};

export default memo(TimeBlock);
