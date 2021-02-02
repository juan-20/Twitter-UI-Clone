import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar Perfil</EditButton>
          <h1>Juan Andrade</h1>
          <h2>@juann20_</h2>

          <p>Linkedin: <a href="https://twitter.com/juann20_">@Juan20_</a></p>

          <ul>
              <li>
                  <LocationIcon />
                  BH
              </li>

              <li>
                  <CakeIcon />
                  Nascido(a) em 2002
              </li>

              <Followage>
                  <span>
                     <strong>Habilidades:</strong>
                  </span> 
                  <span>
                      Php, JS, React, CSS,  Faxina
                  </span>
              </Followage>
          </ul>

          </ProfileData>

          <Feed/>
      </Container>
  );
}

export default ProfilePage;