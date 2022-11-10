// Transformar em um componente a sidebar para utilizar em todas as telas
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_siga.png";
import { Profile } from "../Profile";
import "./styles.css";

export function LeftSideBar() {
  const navigate = useNavigate();

  return (
    <div className="leftBar">
      <Profile />

      <div className="pagesList">
        <div className="pagesListContainer">
          <div className="pageItems">
            <span>Notas</span>
            <MdArrowForward
              className="icon"
              onClick={() => navigate("/notas")}
            />
          </div>
          <div className="pageItems">
            <span>Horário</span>
            <MdArrowForward
              className="icon"
              onClick={() => navigate("/horario")}
            />
          </div>
          <div className="pageItems">
            <span>Faltas</span>
            <MdArrowForward
              className="icon"
              onClick={() => navigate("/faltas")}
            />
          </div>
        </div>

        <div className="logo">
          <img src={logo} alt="logoSiga" style={{ width: "inherit" }} onClick={() => navigate("/")} />
        </div>
      </div>
    </div>
  );
}
