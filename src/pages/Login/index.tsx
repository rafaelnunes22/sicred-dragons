import React, { useCallback, useContext, useState } from "react";
import "./styles.scss";
import { Button } from "../../components/Button";
import { Grid } from "../../components/Grid";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";

import { generateTimeoutMessage } from "../../utils/utils";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { login } from "../../api";
import { Message } from "../../components/Message";

export function Login() {
  const userState = useContext<UserContextType>(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const internalLogin = useCallback(async () => {
    const response = await login(username, password!);
    if (response.error) {
      generateTimeoutMessage(response.error, setMessage);
    } else {
      localStorage.setItem("user", JSON.stringify(response.data!));
      userState?.setUser(response.data!);
      navigate("/list");
    }
  }, [username, password, navigate, userState]);

  return (
    <Grid>
      <div className="container">
        <Card className="login-card">
          <Heading className="title">Faça seu login</Heading>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              internalLogin();
            }}
          >
            <Input
              autoComplete="username"
              placeholder="Digite seu usuário"
              className="login-input"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <Input
              autoComplete="current-password"
              type="password"
              placeholder="Digite sua senha"
              className="login-input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button type="submit" style={{ marginTop: 36 }}>
              Entrar
            </Button>
          </form>
          {message ? <Message variant="error">{message}</Message> : null}
        </Card>
      </div>
    </Grid>
  );
}
