import { WhislistWhereInput } from "./WhislistWhereInput";
import { WhislistOrderByInput } from "./WhislistOrderByInput";

export type WhislistFindManyArgs = {
  where?: WhislistWhereInput;
  orderBy?: Array<WhislistOrderByInput>;
  skip?: number;
  take?: number;
};
