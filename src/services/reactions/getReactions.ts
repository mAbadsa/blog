import { AxiosResponse, AxiosStatic } from 'axios';

const getReactions =
  <T extends { axios: AxiosStatic }>({ axios }: T) =>
  async <U extends { articleId: number }>({ articleId }: U): Promise<AxiosResponse> => {
    console.log(process.env.NEXT_PUBLIC_BASE_UR);
    const res: AxiosResponse = await axios.get(`http://localhost:3000/api/reactions/${articleId}`);
    return res;
  };

export default getReactions;
