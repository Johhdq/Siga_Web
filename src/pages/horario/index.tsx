import { Card } from "../../components/Card";
import { CardType } from "../../interfaces/interfaces";
import "./styles.css";

export function Horario() {
  return (
    <div className="contentHorario">
      <h1>Horário</h1>
      <header className="sumarioHorario">
        <table>
          <thead>
            <td>
              <h3>Sigla</h3>
            </td>
            <td></td>
            <td></td>
            <td>
              <h3>Disciplina</h3>
            </td>
            <td>
              <h3>Professor(a)</h3>
            </td>
          </thead>

          <tbody className="sumarioContent">
            <tr>
              <td>
                <p>AGO005</p>
              </td>
              <td>
                <div className="disciplinaSumarioColor"></div>
              </td>
              <td className="whiteSpace">-</td>
              <td>
                <p>Gestão de Projetos - 4hs/aula</p>
              </td>
              <td>
                <p>NELSON JULIO DE OLIVEIRA MIRANDA</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>AGR101</p>
              </td>
              <td>
                <div className="disciplinaSumarioColor"></div>
              </td>
              <td className="whiteSpace">-</td>
              <td>
                <p>Gestão de Equipes - 2hs/aula</p>
              </td>
              <td>
                <p>EVERALDO HENRIQUE DOS SANTOS BARBOSA</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>CEE002</p>
              </td>
              <td>
                <div className="disciplinaSumarioColor"></div>
              </td>
              <td className="whiteSpace">-</td>
              <td>
                <p>Empreendedorismo - 2hs/aula</p>
              </td>
              <td>
                <p>EVERALDO HENRIQUE DOS SANTOS BARBOSA</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>HSO003</p>
              </td>
              <td>
                <div className="disciplinaSumarioColor"></div>
              </td>
              <td className="whiteSpace">-</td>
              <td>
                <p>Ética e Responsabilidade Profissional - 2hs/aula</p>
              </td>
              <td>
                <p>WILLIAM CARLOS CRUZ</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>ISA002</p>
              </td>
              <td>
                <div className="disciplinaSumarioColor"></div>
              </td>
              <td className="whiteSpace">-</td>
              <td>
                <p>Auditoria de Sistemas (Escolha 3) - 4hs/aula</p>
              </td>
              <td>
                <p>ADRIANO SUNAO NAKAMURA</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>ITE002</p>
              </td>
              <td>
                <div className="disciplinaSumarioColor"></div>
              </td>
              <td className="whiteSpace">-</td>
              <td>
                <p>Tópicos Especiais em Informática (Escolha 2) - 4hs/aula</p>
              </td>
              <td>
                <p>LARISSA PAVARINI DA LUZ</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>ITI004</p>
              </td>
              <td>
                <div className="disciplinaSumarioColor"></div>
              </td>
              <td className="whiteSpace">-</td>
              <td>
                <p>
                  Gestão e Governança de Tecnologia da Informação - 4hs/aula
                </p>
              </td>
              <td>
                <p>ECIDIR FERREIRA ADORNO FILHO</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>TES001</p>
              </td>
              <td>
                <div className="disciplinaSumarioColor"></div>
              </td>
              <td className="whiteSpace">-</td>
              <td>
                <p>Estágio Supervisionado - 12hs/aula</p>
              </td>
              <td>
                <p>CRISTÓVAM EMÍLIO HERCULIANI</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>TTG103</p>
              </td>
              <td>
                <div className="disciplinaSumarioColor"></div>
              </td>
              <td className="whiteSpace">-</td>
              <td>
                <p>Trabalho de Graduação II - 4hs/aula</p>
              </td>
              <td>
                <p>RENATA APARECIDA DE CARVALHO PASCHOAL</p>
              </td>
            </tr>
          </tbody>
        </table>
      </header>

      <div className="horarioGrid">
        <table>
          <thead>
            <td></td>
            <td>
              <h2>Segunda</h2>
            </td>
            <td>
              <h2>Terça</h2>
            </td>
            <td>
              <h2>Quarta</h2>
            </td>
            <td>
              <h2>Quinta</h2>
            </td>
            <td>
              <h2>Sexta</h2>
            </td>
          </thead>

          <tbody className="horarioGridContent">
            <tr>
              <td>
                <Card texto="19:00 - 19:50" tipo={CardType.Horario} />
              </td>

              <td>
                <Card texto="CEE002" tipo={CardType.Disciplina} cor="green" />
              </td>

              <td>
                <Card texto="CEE002" tipo={CardType.Disciplina} cor="green" />
              </td>

              <td>
                <Card texto="CEE002" tipo={CardType.Disciplina} cor="green" />
              </td>

              <td>
                <Card texto="CEE002" tipo={CardType.Disciplina} cor="green" />
              </td>

              <td>
                <Card texto="CEE002" tipo={CardType.Disciplina} cor="green" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
