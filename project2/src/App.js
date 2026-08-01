import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout"

import StopTimeOut from "./components/pages/StopTimeOut";
import StopWatch from "./components/pages/StopWatch";

// another ways...
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<StopTimeOut />} />
      <Route path="/stop-watch" element={<StopWatch />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;