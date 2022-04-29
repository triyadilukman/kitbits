import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import { Box } from "@chakra-ui/react";
import Header from "client/components/Header";
import CampaignList from "client/pages/CampaignList";

import { CampaignProvider } from "client/context/campaignContext";

import { ICampaign } from "client/context/types";

import { wrapperSty } from "./app-styles";

interface Props {
	serverData?: ICampaign[] | [];
}

/** * The root react component for both client side rendering and server side rendering */
export default function App(props: Props) {
	return (
		<CampaignProvider campaigns={props.serverData || []}>
			<Box className={wrapperSty}>
				<Header />
				<Routes>
					<Route path="/" element={<CampaignList />} />
				</Routes>
			</Box>
		</CampaignProvider>
	);
}
