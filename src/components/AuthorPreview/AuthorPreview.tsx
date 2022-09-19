import { FC } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import {
  StyledAuthorPreview,
  StyledHeader,
  StyledImage,
  StyledLink,
  StyledUsername,
  StyledButton,
  StyledList,
  StyledListItemText,
} from './styles';

const AuthorPreview: FC<{ userdata: any }> = ({ userdata }) => {
  const {
    name,
    username,
    avatar,
    bio,
    email,
    githubAccount,
    websiteUrl,
    location,
    education,
    joined,
  } = userdata;
  return (
    <StyledAuthorPreview style={{ borderTopColor: '#66a566' }}>
      <StyledHeader>
        <Link href={`/${username}`} passHref>
          <StyledLink color="secondary" underline="none">
            {avatar ? (
              <StyledImage src={avatar} alt={name} width="48" height="48" layout="fixed" />
            ) : (
              <Avatar aria-label="user-avatar">{username[0].toUpperCase()}</Avatar>
            )}
            <StyledUsername>{name}</StyledUsername>
          </StyledLink>
        </Link>
      </StyledHeader>
      <StyledButton variant="contained" color="primary" size="large">
        Follow
      </StyledButton>
      {bio ? (
        <Typography>{bio}</Typography>
      ) : (
        <StyledButton href="/settings" variant="outlined" color="primary" size="large">
          Add your Bio
        </StyledButton>
      )}
      <StyledList>
        {location && (
          <ListItem style={{ padding: '0' }}>
            <StyledListItemText primary="Location" secondary={location} />
          </ListItem>
        )}
        {email && (
          <ListItem style={{ padding: '0' }}>
            <StyledListItemText primary="Email" secondary={email} />
          </ListItem>
        )}
        {education && (
          <ListItem style={{ padding: '0' }}>
            <StyledListItemText primary="Education" secondary={education} />
          </ListItem>
        )}
        {githubAccount && (
          <ListItem style={{ padding: '0' }}>
            <StyledListItemText primary="Github" secondary={githubAccount} />
          </ListItem>
        )}
        {websiteUrl && (
          <ListItem style={{ padding: '0' }}>
            <StyledListItemText primary="Github" secondary={websiteUrl} />
          </ListItem>
        )}
        {joined && (
          <ListItem style={{ padding: '0' }}>
            <StyledListItemText primary="Joined" secondary={dayjs(joined).format('DD MMM YYYY')} />
          </ListItem>
        )}
      </StyledList>
    </StyledAuthorPreview>
  );
};

export default AuthorPreview;
