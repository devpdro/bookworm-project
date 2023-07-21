import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Global from "./Global.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Books from "./pages/Books";
import Login from "./pages/Login";
import Register from "./pages/Register"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Books",
    element: <Books />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App className={Global} />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
