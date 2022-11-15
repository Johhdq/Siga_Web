import "./styles.css"
import { CardType } from "../../interfaces/interfaces";

interface CardProps {
  tipo: CardType;
  texto: string;
  cor?: string;
}

export function Card({ tipo, texto, cor }: CardProps) {
  return CardType.Horario == tipo ? (
    <div className="cardHorario">
      <p>{texto}</p>
    </div>
  ) : (
    <div className="cardDisciplina">
      <div className="disciplinaFlex">
        <p>CEE002</p>
        <div
          className="disciplinaColor"
          style={{ backgroundColor: cor ? cor : "" }}
        ></div>
      </div>
    </div>
  );
}
