/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import clientAxios from '../../config/configAxios';
import { removeAllLocalStorage, getLocalStorage, setLocalStorage } from '../../hooks/localStorageHook';

export default function PrivateRoute() {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    clientAxios.get('/users/auth')
      .then((res) => {
        setLogged(true);
        setLocalStorage('user', res.data.user);
      })
      .catch((err) => {
        console.error(err.message, err.response.data.message);
        setLogged(false);
        removeAllLocalStorage();
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    !loading
      ? logged
        ? <Outlet />
        : getLocalStorage('user')
          ? <Navigate to="/home" />
          : <Navigate to="/" />
      : <p>Loading...</p>
  );
}
