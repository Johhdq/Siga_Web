import { useState } from "react";
import { LeftSideBar } from "./components/LeftSideBar";
import { Home } from "./pages/home";
import { Login } from "./pages/login";

function App() {
  return (
    // <Login />
    <main className="container">
      <LeftSideBar />
      <Home />
    </main>
  );
}

export default App;
