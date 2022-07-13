import React from "react";
import "./styles.scss";
import { Button } from "../../components/Button";
import { Grid } from "../../components/Grid";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";

import "./styles.scss"

export function Login() {
  return (
    <Grid>
      <div className="container">
        <Card className="login-card">
          <Heading>Faça seu login</Heading>
          <Input placeholder="Digite seu usuário" className="login-input"/>
          <Input placeholder="Digite sua senha" className="login-input"/>
          <Button className="login-button">Entrar</Button>
        </Card>
      </div>
    </Grid>
  )
}
