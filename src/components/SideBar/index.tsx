import React from 'react';
import List from '../List';
import Button from '../Button';
import ButtonIcon from '../ButtonIcon';
import { MdTimer, MdMusicNote, MdDiscFull } from 'react-icons/md';

import { Container } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <List
        elements={[
          <Button className="active">
            <h3>Listen now</h3>
          </Button>,
          <Button>
            <h3>Browse</h3>
          </Button>,
          <Button>
            <h3>Radio</h3>
          </Button>,
        ]}
      />
      <List
        title="Library"
        elements={[
          <ButtonIcon icon={<MdTimer />}>Recents</ButtonIcon>,
          <ButtonIcon icon={<MdDiscFull />}>Albums</ButtonIcon>,
          <ButtonIcon icon={<MdMusicNote />}>Songs</ButtonIcon>,
        ]}
      />
      <List
        title="Playlist"
        elements={[
          <Button>
            <span>Summer</span>
          </Button>,
          <Button>
            <span>Smasher vol.III</span>
          </Button>,
          <Button>
            <span>Vibes</span>
          </Button>,
        ]}
      />
    </Container>
  );
};

export default SideBar;
