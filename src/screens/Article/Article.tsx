import { FC, useState, useCallback, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import MainContent from './components/MainContent/MainContent';
import { getReactions } from '@services/index';

import { ArticleLayout, StyledContainer } from './styles';

const Article: FC<{ article: any }> = ({ article }) => {
  const state = useSelector<{ auth: any }>(state => state.auth) as any;

  const { isLoading, isError, data, error } = useQuery(
    'reactions',
    async () => await getReactions({ axios })({ articleId: article.id }),
  );

  const [isLiked, setIsLiked] = useState<Boolean>(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function isLikeClicked(likes: Array<{ id: number; user_id: number; article_id: number }>): void {
    setIsLiked(likes.some(like => like.user_id === state.user_id));
  }

  useEffect(() => {
    isLikeClicked(!isLoading ? data?.data.likes : []);
  }, [data?.data.likes, isLikeClicked, isLoading]);

  return (
    <StyledContainer maxWidth={'xl'}>
      <ArticleLayout>
        <LeftSide
          articleId={article.id}
          likes={!isLoading ? data?.data.likes.length : 0}
          isLiked={isLiked}
        />
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
