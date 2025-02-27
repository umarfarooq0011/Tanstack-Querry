import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { MainLayout } from "./components/Layout/Mainlayout";
import { Home } from "./pages/home";
import { FetchOld } from "./pages/FetchOld";
import { FetchRq } from "./pages/FetchRq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/trad", element: <FetchOld /> },
      { path: "/rq", element: <FetchRq /> }
    ]
  }
]);

const App = () => {
   
   return <RouterProvider router={router}></RouterProvider>;
};

export default App;
