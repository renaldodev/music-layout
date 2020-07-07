import React from "react";
import CardLink from "./../CardLink";
import { Container, CardItem, CardTitle } from "./styles";

interface IProps {
  title?: string;
  listContent: Array<string>;
  listIcons?: Array<object>;
}

const Card: React.FC<IProps> = ({ title, listContent, listIcons }) => {
  return (
    <Container>
      {title && (
        <CardItem>
          <CardTitle>{title}</CardTitle>
        </CardItem>
      )}

      {listContent &&
        listContent.map((x, i) => (
          <CardItem key={i}>
            <CardLink>{x}</CardLink>
          </CardItem>
        ))}
    </Container>
  );
};

export default Card;
