import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Layout from "./components/Layout";
import Page404 from "./pages/Page404";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 
      error={"404"} 
      title={"Page Not Found"} 
      text={"The page you are looking for does not exist"} 
      linkTo={"Back to Home"}/>,
      children: routes,
    }
  ]);
  return <RouterProvider router={router} />;
}