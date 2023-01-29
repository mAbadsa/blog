import { FC, ReactElement } from 'react';

import { useGetArticlesQuery } from '@redux/index';

import PostCard from '@components/PostCard';
import Articles from '@components/interface/Articles';
import { parsingArticle } from './parsingData';

const PostsContainer: FC = () => {
  const { data, isLoading, error } = useGetArticlesQuery(
    { limit: 15, offset: 0 },
    { refetchOnMountOrArgChange: true },
  );
  console.log({ data });
  const articles: Articles[] = !isLoading && parsingArticle(data.articles);
  // const articles: Articles[] =
  //   !isLoading &&
  //   data?.articles.map((item: dbData): Articles => {
  //     const _tags: tagsProps[] = item.tags.split(', ').map((tag, idx): tagsProps => {
  //       const t: tagsProps = {
  //         id: 't' + idx,
  //         tag,
  //       };
  //       return t;
  //     });
  //     const article: Articles = {
  //       id: item.id,
  //       title: item.title,
  //       slug: item.slug,
  //       content: item.content,
  //       coverImage: item.cover_image,
  //       tags: _tags,
  //       lastReading: item.last_reading,
  //       reactions: Number(item.likecount) || 0,
  //       comments: Number(item.commentcount) || 0,
  //       createdAt: item.created_at,
  //       updatedAt: item.updated_at,
  //       userData: {
  //         id: item.user_id,
  //         username: item.username,
  //         name: item.name,
  //         email: item.email,
  //         bio: item.bio,
  //         profileImage: item.profile_image,
  //         location: item.location,
  //         githubAccount: item.github_account,
  //         websiteUrl: item.website_url,
  //         joinedDate: item.user_created_at,
  //       },
  //     };
  //     return article;
  //   });

  const postsElm: ReactElement[] | boolean =
    !isLoading &&
    articles.map((article, idx) => {
      return <PostCard key={article.id} article={article} showCoverImage={idx === 0} />;
    });

  return <>{!isLoading && postsElm}</>;
};

export default PostsContainer;
