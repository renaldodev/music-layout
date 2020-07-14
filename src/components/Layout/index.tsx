import React from 'react';
import SideBar from '../SideBar';
import Main from '../Main'
import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <Main/>
    </Container>
  );
};

export default Layout;
