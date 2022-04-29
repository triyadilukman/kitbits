import React from "react";
import { Helmet } from "react-helmet";
import { Box } from "@chakra-ui/react";

import { useCampaignContext  } from "client/context/campaignContext";
import { ICampaign } from "client/context/types";

import Card from "client/components/Card";
import { campaignWpSty } from "./styles";

export default function HomePage() {
	const { state: { data }} = useCampaignContext();

	return (
		<Box className={campaignWpSty}>
			<Helmet></Helmet>
			{data.map((campaign: ICampaign) => (
				<Card
					key={campaign.id}
					imgUrl={campaign.image}
					name={campaign.title}
					day={campaign.days_remaining}
					received={campaign.donation_received}
					percent={campaign.donation_percentage}
				/>
			))}
		</Box>
	);
}
