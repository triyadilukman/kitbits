import React from "react";
import { Select, Box } from "@chakra-ui/react";

import { sortByHandler } from "client/context/actions";
import { useCampaignContext } from "client/context/campaignContext";

import { sorterSty } from "./styles";

export default function Sorter() {
	const { dispatch, state } = useCampaignContext();
	const handleChangeSort = (event: any) => {
		dispatch(sortByHandler(event.target.value, state.initialData));
	};

	return (
		<Box className={sorterSty}>
			<Select
				placeholder="Sort By"
				size="md"
				width="100%"
				onChange={handleChangeSort}
			>
				<option value="goal">Donation Goal</option>
				<option value="days">Days Left</option>
			</Select>
		</Box>
	);
}
