import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App";
import "./main.css";
import ItemRoot from "./routes/ItemRoot";
import Cart from "./componentes/Cart/Cart";
import CustomContextProvider from "../context";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6-RB_ULxdLUXHrJs-FdzbqgqerGOT4E8",
  authDomain: "ecommerce-react-7482a.firebaseapp.com",
  projectId: "ecommerce-react-7482a",
  storageBucket: "ecommerce-react-7482a.appspot.com",
  messagingSenderId: "977118536972",
  appId: "1:977118536972:web:0d59c8e9548bfd05ce9529"
};


const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/category/:id",
    element: <App />,
  },
  {
    path: "/item/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <div>Hola mundo</div>,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomContextProvider>
    <RouterProvider router={router} />
    </CustomContextProvider>
  </React.StrictMode>
);
