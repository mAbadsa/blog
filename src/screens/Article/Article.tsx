import { FC, useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

import Modal from '../../components/Modal';
import AuthenticationModal from '../../components/AuthenticationModal';

import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import MainContent from './components/MainContent/MainContent';
import { getReactions, addReaction, getLogedinUser } from '../../services';

import { ArticleLayout, StyledContainer } from './styles';
import { Box, Typography } from '@material-ui/core';

const Article: FC<{ article: any }> = ({ article }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [numOfLikes, setNumOfLikes] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const { isLoading, isError, data, error } = useQuery(
    ['reactions', { articleId: article.id }],
    async () => await getReactions({ axios })({ articleId: article.id }),
    {
      staleTime: 0,
      onSuccess: _data => {
        console.log('data', data);
        console.log('_data', _data);
        setNumOfLikes(_data?.data.likes.length);
        // handleIsLiked(data.data.likes, article.user_id);
        setIsLiked(_data.data.likes.some(({ user_id }: any) => article.userId === user_id));
      },
      cacheTime: 0,
    },
  );
  const { mutate, error: mutateErr } = useMutation(
    'add_likes',
    async ({ category, reactableId }: { category: string; reactableId: number }) => {
      const res = await addReaction({ axios })({
        reactableId,
        category,
        reactableType: 'Article',
      });
      console.log('Mutation', res);
    },
    {
      onSuccess: () => {
        // handleIsLiked(article.user_id);
        console.log('mutate');
        setIsLiked(!isLiked);
      },
      onError: (error: any) => {
        if (error.response.status === 401) {
          setOpen(true);
        }
      },
    },
  );

  const handleClickReaction = (category: string) => {
    mutate({ category, reactableId: article.id });
  };

  const handleIsLiked = (likes: any, userId: number): void => {
    console.log('userId:: %d', userId);
    console.log('likes:: %d', likes);
    !isLoading && console.log('likes:: %d', data);
    let isLike = likes.some(({ user_id }: any) => userId === user_id);
    console.log('isLiked:: %d', isLike);
    setIsLiked(isLike);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <StyledContainer maxWidth={'xl'}>
      <Modal
        open={open}
        handleClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AuthenticationModal closeModal={handleModalClose} />
      </Modal>
      <ArticleLayout>
        <LeftSide likes={numOfLikes} handleClikReaction={handleClickReaction} isLiked={isLiked} />
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
