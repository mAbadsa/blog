import { FC, ReactElement } from 'react';
import { useQuery } from 'react-query';
import Axios, { AxiosResponse } from 'axios';

import PostCard from '../PostCard';

import Articles from '../interface/Articles';
import tagsProps from '../interface/Tags';

const getArticles = async ({ limit, offset }: { limit: number; offset: number }) => {
  const res: AxiosResponse = await Axios.get(
    `/api/articles/get-articles?limit=${limit}&offset=${offset}`,
  );
  return res;
};

interface dbData {
  id: number;
  title: string;
  slug: string;
  content: string;
  cover_image: string;
  tags: string;
  last_reading: number;
  created_at: string;
  updated_at: string;
  user_id: number;
  username: string;
  name: string;
  email: string;
  bio: string;
  profile_image: string;
  location: string;
  github_account: string;
  website_url: string;
  user_created_at: string;
}

const PostsContainer: FC = () => {
  const { data, isLoading, error } = useQuery('articles', () =>
    getArticles({ limit: 15, offset: 0 }),
  );

  const articles: Articles[] =
    !isLoading &&
    data?.data.articles.map(
      ({
        id,
        title,
        slug,
        content,
        cover_image,
        tags,
        last_reading,
        created_at,
        updated_at,
        user_id,
        username,
        name,
        email,
        bio,
        profile_image,
        location,
        github_account,
        website_url,
        user_created_at,
      }: dbData): Articles => {
        const _tags: tagsProps[] = tags.split(', ').map((tag, idx): tagsProps => {
          const t: tagsProps = {
            id: 't' + idx,
            tag,
          };
          return t;
        });
        const article: Articles = {
          id,
          title,
          slug,
          content,
          coverImage: cover_image,
          tags: _tags,
          lastReading: last_reading,
          reactions: 10,
          comments: 2,
          createdAt: created_at,
          updatedAt: updated_at,
          userData: {
            id: user_id,
            username: username,
            name: name,
            email: email,
            bio: bio,
            profileImage: profile_image,
            location: location,
            githubAccount: github_account,
            websiteUrl: website_url,
            joinedDate: user_created_at,
          },
        };
        return article;
      },
    );

  const postsElm: ReactElement[] | boolean =
    !isLoading &&
    articles.map((article, idx) => {
      return <PostCard key={article.id} article={article} showCoverImage={idx === 0} />;
    });

  return <div>{!isLoading && postsElm}</div>;
};

export default PostsContainer;
