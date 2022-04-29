import { CampaignActions, ActionType } from "./types";
import { CampaignState } from "./types";

export default function campaignReducer(
	state: CampaignState,
	action: CampaignActions
) {
	switch (action.type) {
		case ActionType.SortBy: {
			const { sortBy, data } = action.payload;
			const field = sortBy === 'goal' ? 'donation_percentage' : 'days_remaining'
      let dataTemp = data;

			dataTemp = data.sort(
				(a, b) => a[field] - b[field]
			);

			return {
				...state,
				sortBy,
				data: dataTemp
			};
		}

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}
