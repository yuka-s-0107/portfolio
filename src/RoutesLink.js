import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Calendar from './Calendar';
import QueryPoke from './QueryPoke';
import PersistentDrawer from './PersistentDrawer';

const RoutesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PersistentDrawer />}>
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/api" element={<QueryPoke />} />
    </Route>
  )
);

export default RoutesLink;
