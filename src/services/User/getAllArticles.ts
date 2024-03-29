import axios, { AxiosResponse, AxiosStatic } from 'axios';

const getAllArticles =
  ({ axios }: { axios: AxiosStatic }) =>
  async <T extends { userId: number }>({ userId }: T): Promise<AxiosResponse<any>> => {
    const res: AxiosResponse = await axios.get('/api/user/articles');
    return res;
  };

export default getAllArticles;
