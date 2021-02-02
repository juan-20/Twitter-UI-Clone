import React from 'react';

import { Container, Tab, Tweets } from './style';

import Tweet from '../Tweets';

const Feed: React.FC = () => {
  return(
      <Container>
          <Tab>Voltar</Tab>

          <Tweets>
              <Tweet/>
              <Tweet/>
              <Tweet/>
        </Tweets>
      </Container>
  );
}

export default Feed;