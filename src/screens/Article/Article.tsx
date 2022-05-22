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
  const [open, setOpen] = useState<boolean>(false);
  const { isLoading, isError, data, error } = useQuery(
    'reactions',
    async () => await getReactions({ axios })({ articleId: article.id }),
    {
      onSuccess: () => {
        console.log('article.user_id', article.user_id);
        setIsLiked(handleIsLiked(article.user_id));
      },
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
        console.log('success');
      },
      onError: (error: any) => {
        console.log('ON_ERROR');
        console.log({ error });
        if (error.response.status === 401) {
          setOpen(true);
          console.log(error.response.data.description);
        }
      },
    },
  );

  const handleClickReaction = (category: string) => {
    mutate({ category, reactableId: article.id });
  };

  !isLoading && console.log({ data });
  const handleIsLiked = (userId: number): boolean => {
    console.log({ userId });
    let isLike = data?.data.likes.some(({ user_id }: any) => userId === user_id);
    console.log({ isLike });
    console.log({ uID: article.user_id });
    return isLike;
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
        <LeftSide
          likes={data?.data.likes.length}
          handleClikReaction={handleClickReaction}
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
