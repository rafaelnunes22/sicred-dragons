import React, { useCallback, useContext, useState } from "react";
import "./styles.scss";
import { Button } from "../../components/Button";
import { Grid } from "../../components/Grid";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";

import "./styles.scss";
import { UserContext } from "../../contexts/UserContext";

export function Login() {
  const userState = useContext<UserContextType>(UserContext);

  const [username, setUsername] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(() => {
    if (username === "admin" && password === "1234") {
      setError(null);
      userState?.setUser({ username: username, token: "valid-token" });
    } else {
      setError("Usuário ou senha incorretos");
    }
  }, [username, password]);

  return (
    <Grid>
      <div className="container">
        <Card className="login-card">
          <Heading className="title">Faça seu login</Heading>
          <Input
            placeholder="Digite seu usuário"
            className="login-input"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            className="login-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="login-button"
            onClick={() => {
              login();
            }}
          >
            Entrar
          </Button>

          {error ? <span className="error">{error}</span> : null}
        </Card>
      </div>
    </Grid>
  );
}
