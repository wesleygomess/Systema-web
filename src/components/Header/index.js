import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { FiHome, FiUser, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

import avatar from "../../assets/avatar.png";

import "./header.css";

function Header() {
  const { user } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div>
        <img
          src={user.avatar === null ? avatar : user.avatar}
          alt="Foto avatar"
        />
      </div>

      <Link to="/dashboard">
        <FiHome color="#fff" size={24} />
        Chamados
      </Link>

      <Link to="/customers">
        <FiUser color="#fff" size={24} />
        Clientes
      </Link>

      <Link to="/profile">
        <FiSettings color="#fff" size={24} />
        Configurações
      </Link>
    </div>
  );
}

export default Header;
