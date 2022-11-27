import "./styles.css";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { useState } from "react";
import { MdNotStarted } from "react-icons/md";

type Grade = {
  n1: number | null;
  n2: number | null;
  n3: number | null;
  subjectId: number;
  subjectName: string;
};

export function Notas() {
  const { user } = useContext(AuthContext);
  const [grades, setGrade] = useState<Grade[]>([]);
  const baseUrl = "url";

  // Resgatando dados
  useEffect(() => {
    axios
      .get(`${baseUrl}/notas/${user?.id}`)
      .then((response) => {
        if (!response) {
          console.log("erro ao consultar");
        }
        setGrade(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="contentNotas">
      <h1>Notas</h1>
      <div className="disciplinaContainer">
        <header className="disciplinaTopics">
          <h2 className="disciplinaTopicsTitle">Disciplina</h2>

          <div style={{ display: "flex", gap: 32 }}>
            <div className="notas">
              <h2>N1</h2>
              <h2>N2</h2>
              <h2>N3</h2>
            </div>
            <h2>Média Final</h2>
          </div>
        </header>

        {grades &&
          grades.map((grade) => (
            <div className="notasRow">
              <div className="disciplina">
                <p className="disciplinaTitle">{grade.subjectName}</p>
              </div>
              <div style={{ display: "flex", gap: 32 }}>
                <div className="notasValues">
                  <div className="notaCard">
                    <p style={{ color: "royalblue" }}>
                      {grade.n1 ? grade.n1 : "-"}
                    </p>
                  </div>
                  <div className="notaCard">
                    <p style={{ color: "#b20000" }}>
                      {grade.n2 ? grade.n2 : "-"}
                    </p>
                  </div>
                  <div className="notaCard">
                    <p>{grade.n3 ? grade.n3 : "-"}</p>
                  </div>
                </div>

                <div className="mediaFinal">
                  <p style={{ color: "royalblue" }}>
                    <strong>6</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}

        <div className="notasRow">
          <div className="disciplina">
            <p className="disciplinaTitle">
              Gestão e Governança de Tecnologia da Informação
            </p>
          </div>
          
          <div style={{ display: "flex", gap: 32 }}>
            <div className="notasValues">
              <div className="notaCard">
                <p style={{ color: "royalblue" }}>10</p>
              </div>
              <div className="notaCard">
                <p style={{ color: "#b20000" }}>2</p>
              </div>
              <div className="notaCard">
                <p>-</p>
              </div>
            </div>

            <div className="mediaFinal">
              <p style={{ color: "royalblue" }}>
                <strong>6</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="notasRow">
          <div className="disciplina">
            <p className="disciplinaTitle">
              Tópicos Especiais em Informática (Escolha 2)
            </p>
          </div>

          <div style={{ display: "flex", gap: 32 }}>
            <div className="notasValues">
              <div className="notaCard">
                <p style={{ color: "royalblue" }}>10</p>
              </div>
              <div className="notaCard">
                <p style={{ color: "#b20000" }}>2</p>
              </div>
              <div className="notaCard">
                <p>-</p>
              </div>
            </div>

            <div className="mediaFinal">
              <p style={{ color: "royalblue" }}>
                <strong>6</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="notasRow">
          <div className="disciplina">
            <p className="disciplinaTitle">
              Gestão e Governança de Tecnologia da Informação
            </p>
          </div>

          <div style={{ display: "flex", gap: 32 }}>
            <div className="notasValues">
              <div className="notaCard">
                <p style={{ color: "royalblue" }}>10</p>
              </div>
              <div className="notaCard">
                <p style={{ color: "#b20000" }}>2</p>
              </div>
              <div className="notaCard">
                <p>-</p>
              </div>
            </div>

            <div className="mediaFinal">
              <p style={{ color: "royalblue" }}>
                <strong>6</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="notasRow">
          <div className="disciplina">
            <p className="disciplinaTitle">
              Tópicos Especiais em Informática (Escolha 2)
            </p>
          </div>

          <div style={{ display: "flex", gap: 32 }}>
            <div className="notasValues">
              <div className="notaCard">
                <p style={{ color: "royalblue" }}>10</p>
              </div>
              <div className="notaCard">
                <p style={{ color: "#b20000" }}>2</p>
              </div>
              <div className="notaCard">
                <p>-</p>
              </div>
            </div>

            <div className="mediaFinal">
              <p style={{ color: "royalblue" }}>
                <strong>6</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="notasRow">
          <div className="disciplina">
            <p className="disciplinaTitle">
              Gestão e Governança de Tecnologia da Informação
            </p>
          </div>

          <div style={{ display: "flex", gap: 32 }}>
            <div className="notasValues">
              <div className="notaCard">
                <p style={{ color: "royalblue" }}>10</p>
              </div>
              <div className="notaCard">
                <p style={{ color: "#b20000" }}>2</p>
              </div>
              <div className="notaCard">
                <p>-</p>
              </div>
            </div>

            <div className="mediaFinal">
              <p style={{ color: "royalblue" }}>
                <strong>6</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="notasRow">
          <div className="disciplina">
            <p className="disciplinaTitle">
              Tópicos Especiais em Informática (Escolha 2)
            </p>
          </div>

          <div style={{ display: "flex", gap: 32 }}>
            <div className="notasValues">
              <div className="notaCard">
                <p style={{ color: "royalblue" }}>10</p>
              </div>
              <div className="notaCard">
                <p style={{ color: "#b20000" }}>2</p>
              </div>
              <div className="notaCard">
                <p>-</p>
              </div>
            </div>

            <div className="mediaFinal">
              <p style={{ color: "royalblue" }}>
                <strong>6</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="notasRow">
          <div className="disciplina">
            <p className="disciplinaTitle">
              Gestão e Governança de Tecnologia da Informação
            </p>
          </div>

          <div style={{ display: "flex", gap: 32 }}>
            <div className="notasValues">
              <div className="notaCard">
                <p style={{ color: "royalblue" }}>10</p>
              </div>
              <div className="notaCard">
                <p style={{ color: "#b20000" }}>2</p>
              </div>
              <div className="notaCard">
                <p>-</p>
              </div>
            </div>

            <div className="mediaFinal">
              <p style={{ color: "royalblue" }}>
                <strong>6</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="notasRow">
          <div className="disciplina">
            <p className="disciplinaTitle">
              Tópicos Especiais em Informática (Escolha 2)
            </p>
          </div>

          <div style={{ display: "flex", gap: 32 }}>
            <div className="notasValues">
              <div className="notaCard">
                <p style={{ color: "royalblue" }}>10</p>
              </div>
              <div className="notaCard">
                <p style={{ color: "#b20000" }}>2</p>
              </div>
              <div className="notaCard">
                <p>-</p>
              </div>
            </div>

            <div className="mediaFinal">
              <p style={{ color: "royalblue" }}>
                <strong>6</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="notasRow">
          <div className="disciplina">
            <p className="disciplinaTitle">
              Tópicos Especiais em Informática (Escolha 2)
            </p>
          </div>

          <div style={{ display: "flex", gap: 32 }}>
            <div className="notasValues">
              <div className="notaCard">
                <p style={{ color: "royalblue" }}>10</p>
              </div>
              <div className="notaCard">
                <p style={{ color: "#b20000" }}>2</p>
              </div>
              <div className="notaCard">
                <p>-</p>
              </div>
            </div>

            <div className="mediaFinal">
              <p style={{ color: "royalblue" }}>
                <strong>6</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
