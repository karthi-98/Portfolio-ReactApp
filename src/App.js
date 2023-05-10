import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Aboutme from "./Components/Aboutme";
import Eduqu from "./Components/Eduqu";
import Projects from "./Components/Projects";
import RootMain from "./Components/RootMain";
import Errorpage from "./Components/ErrorPage";
import Aboutsite from "./Components/Aboutsite";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootMain />,
      errorElement: <Errorpage />,
      children: [
        {
          path: "",
          element: <Aboutme />,
        },
        {
          path: "education",
          element: <Eduqu />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "aboutsite",
          element: <Aboutsite />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
