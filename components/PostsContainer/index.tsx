import { FC, ReactElement } from 'react';
import PostCard from '../PostCard';

import fakePostsData from '../../fakeData/posts';

const PostsContainer: FC = () => {

  const postsElm: ReactElement[] = fakePostsData.map((post) => {
    return <PostCard key={post.id} post={post} />
  });

  return(
    <div>
      { postsElm }
    </div>
  );
}

export default PostsContainer;
