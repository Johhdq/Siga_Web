// Transformar em um componente a sidebar para utilizar em todas as telas
import { useEffect } from "react";
import { MdArrowForward } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo_siga.png";
import { Profile } from "../Profile";
import "./styles.css";

export function LeftSideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="leftBar">
      <Profile />

      <div className="pagesList">
        <div className="pagesListContainer">
          <div className="pageItems">
            <span>Notas</span>
            <MdArrowForward
              className={location.pathname == "/notas" ? "icon active" : "icon"}
              onClick={() => navigate("/notas")}
            />
          </div>
          <div className="pageItems">
            <span>Horário</span>
            <MdArrowForward
              className={
                location.pathname == "/horario" ? "icon active" : "icon"
              }
              onClick={() => navigate("/horario")}
            />
          </div>
          <div className="pageItems">
            <span>Faltas</span>
            <MdArrowForward
              className={
                location.pathname == "/faltas" ? "icon active" : "icon"
              }
              onClick={() => navigate("/faltas")}
            />
          </div>
        </div>

        <div className="logo">
          <img
            src={logo}
            alt="logoSiga"
            style={{ width: "inherit" }}
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
}
