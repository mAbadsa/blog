import { FC, MouseEventHandler } from 'react';
import Link from 'next/link';

import {
  StyledDeleteConfirm,
  StyledHeader,
  StyledDescBody,
  StyledDialogActions,
  StyledButton,
  StyledNavLink,
} from './styles';

const DeleteConfirm: FC<{ slug: string; username: string }> = ({ slug, username }) => {
  return (
    <StyledDeleteConfirm>
      <StyledHeader variant="h2" component="div">
        Are you sure you want to delete this article?
      </StyledHeader>
      <div>
        <StyledDescBody>
          {' You cannot undo this action, perhaps you just want to '}
          <Link href="/" passHref>
            <a>edit</a>
          </Link>
          {' instead? '}
        </StyledDescBody>
        <StyledDialogActions>
          <StyledButton variant="contained" size="medium" disableElevation>
            Delete
          </StyledButton>
          <Link href={`/${username}/${slug}/edit`} passHref>
            <StyledNavLink color="secondary">Edit</StyledNavLink>
          </Link>
          <Link href={'/dashboard'} passHref>
            <StyledNavLink color="secondary">Dismiss</StyledNavLink>
          </Link>
        </StyledDialogActions>
      </div>
    </StyledDeleteConfirm>
  );
};

export default DeleteConfirm;
