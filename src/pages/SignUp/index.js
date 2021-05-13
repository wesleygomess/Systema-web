import { useState } from "react";
import { Link } from "react-router-dom";
import "./signUp.css";
import logo from "../../assets/logo.png";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input
            type="text"
            placeholder="nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="**********"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Acessar</button>
        </form>
        <Link to="/">Já sou cadastrado</Link>
      </div>
    </div>
  );
}

export default SignUp;
