import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { usePostReactionMutation } from '@redux/index';
import { RootState } from '@redux/index';
import { StyledButton, StyledIconContainer, StyledReactCount } from './styles';
import SVGIcons from '@components/SVG/SVGIcons';

const LikeButton: FC<{ articleId: number; likesNumber: number; isLiked: Boolean }> = ({
  articleId,
  likesNumber,
  isLiked,
}) => {
  const state = useSelector((state: RootState) => state.auth) as any;
  const [isLikedState, setIsLiked] = useState<Boolean>(isLiked);
  const [likesCount, setLikesCount] = useState<number>(likesNumber);
  const [postReaction, { data, isLoading, error }] = usePostReactionMutation();
  const handleReaction = async () => {
    try {
      const res = (await postReaction({
        reactableId: articleId,
        category: 'Like',
        reactableType: 'Article',
      }).unwrap()) as any;

      if (!isLoading && !error) {
        setLikesCount(res?.likes.length);
        setIsLiked(
          res.likes.some(
            (like: { user_id: Number | undefined }) =>
              like.user_id === state.user_id && state.isAuth === true,
          ),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledButton
      variant="text"
      color="secondary"
      onClick={handleReaction}
      isliked={isLikedState.toString()}
    >
      <StyledIconContainer className="like-container">
        {isLikedState ? <SVGIcons.FilledLike /> : <SVGIcons.Like />}
      </StyledIconContainer>
      <StyledReactCount className="reaction-count_like">{likesCount}</StyledReactCount>
    </StyledButton>
  );
};

export default LikeButton;
