import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { Input } from "../../components/Input";
import { Heading } from "../../components/Heading";
import { Message } from "../../components/Message";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import { generateTimeoutMessage } from "../../utils/utils";
import { createDragon, getDragonById, updateDragon } from "../../api";
import { useLoading } from "../../contexts/LoadingContext";
import { Loader } from "../../components/Loader";

export function Form() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [dragonId, setDragonId] = useState<string | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const { state } = useLocation();
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const typedState = state as State;
    if (typedState?.dragonId) {
      setDragonId(typedState?.dragonId);
      const internalGetDragonById = async (id: string) => {
        setLoading(true);
        const response = await getDragonById(id);
        if (response.error) {
          alert(response.error);
          navigate("/list");
        } else {
          setName(response.data.name);
          setType(response.data.type);
        }
        setLoading(false);
      };

      internalGetDragonById(typedState.dragonId);
    }
  }, [navigate, state, setLoading]);

  const create = useCallback(async () => {
    setLoading(true);
    const response = await createDragon({ name, type });

    if (response.error) {
      setError(true);
      generateTimeoutMessage(response.error, setMessage);
    } else {
      setError(false);
      generateTimeoutMessage(response.message!, setMessage);
    }
    setLoading(false);
  }, [name, type, setMessage, setLoading]);

  const update = useCallback(async () => {
    setLoading(true);
    const response = await updateDragon({ name, type }, dragonId as string);

    if (response.error) {
      setError(true);
      generateTimeoutMessage(response.error, setMessage);
    } else {
      setError(false);
      generateTimeoutMessage(response.message!, setMessage);
    }
    setLoading(false);
  }, [name, type, dragonId, setMessage, setLoading]);

  return (
    <Grid>
      <div className={styles.container}>
        <Card className={styles["form-card"]}>
          <Button variant="transparent" onClick={() => navigate("/list")}>
            <CloseIcon />
          </Button>

          {loading ? (
            <Loader />
          ) : (
            <>
              <Heading className={styles.title}>
                {dragonId ? "Edite" : "Cadastre"} seu dragão
              </Heading>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!name || !type) {
                    setMessage("Preencha todos os campos");
                    setError(true);
                    setTimeout(() => {
                      setMessage(null);
                    }, 3000);
                  } else {
                    dragonId ? update() : create();
                  }
                }}
              >
                <Input
                  placeholder="Nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <Input
                  placeholder="Tipo"
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                />
                <Button type="submit" style={{ marginTop: 15 }}>
                  {dragonId ? "Editar" : "Cadastrar"}
                </Button>
              </form>

              {message ? (
                <Message variant={error ? "error" : "default"}>
                  {message}
                </Message>
              ) : null}
            </>
          )}
        </Card>
      </div>
    </Grid>
  );
}
