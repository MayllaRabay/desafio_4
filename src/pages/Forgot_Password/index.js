import React from "react";
import { Link } from "react-router-dom";
import Academy from "./Academy.png";
import "./style-password.css";

const Forgot_Password = () => {
    return (
        <div className="conteudo">
            <div className="card">
                <div className="card-titulo">
                    <img src={Academy} />
                </div>
                <div className="card-conteudo">
                    <div className="aviso">
                        Informe o e-mail associado a sua conta e vamos te enviar instruções para resetar sua senha
                    </div>
                    <form>
                        <div className="label-email">
                            <label for="email">
                                <p>E-mail</p>
                                <input id="email" name="email" type="email" placeholder="exemplo@gmail.com" />
                            </label>
                        </div>
                        <button>Recuperar Senha</button>
                    </form>
                </div>
            </div>
            <div className="rodape">
                Para voltar à página de Login, <Link to="/">clique aqui!</Link>
            </div>
        </div>
    )
}

export default Forgot_Password;