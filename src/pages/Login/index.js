import React from "react";
import { Link } from "react-router-dom";
import Academy from "./Academy.png";
import Password_Hidden from "./Password Hidden.png";
import "./style-login.css";

const Login = () => {
    return (
        <div className="conteudo">
            <div className="card">
                <div className="card-titulo">
                    <img src={Academy} />
                </div>
                <div className="card-conteudo">
                    <form>
                        <div className="label-email">
                            <label for="email">
                                <p>E-mail</p>
                                <input id="email" name="email" type="email" placeholder="exemplo@gmail.com" />
                            </label>
                        </div>
                        <div className="label-password">
                            <label for="password">
                                <p>Senha</p>
                                <input id="password" name="password" type="password" />
                                <img src={Password_Hidden} />
                            </label>
                        </div>
                        <button>Entrar</button>
                    </form>
                    <div className="forgot-password">
                        <Link to="/forgot-password">Esqueci minha senha</Link>
                    </div>
                </div>
            </div>
            <div className="rodape">
                Não tem uma conta? <Link to="/register">Cadastre-se!</Link>
            </div>
        </div>
    )
}

export default Login;
