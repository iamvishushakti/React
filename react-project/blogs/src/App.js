import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Outlet } from "react-router-dom";

// import context
import BlogContextProvider from "./Context/Blog/BlogContextProvider";
import AuthContextProvider from "./Context/auth/AuthContextProvider";

//import pages
import Layout from "./Layout"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/CategoryPage";


// Route
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="category" element={<Outlet />}>
                    <Route index element={<>Category</>} />
                    <Route path=":slug" element={<CategoryPage />} />
                </Route>
            </Route>
        </>
    )
);

function App() {
  return (
    <AuthContextProvider>
      <BlogContextProvider>
        <RouterProvider router={router}/>
      </BlogContextProvider>
    </AuthContextProvider>
  );
}

export default App;