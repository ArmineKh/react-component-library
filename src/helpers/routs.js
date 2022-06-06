import {  HomePage, TablePage, CardPage, DropdownPage } from "../component";

export const ROUTS = [
  {
    path: '/',
    name: 'Home',
    element: <HomePage />
  },
  {
    path: '/table',
    name: 'Table',
    element: <TablePage />
  },
  {
    path: '/card',
    name: 'Card',
    element: <CardPage />
  },
  {
    path: '/dropdown',
    name: 'Home',
    element: <DropdownPage />
  },
];