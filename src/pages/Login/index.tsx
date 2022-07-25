import React, { useCallback, useState } from "react";
import styles from "./styles.module.scss";
import { Button } from "../../components/Button";
import { Grid } from "../../components/Grid";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";

import { generateTimeoutMessage } from "../../utils/utils";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { login } from "../../api";
import { Message } from "../../components/Message";
import { Loader } from "../../components/Loader";
import { useLoading } from "../../contexts/LoadingContext";

export function Login() {
  const { setUser } = useUser();
  const { loading, setLoading } = useLoading();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const internalLogin = useCallback(async () => {
    setLoading(true);
    const response = await login(username, password!);
    if (response.error) {
      generateTimeoutMessage(response.error, setMessage);
    } else {
      localStorage.setItem("user", JSON.stringify(response.data!));
      setUser(response.data!);
      navigate("/list");
    }
    setLoading(false);
  }, [username, password, navigate, setUser, setLoading]);

  return (
    <Grid>
      <div className={styles.container}>
        <Card className={styles["login-card"]}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Heading className={styles.title}>Faça seu login</Heading>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  internalLogin();
                }}
              >
                <Input
                  autoComplete="username"
                  placeholder="Digite seu usuário"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <Input
                  autoComplete="current-password"
                  type="password"
                  placeholder="Digite sua senha"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <Button type="submit" style={{ marginTop: 10 }}>
                  Entrar
                </Button>
              </form>
              {message ? <Message variant="error">{message}</Message> : null}
            </>
          )}
        </Card>
      </div>
    </Grid>
  );
}
