import { AxiosResponse, AxiosStatic } from 'axios';

const addReaction =
  ({ axios }: { axios: AxiosStatic }) =>
  async <T extends { reactableId: number; category: string; reactableType: string }>({
    reactableId,
    category,
    reactableType,
  }: T): Promise<AxiosResponse<any>> => {
    const res: AxiosResponse = await axios.post(`/api/reactions`, {
      reactable_id: reactableId,
      category,
      reactable_type: reactableType,
    });
    return res;
  };

export default addReaction;
