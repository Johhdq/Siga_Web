import "./styles.css";
import logo from "../../assets/logo_siga.png";

export function Home() {
  return (
    <div className="container">
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
              <i>-</i>
            </div>
            <div className="pageListItem">
              <span>Item</span>
              <i>-</i>
            </div>
            <div className="pageListItem">
              <span>Item</span>
              <i>-</i>
            </div>
          </div>

          <div className="logo">
            <img src={logo} alt="logoSiga" style={{ width: "inherit" }} />
          </div>
        </div>
      </div>
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
