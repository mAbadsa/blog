import Articles from '@components/interface/Articles';
import tagsProps from '@components/interface/Tags';

const parsingTags = (tags: string): tagsProps[] => {
  return tags.split(', ').map((tag: string, idx: number): tagsProps => {
    const t: tagsProps = {
      id: 't' + idx,
      tag,
    };
    return t;
  });
};

export const parsingArticle = (articlesData: any) => {
  return articlesData.map((item: any): Articles => {
    const tagsList: tagsProps[] = parsingTags(item.tags);
    const article: Articles = {
      id: item.id,
      title: item.title,
      slug: item.slug,
      content: item.content,
      coverImage: item.cover_image,
      tags: tagsList,
      lastReading: item.last_reading,
      reactions: Number(item.likecount) || 0,
      comments: Number(item.commentcount) || 0,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
      userData: {
        id: item.user_id,
        username: item.username,
        name: item.name,
        email: item.email,
        bio: item.bio,
        profileImage: item.profile_image,
        location: item.location,
        githubAccount: item.github_account,
        websiteUrl: item.website_url,
        joinedDate: item.user_created_at,
      },
    };
    return article;
  });
};
