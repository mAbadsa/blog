import { AxiosResponse, AxiosStatic } from 'axios';

const getReactions =
  <T extends { axios: AxiosStatic }>({ axios }: T) =>
  async <U extends { articleId: number }>({ articleId }: U): Promise<AxiosResponse> => {
    const res: AxiosResponse = await axios.get(`/api/reactions/${articleId}`);
    return res;
  };

export default getReactions;
