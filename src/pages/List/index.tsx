import React, { useCallback, useContext, useEffect, useState } from "react";
import "./styles.scss";
import { ReactComponent as LogoutIcon } from "../../icons/logout.svg";

import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { Row } from "../../components/Row";
import { Heading } from "../../components/Heading";

import { deleteDragon, getDragons } from "../../api";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { UserContext } from "../../contexts/UserContext";

export function List() {
  const [dragons, setDragons] = useState<Dragon[] | null>(null);

  const userState = useContext<UserContextType>(UserContext);

  const navigate = useNavigate();

  const updateList = useCallback(() => {
    getDragons().then((res) => {
      setDragons(
        res.sort((a: Dragon, b: Dragon) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        )
      );
    });
  }, []);

  useEffect(() => {
    updateList();
  }, []);

  return (
    <Grid>
      <div className="logout-container">
        <Button
          className="logout-button"
          onClick={() => userState?.setUser(null)}
        >
          <LogoutIcon className="icon" />
          Sair
        </Button>
      </div>
      <Card className="list-card">
        <div className="header">
          <Heading>Lista de dragões</Heading>
          <Button
            className="add-dragon-button"
            onClick={() => navigate("/form")}
          >
            Cadastrar
          </Button>
        </div>
        {dragons
          ? dragons.map((dragon) => {
              return (
                <Row
                  key={dragon.id}
                  title={dragon.name}
                  onClick={() =>
                    navigate("/details", { state: { dragonId: dragon.id } })
                  }
                  onDeleteClick={() =>
                    deleteDragon(dragon.id!).then(() => updateList())
                  }
                  onEditClick={() => {
                    navigate("/form", { state: { dragonId: dragon.id } });
                  }}
                  style={{ marginBottom: 14 }}
                />
              );
            })
          : null}
      </Card>
    </Grid>
  );
}
