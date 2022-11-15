import { useContext, useState } from "react";
import { LeftSideBar } from "./components/LeftSideBar";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Notas } from "./pages/notas";
import { Horario } from "./pages/horario";
import { Falta } from "./pages/faltas/inde";
import { AuthContext } from "./context/auth";

function App() {
  //const { user } = useContext(AuthContext);
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
              <Route path="/faltas" element={<Falta />} />

              <Route path="*" element={<Home />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </main>
  );
}

export default App;
