import { useState, useContext } from "react";

import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiSettings, FiUpload } from "react-icons/fi";
import avatarLocal from "../../assets/avatar.png";
import { AuthContext } from "../../contexts/auth";

import "./profile.css";

function Profile() {
  const { user, signOut } = useContext(AuthContext);

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatar);

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Meu Perfil">
          <FiSettings color="#000" size={25} />
        </Title>
        <div className="container">
          <form className="form-profile">
            <label className="label-avatar">
              <span>
                <FiUpload color="#ffff" size={25} />
              </span>
              <input type="file" accept="image/*" />
              <br />
              {avatarUrl === null ? (
                <img
                  src={avatarLocal}
                  width="250"
                  height="250"
                  alt="Foto perfil"
                />
              ) : (
                <img
                  src={avatarUrl}
                  width="250"
                  height="250"
                  alt="Foto perfil"
                />
              )}
            </label>

            <label>Nome</label>
            <input
              type="text"
              name="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input type="text" name="email" value={email} disabled={true} />

            <button type="button">Salvar</button>
          </form>
        </div>

        <div className="container">
          <button className="logout-btn" onClick={signOut}>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
