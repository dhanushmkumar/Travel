import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WhislistListRelationFilter } from "../whislist/WhislistListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  listings?: ListingListRelationFilter;
  trips?: TripListRelationFilter;
  username?: StringFilter;
  whislists?: WhislistListRelationFilter;
};
