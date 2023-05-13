import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import TimeBlock from './TimeBlock/TimeBlock';

library.add(faTrashAlt);

function App() {
   return (
      <div>
         <TimeBlock />
      </div>
   );
}

export default App;
