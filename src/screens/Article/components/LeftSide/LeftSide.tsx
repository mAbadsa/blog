import { FC } from 'react';
import Button from '../../../../components/Button';
import SVGIcons from '../../../../components/SVG/SVGIcons';

import {
  LeftSideStyled,
  StyledArticleAction,
  StyledActionInner,
  StyledButton,
  StyledIconContainer,
  StyledReactCount,
} from './styles';

const LeftSide: FC = () => {
  return (
    <LeftSideStyled>
      <StyledArticleAction>
        <StyledActionInner>
          <StyledButton variant="text" color="secondary">
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
