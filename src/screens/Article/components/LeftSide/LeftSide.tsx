import { FC } from 'react';
import axios from 'axios';

import SVGIcons from '@components/SVG/SVGIcons';

import { addReaction } from '@services/index';

import {
  LeftSideStyled,
  StyledArticleAction,
  StyledActionInner,
  StyledButton,
  StyledIconContainer,
  StyledReactCount,
  StyledFiiledLike,
} from './styles';

const LeftSide: FC<{
  articleId: number;
  likes: number;
  isLiked: Boolean;
}> = ({ articleId, likes, isLiked }) => {
  console.log({ likes });
  console.log({ isLiked });
  const handleReaction = async () => {
    console.log('handlereaction');
    console.log({ articleId });

    const addReactionReq = addReaction({ axios });
    const res = await addReactionReq({
      reactableId: articleId,
      category: 'Like',
      reactableType: 'Article',
    });
    console.log(res);
  };

  return (
    <LeftSideStyled>
      <StyledArticleAction>
        <StyledActionInner>
          <StyledButton variant="text" color="secondary" onClick={handleReaction}>
            <StyledIconContainer>
              {isLiked ? <StyledFiiledLike></StyledFiiledLike> : <SVGIcons.Like />}
            </StyledIconContainer>
            <StyledReactCount>{likes}</StyledReactCount>
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
