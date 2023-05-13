import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import HourBlock from './HourBlock';

interface HourBlockGroupProps {
   blocks: { blockNumber: number; color: string }[];
   handleChangeColor: (index: number) => void;
}

const Container = styled.div`
   box-sizing: border-box;
   border: 1px solid black;
   padding: 15px;
`;

const GroupRow = styled.div`
   margin-top: 10px;
   display: grid;
   grid-template-columns: repeat(13, 1fr);
   grid-gap: 10px;
`;

const GroupLabel = styled.div`
   width: 50px;
   height: 50px;
   user-select: none;
   text-align: center;
   vertical-align: middle;
   line-height: 50px;
`;

const HourBlockGroup: React.FC<HourBlockGroupProps> = (props: HourBlockGroupProps) => {
   const { blocks, handleChangeColor } = props;
   const [isDragging, setIsDragging] = useState<boolean>(false);
   const activeIndex = useRef<number | null>(0);

   useEffect(() => {
      const handleEnd = () => {
         setIsDragging(false);
         activeIndex.current = null;
      };
      window.addEventListener('touchend', handleEnd);
      window.addEventListener('mouseup', handleEnd);
      return () => {
         window.removeEventListener('touchend', handleEnd);
         window.removeEventListener('mouseup', handleEnd);
      };
   }, []);

   const handleStart = (
      event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>,
   ) => {
      setIsDragging(true);
      const target = event.target as HTMLElement;
      if (target && target.dataset && target.dataset.index) {
         const index = Number(target.dataset.index);
         activeIndex.current = index;
         handleChangeColor(index);
      }
   };

   const handleEnd = () => {
      setIsDragging(false);
      activeIndex.current = null;
   };

   const handleMove = (
      event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>,
   ) => {
      const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
      const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

      const target = document.elementFromPoint(clientX, clientY) as HTMLElement;
      if (target && target.dataset.index && isDragging) {
         const index = Number(target.dataset.index);
         if (activeIndex.current !== index) {
            activeIndex.current = index;
            handleChangeColor(index);
         }
      }
   };

   return (
      <Container
         onTouchStart={handleStart}
         onTouchMove={handleMove}
         onTouchEnd={handleEnd}
         onMouseDown={handleStart}
         onMouseMove={handleMove}
         onMouseUp={handleEnd}
         onMouseLeave={handleEnd}
      >
         <GroupRow>
            <GroupLabel>AM</GroupLabel>
            {blocks.slice(0, 12).map((block) => (
               <HourBlock
                  key={`AM${block.blockNumber}`}
                  blockNumber={block.blockNumber}
                  color={block.color}
                  dataIndex={block.blockNumber}
               />
            ))}
         </GroupRow>
         <GroupRow>
            <GroupLabel>PM</GroupLabel>
            {blocks.slice(12).map((block) => (
               <HourBlock
                  key={`PM${block.blockNumber}`}
                  blockNumber={block.blockNumber - 12}
                  color={block.color}
                  dataIndex={block.blockNumber}
               />
            ))}
         </GroupRow>
      </Container>
   );
};

export default HourBlockGroup;
