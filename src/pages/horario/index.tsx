import "./styles.css";

export function Horario() {
  return (
    <div className="contentHorario">
      <h1>Notas</h1>
      <header className="sumarioHorario">
        <div className="titleHorario">
          <h3>Sigla</h3>
          <h3>Disciplina</h3>
          <h3>Professor(a)</h3>
        </div>

        <div className="sumarioRowList">
          <div className="sumarioRow">
            <div className="sigla">
              <p>AGO005</p>
              <p></p>
            </div>
            <p>Gestão e Governança de Tecnologia da Informação - 4hs/aula</p>
            <p>RENATA APARECIDA DE CARVALHO PASCHOAL</p>
          </div>
        </div>
      </header>
    </div>
  );
}
