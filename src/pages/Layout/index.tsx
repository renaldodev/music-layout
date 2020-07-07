import React from "react";
import { Container } from "./styles";

const layout: React.FC = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};
export default layout;
