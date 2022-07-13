import React, { useCallback, useEffect, useState } from "react";
import "./styles.scss";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { Heading } from "../../components/Heading";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { createDragon, getDragonById, updateDragon } from "../../api";

type State = {
  dragonId?: string;
};

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
      getDragonById(typedState.dragonId).then((res) => {
        setName(res.name);
        setType(res.type);
      });
    }
  }, []);

  const create = useCallback(async () => {
    await createDragon({ name, type }).then((res) => {
      setMessage("Cadastrado com sucesso!");

      setTimeout(() => {
        setMessage(null);
      }, 5000);
    });
  }, [name, type]);

  const update = useCallback(async () => {
    await updateDragon({ name, type }, dragonId as string).then((res) => {
      setMessage("Editado com sucesso!");

      setTimeout(() => {
        setMessage(null);
      }, 3000);
    });
  }, [name, type, dragonId]);

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
