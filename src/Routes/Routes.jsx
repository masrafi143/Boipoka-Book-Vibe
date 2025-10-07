import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('booksData.json'),
        path: "/",
        Component: Home
      }
    ]
  },
  {
    path: "*",
    Component: ErrorPage
  }

]);