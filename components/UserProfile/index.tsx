import { FC } from "react";
import { useQuery } from "react-query";
import Axios, { AxiosResponse } from "axios";
import { useUser } from "@auth0/nextjs-auth0";
import Router from "next/router";

const getUserData = async (username: string) => {
  const res: AxiosResponse = await Axios.get(`api/users?${username}`);
  return res;
};

const UserProfile: FC = () => {
  const { router } = Router;
  console.log(router?.query);
  const { user, isLoading: useLoading } = useUser();
  console.log(user);
  const { data, isLoading, isError } = useQuery("userProfile", () =>
    getUserData("username")
  );

  return <div>UserProfile</div>;
};

export default UserProfile;
