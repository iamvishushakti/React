import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout"
import projects from "./data/ptojectData"

import StopTimeOut from "./components/pages/StopTimeOut";

// another ways...
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<StopTimeOut />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;