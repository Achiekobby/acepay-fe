import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./Routes/app_routes";
import "./scss/global.scss";

const router = createBrowserRouter(routes);
function App() {
  return (
    <div className="app">
      <RouterProvider className="pages" router={router}></RouterProvider>
    </div>
  );
}

export default App;
