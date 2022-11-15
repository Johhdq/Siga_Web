import { useState } from "react";
import { LeftSideBar } from "./components/LeftSideBar";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notas } from "./pages/notas";
import { Horario } from "./pages/horario";

function App() {
  const user = "Kauan";

  return (
    <main className="container">
      <BrowserRouter>
        {user ? (
          <>
            <LeftSideBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/notas" element={<Notas />} />
              <Route path="/horario" element={<Horario />} />

              <Route path="*" element={<Home />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </main>
  );
}

export default App;
