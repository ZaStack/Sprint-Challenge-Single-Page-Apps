import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";

export default function CharacterCard(props) {
  return (
    <div>
      <Card>
        <CardImg top width="40%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}
