import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { CustomForm } from './CustomForm';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/form",
    element: <CustomForm/>,
  },
]);

export const CustomRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}
