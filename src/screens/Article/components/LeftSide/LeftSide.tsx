import { FC } from 'react';

import SVGIcons from '../../../../components/SVG/SVGIcons';

import {
  LeftSideStyled,
  StyledArticleAction,
  StyledActionInner,
  StyledButton,
  StyledIconContainer,
  StyledReactCount,
} from './styles';

const LeftSide: FC<{ likes: number; handleClikReaction: Function; isLiked: boolean }> = ({
  likes,
  handleClikReaction,
  isLiked,
}) => {
  const handleReaction = async (category: string) => {
    handleClikReaction(category);
  };

  console.log({ isLiked });

  return (
    <LeftSideStyled>
      <StyledArticleAction>
        <StyledActionInner>
          <StyledButton variant="text" color="secondary" onClick={() => handleReaction('Like')}>
            <StyledIconContainer isLiked={isLiked}>
              {isLiked ? <SVGIcons.FilledLike /> : <SVGIcons.Like />}
            </StyledIconContainer>
            <StyledReactCount isLiked={isLiked}>{likes}</StyledReactCount>
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
