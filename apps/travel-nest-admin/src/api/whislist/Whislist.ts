import { User } from "../user/User";

export type Whislist = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User;
};
