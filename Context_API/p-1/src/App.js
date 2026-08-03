import React from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
function App() {
  return (
    <UserContextProvider>
      <Login />
    </UserContextProvider>
  );
}

export default App;
