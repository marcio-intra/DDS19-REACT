import { createBrowserRouter } from "react-router-dom";

//Importação das páginas
import App from "./App.jsx"
import PaginaErro from "./pages/PaginaErro.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Cadastro from "./pages/Cadastro.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
    ],
  },
]);

export default router