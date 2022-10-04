import { FC, MouseEventHandler } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { deleteArticle } from '@services/Articles';

import {
  StyledDeleteConfirm,
  StyledHeader,
  StyledDescBody,
  StyledDialogActions,
  StyledButton,
  StyledNavLink,
} from './styles';

const DeleteConfirm: FC<{ slug: string; username: string }> = ({ slug, username }) => {
  const router = useRouter();
  const { mutate } = useMutation(
    'delete-article',
    (slug: string) => deleteArticle({ axios })({ slug }),
    {
      onSuccess: () => {
        router.push('/dashboard');
      },
    },
  );

  const handleDelete = (_slug: string) => {
    mutate(_slug);
  };

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
          <StyledButton
            variant="contained"
            size="medium"
            onClick={() => handleDelete(slug)}
            disableElevation
          >
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
