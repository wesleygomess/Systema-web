import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";

export default function Dashboard() {
  const { signOut } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <button onClick={() => signOut()}>Sair</button>
      <h1>Dashboard</h1>
    </div>
  );
}
