import React from "react";
import { Link } from "react-router-dom";
import Academy from "./Academy.png";
import Password_Hidden from "./Password Hidden.png";
import "./style-register.css";

const Register = () => {
    return (
        <div className="conteudo">
            <div className="card">
                <div className="card-titulo">
                    <img src={Academy} />
                </div>
                <div className="card-conteudo">
                    <form>
                        <div className="label-name">
                            <label for="name">
                                <p>Nome</p>
                                <input id="name" name="name" />
                            </label>
                        </div>
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
                        <button>Criar Conta</button>
                    </form>
                </div>
            </div>
            <div className="rodape">
                Já possui uma conta? <Link to="/">Acesse agora!</Link>
            </div>
        </div>
    )
}

export default Register;