import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { Heading } from "../../components/Heading";
import { ReactComponent as CloseIcon } from "../../icons/close.svg";
import { Button } from "../../components/Button";
import { getDragonById } from "../../api";
import { useLoading } from "../../contexts/LoadingContext";
import { Loader } from "../../components/Loader";

export function Details() {
  const navigate = useNavigate();
  const { loading, setLoading } = useLoading();
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
        setLoading(true);
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
        setLoading(false);
      };

      internalGetDragonById(typedState.dragonId);
    } else {
      navigate("/list");
    }
  }, [navigate, state, setLoading]);

  return (
    <Grid>
      <div className={styles.container}>
        <Card className={styles["details-card"]}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Button variant="transparent" onClick={() => navigate("/list")}>
                <CloseIcon />
              </Button>
              <Heading className={styles.title}>Detalhes do dragão</Heading>
              <h2 className={styles.label}>Data de criação:</h2>
              <span className={styles.information}>
                {String(dragon.createdAt)}
              </span>
              <h2 className={styles.label}>Nome:</h2>
              <span className={styles.information}>{dragon.name}</span>
              <h2 className={styles.label}>Tipo:</h2>
              <span className={styles.information}>{dragon.type}</span>
            </>
          )}
        </Card>
      </div>
    </Grid>
  );
}
