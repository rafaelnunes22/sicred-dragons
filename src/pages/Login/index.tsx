import React from "react";
import { Button } from "../../components/Button";
import { Grid } from "../../components/Grid";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";

import {ReactComponent as TrashIcon} from "../../icons/trash.svg";




import "./styles.scss"

export function Login() {
  return (
    <Grid><Button><TrashIcon height={32}/></Button></Grid>
  )
}