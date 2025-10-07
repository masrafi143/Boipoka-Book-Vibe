import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/Books/BookDetails";


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
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch('booksData.json'),
        Component: BookDetails
      }
    ]
  },
  {
    path: "*",
    Component: ErrorPage
  }

]);