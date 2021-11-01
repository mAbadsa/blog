import UserData from "./UserData";
import tagsType from "./Tags";

export default interface Posts {
  id: string,
  title: string,
  slug: string,
  createdAt: string,
  reactions: number,
  comments: number,
  tags: tagsType[],
  headImg: string,
  lastRead: number,
  userData: UserData,
}
