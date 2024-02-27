import React from "react";
import LoginImg from "../../assets/login_img.png";
import { Container, Main } from "./styles";
import { MoveRight } from "lucide-react";
import { Mail } from "lucide-react";

const Login = () => {
  return (
    <Main>
      <Container>
        <div>
          <img src={LoginImg} alt="ilustração" />
        </div>

        <div className="FormDetails">
          <h1>Login</h1>
          <form action="auth/login" method="post">
            <input placeholder="E-mail" type="text" />
            <input placeholder="Senha" type="password" minLength="8" required />

            <button>LOGIN</button>
          </form>

          <div className="links">
            <a>Forgot Username/ Password?</a>
            <a>
              Create your Account <MoveRight />
            </a>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Login;
