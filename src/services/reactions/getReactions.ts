import { AxiosResponse, AxiosStatic } from 'axios';

const getReactions =
  <T extends { axios: AxiosStatic }>({ axios }: T) =>
  async <U extends { articleId: number }>({ articleId }: U): Promise<AxiosResponse> => {
    const res: AxiosResponse = await axios.get(
      `http://localhost:3000/api/reactions?article_id=${articleId}`,
    );
    return res;
  };

export default getReactions;
