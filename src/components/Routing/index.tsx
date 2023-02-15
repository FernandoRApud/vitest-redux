import { Route, Routes } from 'react-router-dom';
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from './constants';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export default function Routing() {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          element={<route.component />}
        />
      ))}
      {PRIVATE_ROUTES.map((route) => (
        // <Route key={route.id} element={<PrivateRoute />}>
        <Route
          key={route.id}
          path={route.path}
          element={<route.component />}
        />
        // </Route>
      ))}
    </Routes>
  );
}
