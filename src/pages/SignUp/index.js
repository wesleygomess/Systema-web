import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";
import "./signUp.css";
import logo from "../../assets/logo.png";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert("Preencha todos os campos!");
      return;
    }
    signUp(email, password, name);
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
          <button type="submit">
            {loadingAuth ? "Carregando..." : "Cadastrar"}
          </button>
        </form>
        <Link to="/">Já sou cadastrado</Link>
      </div>
    </div>
  );
}

export default SignUp;
