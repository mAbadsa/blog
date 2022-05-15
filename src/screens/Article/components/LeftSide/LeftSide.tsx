import { FC } from 'react';

import { LeftSideStyled, StyledArticleAction } from './styles';

const LeftSide: FC = () => {
  return (
    <LeftSideStyled>
      <StyledArticleAction>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
      </StyledArticleAction>
    </LeftSideStyled>
  );
};

export default LeftSide;
