import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export default function RouterWrapper({
  componet: Componet,
  isPrivate,
  ...rest
}) {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return <div></div>;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        <Componet {...props} />;
      }}
    />
  );
}
