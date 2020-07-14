import React from 'react';
import Card from '../Card';
import { Container, Header, Title, ListCard } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Listen now</Title>
      </Header>
      <ListCard>
        <Card
          src="https://resources.tidal.com/images/b038ba48/042e/4b6e/9ac4/3de92941ede0/480x480.jpg"
          name="Dua Lipa"
          title="Never give up"
        />
        <Card
          src={
            'https://www.channel4.com/media/images/Channel4/c4-news/2014/July/09/09_eminem2014_r_w.jpg'
          }
          name="Eminem"
          title="Just stop"
        />
        <Card
          src="https://www.nme.com/wp-content/uploads/2018/01/GettyImages-503213347-696x442.jpg"
          name="Renaldo Mateus"
          title="I am not sorry"
        />
      </ListCard>
      <ListCard>
        <Card
          src="https://upload.wikimedia.org/wikipedia/commons/4/45/Red_Hot_Chili_Peppers_-_Rock_am_Ring_2016_-2016156230933_2016-06-04_%28cropped%29.jpg"
          name="NGA"
          title="Quando o kumbu cair"
        />
        <Card
          src="https://static01.nyt.com/images/2020/04/03/arts/02weeknd-review1/02weeknd-review1-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
          name="J Tafinha"
          title="sinzas"
        />
        <Card
          src="https://i.pinimg.com/originals/5f/0f/67/5f0f67f582c0e588b35eba01dfbd1137.jpg"
          name="Kid MC"
          title="O incorrigivel"
        />
      </ListCard>
      <ListCard>
        <Card
          src="https://media.gq.com/photos/5a5f79d52316871dcb3c837f/master/w_1600%2Cc_limit/Dua_Lipa_02.jpg"
          name="Mobbers"
          title="Black"
        />
        <Card
          src="https://www.thescottishsun.co.uk/wp-content/uploads/sites/2/2018/04/nintchdbpict000337382082.jpg"
          name="Anselmo Halph"
          title="Curtição"
        />
        <Card
          src="https://pbs.twimg.com/media/EZnpXYlX0AAODnB.jpg"
          name="Perola"
          title="Mboio"
        />
      </ListCard>
    </Container>
  );
};

export default Main;
