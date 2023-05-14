import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Schedule from './Schedule/Schedule';
import TimeBlock from './Schedule/components/TimeBlock';
import RuleSet from './RuleSet/RuleSet';

library.add(faTrashAlt);

function App() {
   return (
      <div>
         <Schedule />
         {/* <RuleSet /> */}
      </div>
   );
}

export default App;
