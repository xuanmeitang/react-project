import {createBrowserRouter} from "react-router-dom";
import ToDoList from "../components/ToDoList";
import Context from "../components/Context";
import Redux from "../components/Redux";
import UseEffect from "../components/UseEffect";
import NotFound from "../components/NotFound";
import App from "@/App";
import {Ctx} from "@/api/context";
import {Provider} from "react-redux";
import store from "@/store/index";
import Login from "@/components/Login";
import {AuthRoute} from "@/components/AuthRoute";
import {Navigate} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "home",
    element: (
      <AuthRoute>
        <App />
      </AuthRoute>
    ),
    children: [
      {
        index: true,
        element: <ToDoList />,
      },
      {
        path: "todoList",
        element: <ToDoList />,
      },
      {
        path: "context",
        element: (
          <Ctx.Provider value="hello context">
            <Context />
          </Ctx.Provider>
        ),
      },
      {
        path: "redux",
        element: <Redux />,
      },
      {
        path: "useEffect",
        element: <UseEffect />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <Navigate
        to="/login"
        replace
      />
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
