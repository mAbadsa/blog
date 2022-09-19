import { FC } from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import IconButton from '@material-ui/core/IconButton';
import { MoreHoriz } from '@material-ui/icons';

import {
  StyledPostCard,
  StyledStoryTitleBox,
  StyledStoryTitle,
  StyledNavLink,
  StyledChip,
  StyledStoryActions,
  StyledButton,
  StyledIconButton,
} from './styles';

const PostCard: FC<{
  id: number;
  title: string;
  slug: string;
  tempSlug: string;
  status: string;
  previewLink: string | null;
}> = ({ id, title, slug, status, tempSlug, previewLink }) => {
  const { isLoading, error, user } = useUser();
  return (
    <>
      {!isLoading && (
        <StyledPostCard>
          <StyledStoryTitleBox>
            <StyledStoryTitle variant="h3">
              <Link href={`${user?.username}/${slug}-temp-slug-${id}/edit`} passHref>
                <StyledNavLink>{title}</StyledNavLink>
              </Link>
            </StyledStoryTitle>
          </StyledStoryTitleBox>
          <StyledChip
            label={`${status}`}
            size="small"
            component="a"
            href={`${previewLink}`}
            status={status}
            clickable
          />
          <StyledStoryActions>
            <StyledButton
              size="small"
              component="a"
              href={`/${user?.nickname}/${status === 'draft' ? tempSlug : slug}/delete_confirm`}
              color="primary"
              variant="text"
              type="delete"
            >
              Delete
            </StyledButton>
            <StyledButton
              size="small"
              component="a"
              href={`/${user?.nickname}/${status === 'draft' ? tempSlug : slug}/edit`}
              color="primary"
              variant="text"
              type="edit"
            >
              Edit
            </StyledButton>
            <StyledIconButton>
              <MoreHoriz />
            </StyledIconButton>
          </StyledStoryActions>
        </StyledPostCard>
      )}
    </>
  );
};

export default PostCard;
