import { FC } from 'react';
import { RightSideStyled, StyledAuthorContainer } from './styles';
import AuthorPreview from '@components/AuthorPreview';
import MoreArticles from '@components/MoreArticles';

const RightSide: FC<{ userData: any; article: { title: string; tags: string } }> = ({
  userData,
  article,
}) => {
  return (
    <RightSideStyled>
      <StyledAuthorContainer>
        <AuthorPreview userdata={userData} />
        <MoreArticles
          username={userData.username}
          articleTitle={article.title}
          tags={article.tags}
        />
      </StyledAuthorContainer>
    </RightSideStyled>
  );
};

export default RightSide;
