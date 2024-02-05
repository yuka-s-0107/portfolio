import { RouterProvider } from 'react-router-dom';
import './App.css';

import RoutesLink from './RoutesLink';
import QueryPoke from './QueryPoke';

function App() {
  return (
    <>
      <RouterProvider router={RoutesLink} />
      {/* <QueryPoke /> */}
    </>
  );
}

export default App;
