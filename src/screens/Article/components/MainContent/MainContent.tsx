import { FC } from 'react';
import remarkGfm from 'remark-gfm';

import CodeBlock from '../../../ArticleForm/component/MDEditor/codeBlock';
import Tags from '../../../../components/PostCard/Tags';
import UserAvatar from '../../../../components/PostCard/PostCardAvatar';

import tagsProps from '../../../../components/interface/Tags';

import {
  MainContentStyled,
  ArticleHeader,
  StyledImage,
  Article,
  ArticleTitle,
  ArticleHeaderMeta,
  StyledArticleMainContent,
  StyledMarkdown,
} from './styles';

const MainContent: FC<{ article: any }> = ({ article }) => {
  const { tags, cover_image, username, created_at, slug, profile_image, title, content } = article;

  const _tags: tagsProps[] = tags.split(', ').map((tag: string, idx: number): tagsProps => {
    const t: tagsProps = {
      id: 't' + idx,
      tag,
    };
    return t;
  });

  return (
    <MainContentStyled>
      <Article>
        <ArticleHeader>
          {cover_image && (
            <StyledImage
              src={cover_image}
              alt="cover image"
              width="100"
              height="42"
              sizes="100vw"
              objectFit="cover"
            />
          )}
          <ArticleHeaderMeta>
            <UserAvatar username={username} date={created_at} slug={slug} avatar={profile_image} />
            <ArticleTitle variant="h1">{title}</ArticleTitle>
            <Tags tags={_tags} />
          </ArticleHeaderMeta>
        </ArticleHeader>
        <StyledArticleMainContent>
          <StyledMarkdown components={CodeBlock as any} remarkPlugins={[remarkGfm]}>
            {content}
          </StyledMarkdown>
        </StyledArticleMainContent>
      </Article>
    </MainContentStyled>
  );
};

export default MainContent;
