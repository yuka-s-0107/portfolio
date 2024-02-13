import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Calendar from './Calendar';
import QueryPoke from './QueryPoke';
import PersistentDrawer from './PersistentDrawer';
import AboutMe from './AboutMe';

const RoutesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PersistentDrawer />}>
      <Route path="/" element={<AboutMe />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/api" element={<QueryPoke />} />
    </Route>
  )
);

export default RoutesLink;
