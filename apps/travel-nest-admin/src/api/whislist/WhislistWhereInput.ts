import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WhislistWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
