import Home from "./../pages/Home";
import Auth from "./../pages/Auth";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "auth/signup",
    element: <Auth />,
  },
  {
    path: "auth/login",
    element: <Auth />,
  },
];
