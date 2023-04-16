import React, { useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';

// Fetch call to get Chores from the API
const getChores = async (): Promise<ChoreCollectionDTO> => {
   const response = await fetch('http://localhost:8080/chores/chores');
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

   useEffect(() => {
      getChores().then((data) => {
         setChores(data._embedded.choreDTOes);
      });
   }, []);

   return (
      <div>
         <ul>
            {chores.map((chore, index) => (
               <li key={chore.name}>{chore.name}</li>
            ))}
         </ul>
      </div>
   );
}

export default App;
