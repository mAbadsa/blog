import { FC, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import MainContent from './components/MainContent/MainContent';
import { getReactions } from '@services/index';

import { ArticleLayout, StyledContainer } from './styles';

const Article: FC<{ article: any }> = ({ article }) => {
  const { isLoading, isError, data, error } = useQuery(
    'reactions',
    async () => await getReactions({ axios })({ articleId: article.id }),
  );

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <StyledContainer maxWidth={'xl'}>
      <ArticleLayout>
        <LeftSide articleId={article.id} />
        <MainContent article={article} />
        <RightSide
          userData={{
            name: article.name,
            username: article.username,
            bio: article.bio,
            avatar: article.profile_image,
            websiteUrl: article.website_url,
            githubAccount: article.github_account,
            email: article?.email,
            location: article?.location,
            education: article?.education,
            joined: article?.user_created_at,
          }}
          article={{
            title: article.title,
            tags: article.tags,
          }}
        />
      </ArticleLayout>
    </StyledContainer>
  );
};

export default Article;
