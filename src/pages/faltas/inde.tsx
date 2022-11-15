import "./styles.css";

export function Falta() {
  return (
    <div className="contentFaltas">
      <h1>Faltas</h1>

      <div className="faltasGrid">
        <table>
          <thead>
            <td>
              <h2 style={{ marginLeft: 16 }}>Disciplina</h2>
            </td>
            <td>
              <h2 style={{ textAlign: "center" }}>Presenças</h2>
            </td>
            <td>
              <h2 style={{ textAlign: "center" }}>Ausência</h2>
            </td>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className="disciplinaCard">
                  <p>Gestão e Governança de Tecnologia da Informação</p>
                </div>
              </td>
              <td id="presenca">
                <div className="faltaCard">
                  <p>10</p>
                </div>
              </td>
              <td id="ausencia">
                <div className="faltaCard">
                  <p>0</p>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="disciplinaCard">
                  <p>Gestão e Governança de Tecnologia da Informação</p>
                </div>
              </td>
              <td id="presenca">
                <div className="faltaCard">
                  <p>10</p>
                </div>
              </td>
              <td id="ausencia">
                <div className="faltaCard">
                  <p>0</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
