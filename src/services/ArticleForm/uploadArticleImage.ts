import { AxiosResponse, AxiosStatic } from 'axios';

const uploadImage =
  ({ axios }: { axios: AxiosStatic }) =>
  async (imgData: string | ArrayBuffer | null) => {
    let response: AxiosResponse = await axios.post('api/articles/image', {
      data: imgData,
    });

    return response;
  };

export default uploadImage;
