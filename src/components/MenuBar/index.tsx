import React from 'react';

import { Container, Topside, Logo, MenuButton, HomeIcon, BellIcon, EmailIcon, FavoriteIcon, ProfileIcon } from './styles';
import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <Topside>
              <Logo/>
              <MenuButton>
                  <HomeIcon/>
                  <span>Página incial</span>
              </MenuButton>
              
              <MenuButton>
                  <BellIcon/>
                  <span>Notificações</span>
              </MenuButton>

              <MenuButton>
                  <EmailIcon/>
                  <span>Mensagens</span>
              </MenuButton>

              <MenuButton>
                  <FavoriteIcon/>
                  <span>Favoritados</span>
              </MenuButton>

              <MenuButton className="active">
                  <ProfileIcon/>
                  <span>Perfil</span>
              </MenuButton>

            <Button>
                <span>Tweetar</span>
            </Button>
              
          </Topside>
      </Container>
  );
}

export default MenuBar;