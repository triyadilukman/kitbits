import React, {
	createContext,
	useReducer,
	useContext,
} from "react";

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
	const [state, dispatch] = useReducer(reducer, {
		...initialCampaignState,
		initialData: campaigns || [],
		data: campaigns || [],
	});

	return (
		<CampaignContext.Provider
			value={{
				state,
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
			"useCampaignContext must be used within a CampaignContext"
		);
	}
	return context;
};

export { CampaignProvider, useCampaignContext };
