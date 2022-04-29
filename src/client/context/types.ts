export enum ActionType {
  SortBy,
}

export interface SortBy {
  type: ActionType.SortBy;
  payload: {
    sortBy: string
    data: ICampaign[];
  };
}

export type CampaignActions = SortBy

export interface CampaignState {
  data: ICampaign[];
	initialData: ICampaign[];
  sortBy: string;
}

export const initialCampaignState: CampaignState = {
  data: [],
	initialData: [],
  sortBy: '',
};

export interface ICampaign {
	id: number;
	title: string;
	image: string;
	days_remaining: 0;
	donation_received: number;
	donation_target: number;
	donation_percentage: number;
}

export interface IServerDataContextType {
	state: CampaignState;
	dispatch: React.Dispatch<CampaignActions>;
}