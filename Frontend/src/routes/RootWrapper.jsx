import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import About from "./About";
import Faqs from "./Faqs";
import GetQuotation from "./GetQuotation";
import ScreenPrinting from "./ScreenPrinting";
import Sublimation from "./Sublimation";
import Dtf from "./Dtf";
import CustomTshirt from "./CustomTshirt";
import Hoodies from "./Hoodies";
import Professional from "./Professional";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index : true, element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Faqs", element: <Faqs /> },
      { path: "/GetQuotation", element: <GetQuotation /> },
      { path: "/screen-printing", element: <ScreenPrinting /> },
      { path: "/sublimation", element: <Sublimation /> },
      { path: "/dtf", element: <Dtf /> },
      { path: "/custom-tshirt", element: <CustomTshirt /> },
      { path: "/hoodies", element: <Hoodies /> },
      { path: "/professional", element: <Professional /> },
    ],
  },
]);

function RootWrapper() {
  return <RouterProvider router={router} />;
}

export default RootWrapper;
