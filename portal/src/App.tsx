import React, { useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import useModal from './features/modal/useModal';
import Modal from './features/modal/modal';

// Fetch call to get Chores from the API
const getChores = async (): Promise<ChoreCollectionDTO> => {
   const response = await fetch('http://localhost:8080/chores/chores');
   const data = await response.json();
   return data;
};

// Fetch call to get the next priority chore from the API
const getNextChore = async (): Promise<ChoreDTO> => {
   const response = await fetch('http://localhost:8080/pq/next');
   const data = await response.json();
   return data;
};

interface ChoreTaskDTO {
   name: string;
   description: string;
   priority: number;
}

interface ChoreDTO {
   id: number;
   name: string;
   description: string;
   priority: number;
   tasks: ChoreTaskDTO[];
   _links: {
      self: {
         href: string;
      };
   };
}

interface ChoreCollectionDTO {
   _embedded: {
      choreDTOes: ChoreDTO[];
   };
   _links: {
      self: {
         href: string;
      };
   };
}

function App() {
   const [chores, setChores] = React.useState<ChoreDTO[]>([]);
   const [nextChore, setNextChore] = React.useState<ChoreDTO>();
   const { isOpen, toggle } = useModal();

   useEffect(() => {
      getChores().then((data) => {
         setChores(data._embedded.choreDTOes);
      });
   }, []);

   useEffect(() => {
      getNextChore().then((data) => {
         setNextChore(data);
      });
   }, []);

   return (
      <div>
         <h1>T-Portal Priority Queue</h1>
         <h2>Next Chore</h2>
         <div>{nextChore?.name}</div>
         <h2>New Chore?</h2>
         <div>
            <button onClick={toggle}>Add New</button>
            <Modal isOpen={isOpen} toggle={toggle}>
               <h3>Modal</h3>
               <p>Modal Content</p>
            </Modal>
         </div>
         <h2>Chores</h2>
         <ul>
            {chores.map((chore, index) => (
               <li key={chore.name}>{chore.name}</li>
            ))}
         </ul>
      </div>
   );
}

export default App;
