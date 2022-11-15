import "./styles.css";
import logo from '../../assets/logo_siga.png';
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

export function Login() {
    const navigate = useNavigate();
    const { saveUser } = useContext(AuthContext);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(event);
        let cpf = (document.getElementById("login") as HTMLInputElement).value;
        let senha = (document.getElementById("senha") as HTMLInputElement).value;

        console.log(`CPF: ${cpf}; SENHA: ${senha}`);
        
        const loginResponse = 1 //fazer chamada na api
        saveUser(loginResponse)
        
        navigate('/');
    }

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
                    <input type="password" id="senha" placeholder="Digite sua senha" required />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}