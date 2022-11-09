import { useState } from "react";
import { LeftSideBar } from "./components/LeftSideBar";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <Login />
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
