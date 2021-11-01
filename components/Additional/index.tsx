import { FC } from 'react';
import { useTheme } from '@material-ui/core';

import HashTagsList from './HashTagsList';
import hashTagCardProps from '../interface/HashTagCard';
import useStyles from './styles';

const fakeData: hashTagCardProps[] = [
  {id: "news-1", title: 'Some title', commentsNo: 5, url: '/t/news'},
  {id: "news-2", title: 'Second title', commentsNo: 5, url: '/t/news'},
  {id: "news-3", title: 'Third title', commentsNo: 5, url: '/t/news'},
  {id: "news-4", title: 'Fourth title', commentsNo: 5, url: '/t/news'},
  {id: "news-5", title: 'Fivth title', commentsNo: 5, url: '/t/news'},
]

const Additional: FC = () => {
  const theme = useTheme();
  const classes = useStyles({theme});
  return (
    <div className={classes.Additional}>
      <HashTagsList title="news" articles={fakeData} />
    </div>
  )
}

export default Additional;
