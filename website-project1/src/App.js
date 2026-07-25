import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout"
import projects from "./data/ptojectData"

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Project";
import SubProject from "./components/pages/subProject";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {path:"", element:<Home />},
//       {path:"/about", element:<About />},
//       {path:"/contact", element:<Contact />},
//       {path:"/project", element:<Projects />},
//     ]
//   }
// ]);

// another ways...
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Projects projects={projects}/>} />
      <Route path="/project/:pid" element={<SubProject projects={projects}/>} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;