import axios, { AxiosResponse, AxiosStatic } from 'axios';

const uploadDraftArticle =
  ({ axios }: { axios: AxiosStatic }) =>
  async <
    T extends {
      coverImage: string | undefined;
      title: string;
      tags: string[] | undefined;
      textareaValue: string | undefined;
    },
  >({
    coverImage,
    title,
    tags,
    textareaValue,
  }: T): Promise<AxiosResponse<any>> => {
    const res: AxiosResponse = await axios.post('/api/articles/draft-article', {
      data: {
        coverImage,
        title,
        tags,
        textareaValue,
      },
    });
    return res;
  };

export default uploadDraftArticle;
