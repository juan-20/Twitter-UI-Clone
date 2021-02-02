import React from 'react';

import { Container, 
        Retweet,
        RtIcon,
        Body,
        Avatar,
        Content,
        Header,
        Dot,
        Description,
         ImageContent,
        Icons,
        Status,
        CommentIcon,
        RetweetIcon,
        LikeIcon} from './style';

const Tweets: React.FC = () => {
  return (
    <Container>
    <Retweet>
      <RtIcon />
      Você retweetou
    </Retweet>

    <Body>
      <Avatar />

      <Content>
        <Header>
          <strong>Nome do perfil</strong>
          <span>@nomedoperfil</span>
          <Dot />
          <time>10 de agosto</time>
        </Header>

        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <Description>Bom dia fellas</Description>

        <ImageContent />

        <Icons>
          <Status>
            <CommentIcon />
            18
          </Status>
          <Status>
            <RetweetIcon />
            18
          </Status>
          <Status>
            <LikeIcon />
            999
          </Status>
        </Icons>
      </Content>
    </Body>
  </Container>
  );
}

export default Tweets;