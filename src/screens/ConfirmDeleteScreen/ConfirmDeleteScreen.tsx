import { FC } from 'react';
import DeleteConfirm from '../../components/DeleteConfirm';

import { StyledConfirmScreen, StyledTitle } from './styles';

const ConfirmDeleteScreen: FC<{ article: any }> = ({ article }) => {
  console.log({ article });
  return (
    <StyledConfirmScreen>
      <StyledTitle>{article.title}</StyledTitle>
      <DeleteConfirm
        slug={article.status === 'published' ? article.slug : article.temp_slug}
        username={article.username}
      />
    </StyledConfirmScreen>
  );
};

export default ConfirmDeleteScreen;
