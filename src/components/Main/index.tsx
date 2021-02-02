import React from 'react';

import { Container, Header, BackIcon, ProfileInfo,
 ButtonMenu, HomeIcon, SearchIcon, BellIcon, DmIcon} from './styles';

import ProfilePage from '../ProfilePage/indez';

const Main: React.FC = () => {
  return (
        <Container>
            <Header>
                <button>
                    <BackIcon />
                </button>

                
        <ProfileInfo>
          <strong>Juan Andrade</strong> <br/>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />


            <ButtonMenu>
                <HomeIcon />
                <SearchIcon />
                <BellIcon />
                <DmIcon />
            </ButtonMenu>

        </Container>
    );
}

export default Main;