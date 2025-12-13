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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        element: (
          <Provider store={store}>
            <Redux />
          </Provider>
        ),
      },
      {
        path: "useEffect",
        element: <UseEffect />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
