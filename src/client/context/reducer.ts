import { CampaignActions, ActionType } from "./types";
import { CampaignState } from "./types";

export default function campaignReducer(
	state: CampaignState,
	action: CampaignActions
) {
	switch (action.type) {
		case ActionType.SortBy: {
			const { sortBy } = action.payload;

			const field = sortBy === 'goal' ? 'donation_percentage' : 'days_remaining';
      const dataTemp = [...state.initialData];

			return {
				...state,
				sortBy,
				data: sortBy ? dataTemp.sort(
					(a, b) => a[field] - b[field]
				) : state.initialData,
			};
		}

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}
