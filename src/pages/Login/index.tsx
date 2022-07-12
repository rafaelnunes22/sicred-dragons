import React from "react";
import { Button } from "../../components/Button";
import { Grid } from "../../components/Grid";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";

import {ReactComponent as TrashIcon} from "../../icons/trash.svg";




import "./styles.scss"
import { IconButton } from "../../components/IconButton";

export function Login() {
  return (
    <Grid><IconButton><TrashIcon height={32}/></IconButton></Grid>
  )
}