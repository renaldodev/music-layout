import React from 'react';

import { Container, TextInfo } from './styles';

export interface IProps {
  src?: string;
  name?: string;
  title?: string;
}
const Card: React.FC<IProps> = ({ name, title,...rest }) => {
  return (
    <Container {...rest}>
      <TextInfo>
        <strong>{name}</strong>
        <span>{title}</span>
      </TextInfo>
    </Container>
  );
};

export default Card;
