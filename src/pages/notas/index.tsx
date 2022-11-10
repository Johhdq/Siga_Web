import "./styles.css";

export function Notas() {
  return (
    <div className="contentNotas">
      <h1>Notas</h1>
      <div className="disciplinaContainer">
        <header className="disciplinaTopics">
          <h2>Disciplina</h2>
          <div style={{ display: "flex" }}>
            <div className="notas">
              <h2>N1</h2>
              <h2>N2</h2>
              <h2>N3</h2>
            </div>
            <h2>Média Final</h2>
          </div>
        </header>

        <div className="notasRow">
          <div className="disciplina">
            <p>Gestão e Governança de Tecnologia da Informação</p>
          </div>

          <div className="notasValues">
            <div className="notaCard">
              <p style={{color: "royalblue"}}>10</p>
            </div>
            <div className="notaCard">
              <p style={{color: "#b20000"}}>2</p>
            </div>
            <div className="notaCard">
              <p>-</p>
            </div>
          </div>

          <div className="mediaFinal">
            <p style={{color: "royalblue"}}><strong>6</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}
