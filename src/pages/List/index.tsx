import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { Row } from "../../components/Row";
import { Heading } from "../../components/Heading";
import { get } from "http";
import { getDragons } from "../../api";

export function List() {
  const [dragons, setDragons] = useState<Dragon[] | null>(null);

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
                  onClick={() => {}}
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
