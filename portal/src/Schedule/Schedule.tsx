import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import TimeBlock, { TimeBlockProps } from './components/TimeBlock';

interface ScheduleProps {
   //    selectedRuleSet: string;
}

const Container = styled.div`
   box-sizing: border-box;
   border: 1px solid black;
   padding: 15px;
`;

const StandardTimeBlockRow = styled.div`
   margin-top: 10px;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
   grid-gap: 10px;
`;

// const MilitaryTimeBlockRow = styled.div`
//    margin-top: 10px;
//    display: grid;
//    grid-template-columns: repeat(24, 1fr);
//    grid-gap: 10px;
// `;

const getDefaultBlockList = (): TimeBlockProps[] => {
   return Array.from({ length: 24 }, (_, i) => {
      return {
         children: i,

         dataIndex: i,
         color: 'white',
      };
   });
};

const Schedule: React.FC<ScheduleProps> = (props: ScheduleProps) => {
   const {} = props;
   const [isDragging, setIsDragging] = useState<boolean>(false);
   const activeIndex = useRef<number | null>(0);
   const [timeBlocks, setTimeBlocks] = useState<TimeBlockProps[]>(getDefaultBlockList());

   useEffect(() => {
      console.log('Set TimeBlocks from fetch or leave as default if fetch fails');
   }, []);

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

   const handleChangeColor = (index: number) => {
      const newArr = [...timeBlocks];
      newArr[index].color = 'red';
      setTimeBlocks(newArr);
   };

   const handleStart = (
      event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>,
   ) => {
      setIsDragging(true);
      const target = event.target as HTMLElement;
      const dataIndexElement = target.closest('[data-index]') as HTMLElement;
      if (dataIndexElement && dataIndexElement.dataset && dataIndexElement.dataset.index) {
         const index = Number(dataIndexElement.dataset.index);
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
         <StandardTimeBlockRow>
            {timeBlocks.slice(0, 12).map((block) => (
               <TimeBlock
                  key={`AM${block.dataIndex}`}
                  dataIndex={block.dataIndex}
                  size='large'
                  color={block.color}
               />
            ))}
         </StandardTimeBlockRow>
         <StandardTimeBlockRow>
            {timeBlocks.slice(12).map((block) => (
               <TimeBlock
                  key={`PM${block.dataIndex}`}
                  dataIndex={block.dataIndex}
                  size='large'
                  color={block.color}
               />
            ))}
         </StandardTimeBlockRow>
      </Container>
   );
};

export default Schedule;
