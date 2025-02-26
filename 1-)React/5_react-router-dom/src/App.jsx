import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Story from "./pages/Story";
import Novel from "./pages/Novel";
import Products from "./pages/Products";
import Layout from "./components/Layout";

// createBrowserRouter ile routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ürünler",
        element: <Products />,
      },
      {
        path: "/detay/:id",
        element: <Detail />,
      },
      {
        path: "/kategori",
        element: <Category />,
        children: [
          { path: "hikaye", element: <Story /> },
          { path: "roman", element: <Novel /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
