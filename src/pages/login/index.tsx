import "./styles.css";
import logo from "../../assets/logo_siga.png";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import axios from "axios";

type LoginResponse = {
  sucess: string;
  id: number;
  typeUser: number;
};

export function Login() {
  const navigate = useNavigate();
  const { saveUser } = useContext(AuthContext);

  const baseUrl = "url";

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    let credentials = {
      cpf: (document.getElementById("login") as HTMLInputElement).value,
      senha: (document.getElementById("senha") as HTMLInputElement).value,
    };

    try {
      const loginResponse: LoginResponse = await axios.post(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!loginResponse) {
        console.log("erro ao realizar login");
        return;
      }

      saveUser(loginResponse.id);
      navigate("/");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginContent">
      <div className="img">
        <img src={logo} alt="Logo-siga" />
      </div>

      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="input">
          <span>Login:</span>
          <input type="text" id="login" placeholder="Digite seu CPF" required />
        </div>
        <div className="input">
          <span>Senha:</span>
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
