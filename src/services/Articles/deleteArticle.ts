import axios, { AxiosResponse, AxiosStatic } from 'axios';

const deleteArticle =
  ({ axios }: { axios: AxiosStatic }) =>
  async <
    T extends {
      slug: string;
    },
  >({
    slug,
  }: T): Promise<AxiosResponse<any>> => {
    const res: AxiosResponse = await axios.delete('/api/articles', {
      data: {
        slug,
      },
    });
    return res;
  };

export default deleteArticle;
