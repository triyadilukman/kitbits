import React, { createContext, useReducer, useContext, useMemo } from "react";
import { PrerenderData } from "shared/PrerenderedData";

import {
	ICampaign,
	initialCampaignState,
	IServerDataContextType,
} from "./types";
import reducer from "./reducer";

export interface ICampaignProviderParam {
	campaigns?: ICampaign[];
}

const CampaignContext = createContext<IServerDataContextType>({
	state: initialCampaignState,
	dispatch: () => {},
});

const CampaignProvider: React.FC<ICampaignProviderParam> = ({
	children,
	campaigns,
}) => {
	const [state, dispatch] = useReducer(reducer, initialCampaignState);

	const prerenderData =
		PrerenderData.readFromDom<IServerDataContextType>(true);
	const campaignsClient = prerenderData?.state?.data;

	const campaignsMemo = useMemo(() => {
		if (campaigns?.length) {
			return campaigns;
		}
		if (campaignsClient?.length) {
			return campaignsClient;
		}
		return state.data;
	}, [campaigns, campaignsClient]);

	return (
		<CampaignContext.Provider
			value={{
				state: {
					...state,
					data: campaignsMemo,
					initialData: campaigns || campaignsClient || [],
				},
				dispatch,
			}}
		>
			{children}
		</CampaignContext.Provider>
	);
};

const useCampaignContext = () => {
	const context = useContext(CampaignContext);
	if (!context) {
		throw new Error(
			"useProductDispatchContext must be used within a ProductListDispatch"
		);
	}
	return context;
};

export { CampaignProvider, useCampaignContext };
