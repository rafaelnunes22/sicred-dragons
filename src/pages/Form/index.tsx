import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.scss";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { Input } from "../../components/Input";
import { Heading } from "../../components/Heading";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import { generateTimeoutMessage } from "../../utils/utils";
import { createDragon, getDragonById, updateDragon } from "../../api";

export function Form() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [dragonId, setDragonId] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | null>(null);

  const { state } = useLocation();

  useEffect(() => {
    const typedState = state as State;
    if (typedState?.dragonId) {
      setDragonId(typedState?.dragonId);
      const internalGetDragonById = async (id: string) => {
        const response = await getDragonById(id);
        if (response.error) {
          alert(response.error);
          navigate("/list");
        } else {
          setName(response.data.name);
          setType(response.data.type);
        }
      };

      internalGetDragonById(typedState.dragonId);
    }
  }, [navigate, state]);

  const create = useCallback(async () => {
    const response = await createDragon({ name, type });

    if (response.error) {
      generateTimeoutMessage(response.error, setMessage);
    } else {
      generateTimeoutMessage(response.message!, setMessage);
    }
  }, [name, type, setMessage]);

  const update = useCallback(async () => {
    const response = await updateDragon({ name, type }, dragonId as string);

    if (response.error) {
      generateTimeoutMessage(response.error, setMessage);
    } else {
      generateTimeoutMessage(response.message!, setMessage);
    }
  }, [name, type, dragonId, setMessage]);

  return (
    <Grid>
      <div className="container">
        <Card className="form-card">
          <Button
            variant="transparent"
            className="icon-button"
            onClick={() => navigate(-1)}
          >
            <CloseIcon className="icon" />
          </Button>
          <Heading className="title">
            {dragonId ? "Edite" : "Cadastre"} seu dragão
          </Heading>
          <Input
            required
            placeholder="Nome"
            className="form-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            placeholder="Tipo"
            className="form-input"
            onChange={(e) => setType(e.target.value)}
            value={type}
          />
          <Button
            className="form-button"
            onClick={() => {
              if (!name || !type) {
                setMessage("Preencha todos os campos");
                setTimeout(() => {
                  setMessage(null);
                }, 3000);
              } else {
                dragonId ? update() : create();
              }
            }}
          >
            {dragonId ? "Editar" : "Cadastrar"}
          </Button>

          {message ? <span className="message">{message}</span> : null}
        </Card>
      </div>
    </Grid>
  );
}
