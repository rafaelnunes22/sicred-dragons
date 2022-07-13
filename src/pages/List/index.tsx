import React, { useEffect, useState } from "react";
import "./styles.scss";

import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { Row } from "../../components/Row";
import { Heading } from "../../components/Heading";

import { getDragons } from "../../api";
import { useNavigate } from "react-router-dom";

export function List() {
  const [dragons, setDragons] = useState<Dragon[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    getDragons().then((res) => {
      setDragons(res);
    });
  }, []);

  return (
    <Grid>
      <Card className="list-card">
        <Heading className="title">Lista de dragões</Heading>
        {dragons
          ? dragons.map((dragon) => {
              return (
                <Row
                  key={dragon.id}
                  title={dragon.name}
                  onClick={() =>
                    navigate("/details", { state: { selectedDragon: dragon } })
                  }
                  onDeleteClick={() => {}}
                  onEditClick={() => {}}
                  style={{ marginBottom: 14 }}
                />
              );
            })
          : null}
      </Card>
    </Grid>
  );
}
