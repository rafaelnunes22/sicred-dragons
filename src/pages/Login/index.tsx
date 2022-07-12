import React from "react";
import { Button } from "../../components/Button";
import { Grid } from "../../components/Grid";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";

import {ReactComponent as TrashIcon} from "../../icons/trash.svg";




import "./styles.scss"
import { Row } from "../../components/Row";

export function Login() {
  return (
    <Grid><Row title="dragon name" onEditClick={() => console.log("editar")} onDeleteClick={() => console.log("deletar")} onClick={() => console.log("detalhes")}></Row></Grid>
  )
}