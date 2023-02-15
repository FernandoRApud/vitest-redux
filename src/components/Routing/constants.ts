import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import Hello from '../../pages/Hello/Hello';
import { ROUTES } from '../../constants/general';

export const PUBLIC_ROUTES = [
  {
    id: 'public0',
    path: ROUTES.NOT_FOUND,
    component: NotFound,
  },
  {
    id: 'public1',
    path: ROUTES.HOME,
    component: Home,
  },
];

export const PRIVATE_ROUTES = [
  {
    id: 'private0',
    path: ROUTES.HELLO,
    component: Hello,
  },
];
