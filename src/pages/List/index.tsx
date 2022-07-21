import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
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

  const updateList = useCallback(async () => {
    const response = await getDragons();

    if (response.error) {
      alert(response.message);
    } else {
      setDragons(
        response.data.sort((a: Dragon, b: Dragon) =>
          a.name.toLowerCase() > b.name.toLowerCase()
            ? 1
            : b.name.toLowerCase() > a.name.toLowerCase()
            ? -1
            : 0
        )
      );
    }
  }, [setDragons]);

  useEffect(() => {
    updateList();
  }, [updateList]);

  const internalDeleteDragon = useCallback(
    async (id: string) => {
      const response = await deleteDragon(id);

      if (response.error) {
        alert(response.error);
        navigate("/list");
      } else {
        updateList();
        alert(response.message);
      }
    },
    [updateList, navigate]
  );

  const logout = useCallback(() => {
    userState?.setUser(null);
    localStorage.clear();
    navigate("/");
  }, [userState, navigate]);

  return (
    <Grid>
      <div className={styles["logout-container"]}>
        <Button className={styles["logout-button"]} onClick={() => logout()}>
          <LogoutIcon />
          Sair
        </Button>
      </div>
      <Card className={styles["list-card"]}>
        <div className={styles.header}>
          <Heading>Lista de dragões</Heading>
          <Button
            className={styles["add-dragon-button"]}
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
                  onDeleteClick={() => internalDeleteDragon(dragon.id!)}
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
