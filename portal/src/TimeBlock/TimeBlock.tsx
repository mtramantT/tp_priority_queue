import React, { useState } from 'react';
import styled from 'styled-components';
import CategorySelect from './components/CategorySelect';
import HourBlockGroup from './components/HourBlockGroup';

interface Props {}

const Container = styled.div`
   box-sizing: border-box;
   border: 1px solid black;
   padding: 10px;
`;

const TimeBlock: React.FC<Props> = (props: Props) => {
   const {} = props;
   const [color, setColor] = useState<string>('blue');
   const [categories, setCategories] = useState<
      { name: string; color: string; handleClick: (color: string) => void }[]
   >([
      { name: 'Any', color: 'yellow', handleClick: setColor },
      { name: 'Work', color: 'blue', handleClick: setColor },
      { name: 'Play', color: 'red', handleClick: setColor },
      { name: 'Koda', color: 'orange', handleClick: setColor },
      { name: 'Sleep', color: 'green', handleClick: setColor },
   ]);
   const [blocks, setBlocks] = useState<{ blockNumber: number; color: string }[]>(
      Array.from({ length: 24 }, (_, i) => {
         return {
            blockNumber: i,
            color: 'white',
         };
      }),
   );
   const handleChangeColor = (index: number) => {
      const newArr = [...blocks];
      newArr[index].color = color;
      setBlocks(newArr);
   };

   return (
      <Container>
         <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr', gridGap: '20px' }}>
            <div style={{ padding: '10px', border: '1px solid black', height: '500px' }}>
               <CategorySelect categories={categories} />
            </div>
            <div
               style={{
                  padding: '10px',
                  border: '1px solid black',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
               }}
            >
               <h1>Time Block</h1>
               <HourBlockGroup blocks={blocks} handleChangeColor={handleChangeColor} />
            </div>
         </div>
      </Container>
   );
};

export default TimeBlock;
