import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { Heading } from "../../components/Heading";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import { Button } from "../../components/Button";
import { getDragonById } from "../../api";

export function Details() {
  const navigate = useNavigate();
  const [dragon, setDragon] = useState<Dragon>({
    name: "",
    type: "",
    createdAt: "",
  });
  const { state } = useLocation();

  useEffect(() => {
    const typedState = state as State;
    if (typedState?.dragonId) {
      const internalGetDragonById = async (id: string) => {
        const response = await getDragonById(id);
        if (response.error) {
          alert(response.error);
          navigate("/list");
        } else {
          let date = new Date(response.data.createdAt as Date);
          setDragon({
            ...response.data,
            createdAt: date.toLocaleDateString("pt-BR"),
          });
        }
      };

      internalGetDragonById(typedState.dragonId);
    } else {
      navigate("/list");
    }
  }, [navigate, state]);

  return (
    <Grid>
      <div className="container">
        <Card className="details-card">
          <Button variant="transparent" onClick={() => navigate("/list")}>
            <CloseIcon />
          </Button>
          <Heading className="title">Detalhes do dragão</Heading>
          <h2 className="label">Data de criação:</h2>
          <span className="information">{String(dragon.createdAt)}</span>
          <h2 className="label">Nome:</h2>
          <span className="information">{dragon.name}</span>
          <h2 className="label">Tipo:</h2>
          <span className="information">{dragon.type}</span>
        </Card>
      </div>
    </Grid>
  );
}
