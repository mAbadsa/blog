import React, { FC } from 'react';
import PostCard from './PostCard';
import { StyledPostCardContainer } from './styles';

const PostCardContainer: FC<{
  posts: {
    id: number;
    title: string;
    slug: string;
    temp_slug: string;
    status: string;
    temp_preview_link: string;
  }[];
}> = ({ posts }) => {
  const postCards: React.ReactElement[] = posts?.map(
    ({ id, title, slug, status, temp_slug, temp_preview_link }): React.ReactElement => {
      return (
        <PostCard
          key={id}
          id={id}
          title={title}
          slug={slug}
          tempSlug={temp_slug}
          status={status}
          previewLink={temp_preview_link}
        />
      );
    },
  );
  return <StyledPostCardContainer>{postCards}</StyledPostCardContainer>;
};

export default PostCardContainer;
