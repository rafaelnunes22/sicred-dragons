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

export function Login() {
  const userState = useContext<UserContextType>(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");
  const [message, setMessage] = useState<string | null>(null);

  const internalLogin = useCallback(async () => {
    const response = await login(username!, password!);
    if (response.error) {
      generateTimeoutMessage(response.error, setMessage);
    } else {
      userState?.setUser(response.data!);
      navigate("/list");
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
              internalLogin();
            }}
          >
            Entrar
          </Button>

          {message ? <span className="message">{message}</span> : null}
        </Card>
      </div>
    </Grid>
  );
}
