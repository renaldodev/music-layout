import React from 'react';

import { Container,Icon,Text } from './styles';
interface IProps{
  icon:React.ReactNode
}
const ButtonIcon: React.FC<IProps> = ({icon,children,...rest}) => {
  return <Container {...rest}>
        <Icon>
          {icon}
        </Icon>
        <Text>
          {children}
        </Text>
  </Container>;
}

export default ButtonIcon;