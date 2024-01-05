import { Whislist as TWhislist } from "../api/whislist/Whislist";

export const WHISLIST_TITLE_FIELD = "id";

export const WhislistTitle = (record: TWhislist): string => {
  return record.id?.toString() || String(record.id);
};
