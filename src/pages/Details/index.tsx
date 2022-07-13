import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { Heading } from "../../components/Heading";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import { Button } from "../../components/Button";

type State = {
  selectedDragon?: Dragon;
};

export function Details() {
  const navigate = useNavigate();
  const [selectedDragon, setSelectedDragon] = useState<Dragon | null>(null);
  const { state } = useLocation();

  useEffect(() => {
    const typedState = state as State;
    if (typedState?.selectedDragon) {
      setSelectedDragon(typedState.selectedDragon);
    } else {
      navigate("/list");
    }
  }, []);

  return (
    <Grid>
      <div className="container">
        <Card className="details-card">
          <Button
            variant="transparent"
            className="icon-button"
            onClick={() => navigate(-1)}
          >
            <CloseIcon className="icon" />
          </Button>
          <Heading className="title">Detalhes do dragão</Heading>
          <h2 className="label">Data de criação:</h2>
          <span className="information">
            {String(selectedDragon?.createdAt)}
          </span>
          <h2 className="label">Nome:</h2>
          <span className="information">{selectedDragon?.name}</span>
          <h2 className="label">Tipo:</h2>
          <span className="information">{selectedDragon?.type}</span>
        </Card>
      </div>
    </Grid>
  );
}
