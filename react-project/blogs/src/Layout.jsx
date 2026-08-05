import React from "react";
import Header from "./pages/other/Header";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header />

            <main className="container blog-container">
                <Outlet />
            </main>
        </>
    );
}

export default Layout;