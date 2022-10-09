import { FC } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import SVGIcons from '@components/SVG/SVGIcons';

import { addReaction } from '@services/index';

import {
  LeftSideStyled,
  StyledArticleAction,
  StyledActionInner,
  StyledButton,
  StyledIconContainer,
  StyledReactCount,
} from './styles';

const LeftSide: FC<{ articleId: number }> = ({ articleId }) => {
  const state = useSelector(state => state);

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
              <SVGIcons.Like />
            </StyledIconContainer>
            <StyledReactCount>{' 56 '}</StyledReactCount>
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
