import axios, { AxiosResponse, AxiosStatic } from 'axios';

const getLogedinUser =
  <U extends { axios: AxiosStatic }>({ axios }: U) =>
  async <T extends { email: string }>({ email }: T): Promise<AxiosResponse<any>> => {
    const res: AxiosResponse = await axios.post('http://localhost:3000/api/users', {
      email,
    });

    return res;
  };

export default getLogedinUser;
