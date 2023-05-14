import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
import RootMain from "./Components/RootMain";
import Education from "./Components/Education";
import AnimationTest from "./Components/AnimationTest";
import ProjSkills from "./Components/Projects & Skills/ProjSkills";
import Certifications from "./Components/Certifications";
import AboutSite from "./Components/AboutSite";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootMain />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "education",
          element: <Education />,
        },
        {
          path: "certifications",
          element: <Certifications />,
        },
        {
          path: "projects&skills",
          element: <ProjSkills />,
        },
        {
          path: "about_site",
          element: <AboutSite />,
        },
      ],
    },
    {
      path: "/animation",
      element: <AnimationTest />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
