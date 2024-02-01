import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Calendar from './Calendar';
import QueryPoke from './QueryPoke';
import SideMenu from './SideMenu';

const RoutesLink = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SideMenu />}>
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/api" element={<QueryPoke />} />
    </Route>
  )
);

export default RoutesLink;
