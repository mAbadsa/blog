import { FC, useState, MouseEvent } from 'react';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0';

import Modal from '../../components/Modal';
import AuthenticationModal from '../../components/AuthenticationModal';

import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import MainContent from './components/MainContent/MainContent';
import { getReactions, addReaction, getLogedinUser } from '../../services';

import { ArticleLayout, StyledContainer } from './styles';

const Article: FC<{ article: any }> = ({ article }) => {
  console.log({ likes: article.likes });
  const [loggedinUserId, setLoggedinUserId] = useState<number | null>(null);
  const [isLiked, setIsLiked] = useState<boolean>(
    article.likes.some(({ user_id }: { user_id: number }) => loggedinUserId === user_id),
  );
  const [likes, setLikes] = useState<Array<any>>(article.likes);
  const [open, setOpen] = useState<boolean>(false);
  const { user, isLoading: isFecthUserLoading, error: userErr } = useUser();
  const articleLikes = useQuery(
    'likes',
    async () => await getReactions({ axios })({ articleId: article.id }),
    {
      onSuccess: data => {
        console.log({ likes: data });
        setLikes(data.data.likes);
        console.log({ likes: likes });
      },
    },
  );

  const authUser = useQuery(
    'auth_user',
    async () => {
      if (user) return await getLogedinUser({ axios })({ email: user?.email as string });
    },
    {
      onSuccess: data => {
        console.log({ data });
        setLoggedinUserId(data?.data.id);
        setIsLiked(likes.some(({ user_id }: { user_id: number }) => data?.data.id === user_id));
      },
    },
  );

  // (async () => {
  //   if (user) {
  //     const res = await getLogedinUser({ axios })({ email: user?.email as string });
  //     console.log({ res });
  //     setLoggedinUserId(res?.data.data.id);
  //     setIsLiked(
  //       article.likes.some(({ user_id }: { user_id: number }) => loggedinUserId === user_id),
  //     );
  //   }
  // })();

  const { data, isLoading, mutate, error } = useMutation(
    'add_likes',
    async ({ category, reactableId }: { category: string; reactableId: number }) => {
      const res = await addReaction({ axios })({
        reactableId,
        category,
        reactableType: 'Article',
      });
      return res;
    },
    {
      onError: (error: any) => {
        if (error.response.status === 401) {
          setOpen(true);
        }
      },
    },
  );

  const handleClickReaction = (category: string) => {
    mutate(
      { category, reactableId: article.id },
      {
        onSuccess: ({ data }) => {
          console.log({ isLiked });
          console.log({ mutation: data });
          if (data.result === 'destroty') setIsLiked(false);
          if (data.result === 'create') setIsLiked(true);
          console.log({ isLiked });
        },
      },
    );
  };

  const handleIsLiked = (likes: any, userId: number): void => {
    !isLoading && console.log('likes:: %d', data);
    let isLike = likes.some(({ user_id }: any) => userId === user_id);
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
        <LeftSide likes={likes.length} handleClikReaction={handleClickReaction} isLiked={isLiked} />
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
