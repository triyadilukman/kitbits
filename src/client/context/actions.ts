import { ICampaign, ActionType, SortBy } from "./types";

export const sortByHandler = (sortBy: string, data: ICampaign[]): SortBy => ({
  type: ActionType.SortBy,
  payload: { sortBy, data },
});
