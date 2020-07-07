import React from "react";

import { Container } from "./styles";
import icons from "styled-icons";
interface IProps {
  Icon?: object;
}
const CardLink: React.FC<IProps> = ({ children, Icon }) => {
  return <Container>{children}</Container>;
};
export default CardLink;
