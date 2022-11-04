import { FC, useState } from 'react';
import axios from 'axios';

import { usePostReactionMutation } from '@redux/slices/api';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import LikeButton from './LikeButton';
import ReadingListButton from './ReadingListButton';
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
  const state = useSelector((state: RootState) => state.auth) as any;

  // const [postReaction, { data: likes, isLoading: isUpdating }] = usePostReactionMutation();
  const [isLiked, setIsLiked] = useState<Boolean>(false);
  const [isInReadingList, setIsInReadingList] = useState<Boolean>(false);
  // const [likesCount, setLikesCount] = useState<number>(0);
  // const [readingListCount, setReadingListCount] = useState<number>(0);
  // const [clickAnimation, setClickAnimation] = useState<Boolean>(true);
  const { isLoading, isError, data, error } = useQuery(
    'reactions',
    async () => await getReactions({ axios })({ articleId }),
    {
      onSuccess(data) {
        // setLikesCount(data.data.likes.length);
        setIsLiked(
          data.data.likes.some(
            (like: { user_id: Number | undefined }) =>
              like.user_id === state.user_id && state.isAuth === true,
          ),
        );
        // setReadingListCount(data.data.readingList.length);
        setIsInReadingList(
          data.data.readingList.some(
            (readingListItem: { user_id: Number | undefined }) =>
              readingListItem.user_id === state.user_id && state.isAuth === true,
          ),
        );
      },
      staleTime: 0,
    },
  );

  return (
    <LeftSideStyled>
      <StyledArticleAction>
        <StyledActionInner>
          {!isLoading && (
            <LikeButton
              articleId={articleId}
              likesNumber={data?.data.likes.length}
              isLiked={isLiked}
            />
          )}
          <StyledButton variant="text" color="secondary">
            <StyledIconContainer>
              <SVGIcons.Unicorn />
            </StyledIconContainer>
            <StyledReactCount>{' 12 '}</StyledReactCount>
          </StyledButton>
          {!isLoading && (
            <ReadingListButton
              articleId={articleId}
              readingListNumber={data?.data.readingList.length}
              isListed={isInReadingList}
            />
          )}
        </StyledActionInner>
      </StyledArticleAction>
    </LeftSideStyled>
  );
};

export default LeftSide;
