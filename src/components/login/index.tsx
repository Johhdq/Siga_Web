import "./styles.css";
import logo from '../../assets/logo_siga.png';

export function Login() {
    return (
        <div className="loginContent">
            <div className="img">
                <img src={logo} alt="Logo-siga" />
            </div>

            <form className="loginForm">
                <div className="input">
                    <span>Login:</span>
                    <input type="text" placeholder="Digite seu CPF" required />
                </div>
                <div className="input">
                    <span>Senha:</span>
                    <input type="password" placeholder="Digite sua senha" required/>
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}