import { FC, useState } from 'react';
import axios from 'axios';

import { usePostReactionMutation } from '@redux/slices/api';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';

import { addReaction } from '@services/index';
import SVGIcons from '@components/SVG/SVGIcons';

import {
  LeftSideStyled,
  StyledArticleAction,
  StyledActionInner,
  StyledButton,
  StyledIconContainer,
  StyledReactCount,
} from './styles';
import { getReactions } from '@services/index';
import { RootState } from '@redux/store';

const LeftSide: FC<{
  articleId: number;
}> = ({ articleId }) => {
  const state = useSelector((state: RootState) => state.auth);

  const [postReaction, { data: likes, isLoading: isUpdating }] = usePostReactionMutation();
  const [isLiked, setIsLiked] = useState<Boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(0);
  const [clickAnimation, setClickAnimation] = useState<Boolean>(true);
  const { isLoading, isError, data, error } = useQuery(
    'reactions',
    async () => await getReactions({ axios })({ articleId }),
    {
      onSuccess(data) {
        console.log({ data });
        setLikesCount(data.data.likes.length);
        setIsLiked(
          data.data.likes.some(
            (like: { user_id: Number | undefined }) =>
              like.user_id === state.user_id && state.isAuth === true,
          ),
        );
      },
      staleTime: 0,
    },
  );

  const handleReaction = async () => {
    try {
      const res = (await postReaction({
        reactableId: articleId,
        category: 'Like',
        reactableType: 'Article',
      }).unwrap()) as any;
      console.log(res);

      if (!isLoading && !error) {
        setLikesCount(res?.likes.length);
        setIsLiked(
          res.likes.some(
            (like: { user_id: Number | undefined }) =>
              like.user_id === state.user_id && state.isAuth === true,
          ),
        );
        setClickAnimation(!clickAnimation);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LeftSideStyled>
      <StyledArticleAction>
        <StyledActionInner>
          <StyledButton
            variant="text"
            color="secondary"
            onClick={handleReaction}
            isliked={isLiked}
            clicked={clickAnimation}
          >
            <StyledIconContainer className="like-container">
              {isLiked ? <SVGIcons.FilledLike /> : <SVGIcons.Like />}
            </StyledIconContainer>
            <StyledReactCount>{likesCount}</StyledReactCount>
          </StyledButton>
          <StyledButton variant="text" color="secondary">
            <StyledIconContainer>
              <SVGIcons.Unicorn />
            </StyledIconContainer>
            <StyledReactCount>{' 12 '}</StyledReactCount>
          </StyledButton>
          <StyledButton variant="text" color="secondary">
            <StyledIconContainer>
              <SVGIcons.Bookmark />
            </StyledIconContainer>
            <StyledReactCount>{' 89 '}</StyledReactCount>
          </StyledButton>
        </StyledActionInner>
      </StyledArticleAction>
    </LeftSideStyled>
  );
};

export default LeftSide;
