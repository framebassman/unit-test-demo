import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { CustomForm } from './CustomForm';
import { Anonimus } from './Anonimus';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/form",
    element: <CustomForm/>,
  },
  {
    path: "anonimus",
    element: <Anonimus/>,
  },
]);

export const CustomRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}
