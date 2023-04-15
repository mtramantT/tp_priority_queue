import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import ThemeBoundary from './ThemeBoundary';
import IdeaSort from './IdeaSort/IdeaSort';
import { Provider } from 'react-redux';
import { store } from './store';
import Thoughts from './Thoughts';
import Inbox from './Inbox/Inbox';
import QuickAccess from './features/widgets/QuickAccess/QuickAccess';
import MainLayout from './features/layouts/MainLayout';
import BodyLayout from './features/layouts/BodyLayout';
import Navbar from './features/Navbar/Navbar';
import Navbar2 from './features/Navbar/Navbar2';

library.add(faTrashAlt);

function App() {
   return (
      <ThemeBoundary>
         <Provider store={store}>
            {/* <IdeaSort /> */}
            {/* <Thoughts category='thoughts' /> */}
            <MainLayout>
               {{
                  navBar: <Navbar />,
                  body: <div>test</div>,
               }}
            </MainLayout>
         </Provider>
      </ThemeBoundary>
   );
}

export default App;
