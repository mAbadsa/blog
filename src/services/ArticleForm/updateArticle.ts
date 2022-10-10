import axios, { AxiosResponse, AxiosStatic } from 'axios';

const updateArticle =
  ({ axios }: { axios: AxiosStatic }) =>
  async <
    T extends {
      coverImage: string | undefined;
      title: string;
      slug: string;
      tags: string[] | undefined;
      textareaValue: string | undefined;
    },
  >({
    coverImage,
    title,
    slug,
    tags,
    textareaValue,
  }: T): Promise<AxiosResponse<any>> => {
    const res: AxiosResponse = await axios.put('/api/articles', {
      data: {
        coverImage,
        title,
        slug,
        tags,
        textareaValue,
      },
    });
    return res;
  };

export default updateArticle;
