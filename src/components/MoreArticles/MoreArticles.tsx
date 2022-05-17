import { FC } from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

import { StyledMoreArticles, StyledHeader, StyledLink } from './styles';

const MoreArticles: FC<{ username: string; articleTitle: string; tags: string }> = ({
  username,
  articleTitle,
  tags,
}) => {
  return (
    <StyledMoreArticles>
      <StyledHeader>
        <Typography component="h3">
          {' More from '}
          <Link href={`/${username}`} passHref>
            <StyledLink color="secondary" underline="none">
              {username}
            </StyledLink>
          </Link>
        </Typography>
        No suggested articles
      </StyledHeader>
    </StyledMoreArticles>
  );
};

export default MoreArticles;
