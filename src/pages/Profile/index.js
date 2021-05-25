import { useState, useContext } from "react";
import firebase from "../../services/firebaseConnection";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiSettings, FiUpload } from "react-icons/fi";
import avatarLocal from "../../assets/avatar.png";
import { AuthContext } from "../../contexts/auth";

import "./profile.css";

function Profile() {
  const { user, signOut, setUser, storageUser } = useContext(AuthContext);

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);

  const [avatarUrl, setAvatarUrl] = useState(user && user.avatar);
  const [imageAvatar, setImageAvatar] = useState(null);

  function handleFile(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatar(image);
        setAvatarUrl(URL.createObjectURL(e.target.files[0]));
      } else {
        alert("Envie uma image do tipo PNG ou JPEG");
        setImageAvatar(null);
        return null;
      }
    }
  }

  async function handleUpload() {
    const currentUid = user.uid;

    const uploadTask = await firebase
      .storage()
      .ref(`imagens/${currentUid}/${imageAvatar.name}`)
      .put(imageAvatar)
      .then(async () => {
        await firebase
          .storage()
          .ref(`imagens/${currentUid}`)
          .child(imageAvatar.name)
          .getDownloadURL()
          .then(async (url) => {
            let urlFoto = url;

            await firebase
              .firestore()
              .collection("users")
              .doc(user.uid)
              .update({
                avatarUrl: urlFoto,
                nome: name,
              })
              .then(() => {
                let data = {
                  ...user,
                  avatar: urlFoto,
                  nome: name,
                };

                setUser(data);
                storageUser(data);
              });
          });
      })
      .catch((error) => {
        console.log("Erro ao enviar a image: ", error);
      });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (imageAvatar === null && name !== "") {
      console.log("test");
      await firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .update({
          nome: name,
        })
        .then(() => {
          let data = {
            ...user,
            nome: name,
          };

          setUser(data);
          storageUser(data);
        })
        .catch((error) => {
          console.log("ERRO AO ATUALIZAR O PERFIL: ", error);
        });
    } else if (name !== "" && imageAvatar !== null) {
      handleUpload();
    }
  }

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Meu Perfil">
          <FiSettings color="#000" size={25} />
        </Title>
        <div className="container">
          <form className="form-profile" onSubmit={handleSubmit}>
            <label className="label-avatar">
              <span>
                <FiUpload color="#ffff" size={25} />
              </span>
              <input type="file" accept="image/*" onChange={handleFile} />
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
              nome="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input type="text" name="email" value={email} disabled={true} />

            <button type="submit">Salvar</button>
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
