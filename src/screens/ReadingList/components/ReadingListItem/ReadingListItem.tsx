import { FC } from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import getTime from '@helpers/getTime';
import Button from '@components/Button';
import Tags from './Tags';
import { StyledReadingListItem, StyledNavLink, StyledDot } from './style';
import { ReadingListType } from '../../type';

const ReadingListItem: FC<{
  title: string;
  slug: string;
  author: string;
  avatarImage: string;
  createdAt: string;
  lastReading: string;
  isArchived: boolean;
  tags: Array<{ id: number; tag: string }>;
}> = ({ title, slug, author, createdAt, lastReading, isArchived, avatarImage, tags }) => {
  return (
    <StyledReadingListItem container justify-content="space-between" direction="row">
      <Grid item lg={1} style={{ maxWidth: '32px', paddingTop: 6 }}>
        <Link href={`/${author}`} passHref>
          <StyledNavLink underline="none">
            <Avatar alt={'avatar'} src={avatarImage} sizes="32" />
          </StyledNavLink>
        </Link>
      </Grid>
      <Grid className="CardMain" container item>
        <Grid item lg={12}>
          <Link href={`/${author}/${slug}`} passHref>
            <StyledNavLink underline="none" color="textPrimary" textPrimary>
              {title}
            </StyledNavLink>
          </Link>
        </Grid>
        <Grid className="CardFoot" item lg={12}>
          <Link href={`/${author}}`} passHref>
            <StyledNavLink className="UserLisk" color="textPrimary" textPrimary>
              {author}
            </StyledNavLink>
          </Link>
          <span style={{ color: '#717171' }}>
            <StyledDot> • </StyledDot>
            {dayjs(createdAt).format('MMM DD')}
            <StyledDot> • </StyledDot>
            {' ('} {getTime(lastReading)} {' ago) '}
          </span>
          <StyledDot> • </StyledDot>
          <Tags tags={tags} />
        </Grid>
      </Grid>
      <Grid item lg={2} style={{ alignSelf: 'center' }}>
        <Button onClick={() => {}} variant="text" color="primary">
          Archive
        </Button>
      </Grid>
    </StyledReadingListItem>
  );
};

export default ReadingListItem;
