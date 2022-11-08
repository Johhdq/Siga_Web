import "./styles.css";
import { MdArrowForward } from "react-icons/md";
import logo from "../../assets/logo_siga.png";

export function Home() {
  return (
    <div className="container">
      {/* Trasnformar em um componente --- Inicio */}

      <div className="leftBar">
        <div className="perfil">
          <div className="imgContainer">
            <div className="homeImg">
              <h1>LO</h1>
            </div>
          </div>

          <div className="informations">
            <p>
              <strong>Nome: </strong>Leba Omrac
            </p>
            <p>
              <strong>Email: </strong>leba.omrac@fatec.sp.gov.br
            </p>
            <p>
              <strong>RA: </strong>1190482013012
            </p>
          </div>
        </div>

        <div className="pageList">
          <div className="pageListNavigators">
            <div className="pageListItem">
              <span>Item</span>
              <MdArrowForward />
            </div>
            <div className="pageListItem">
              <span>Item</span>
              <MdArrowForward />
            </div>
            <div className="pageListItem">
              <span>Item</span>
              <MdArrowForward />
            </div>
          </div>

          <div className="logo">
            <img src={logo} alt="logoSiga" style={{ width: "inherit" }} />
          </div>
        </div>
      </div>

      {/* FIM */}

      <div className="content">
        <h1>
          Bem-vindo ao <strong>SIGA</strong> - Fatec Garça
        </h1>
        <h2>
          Desenvolvido por: Abel Carmo, João Augusto, Kauan Medeiros, e Renan
          Medeiros
        </h2>
      </div>
    </div>
  );
}
