import React from "react";

import { Container, NavigationItem, NavigationLink } from "./styles";

const Navigation: React.FC = () => {
  return (
    <Container>
      <NavigationItem>
        <NavigationLink className="active">Listen now</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink>Browser</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink>Radio</NavigationLink>
      </NavigationItem>
    </Container>
  );
};

export default Navigation;
