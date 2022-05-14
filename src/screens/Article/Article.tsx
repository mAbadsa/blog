import { FC } from 'react';

import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import MainContent from './components/MainContent/MainContent';

import { ArticleLayout, StyledContainer } from './styles';

const Article: FC<{ article: any }> = ({ article }) => {
  return (
    <StyledContainer maxWidth={'xl'}>
      <ArticleLayout>
        <LeftSide />
        <MainContent article={article} />
        <RightSide />
      </ArticleLayout>
    </StyledContainer>
  );
};

export default Article;
