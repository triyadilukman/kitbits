import React from "react";
import { Helmet } from "react-helmet";
import { Box } from "@chakra-ui/react";

import { useCampaignContext } from "client/context/campaignContext";
import { ICampaign } from "client/context/types";

import Card from "client/components/Card";
import { campaignWpSty } from "./styles";

export default function HomePage() {
	const {
		state: { data },
	} = useCampaignContext();

	return (
		<Box className={campaignWpSty}>
			<Helmet>
			<link rel="author" href="Kitabisa" />
<link rel="canonical" href="https://kitabisa.com" />
<link rel="alternate" href="android-app://com.kitabisa.android/https://www.kitabisa.com" />
<link rel="alternate" href="ios-app://1458307938/Kitabisa/https://www.kitabisa.com" />
<link rel="shortcut icon" type="image/png" href="https://assets.kitabisa.cc/images/icons/meta/favicon.ico" />
<link rel="icon" type="image/png" sizes="16x16" href="https://assets.kitabisa.cc/images/icons/meta/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="https://assets.kitabisa.cc/images/icons/meta/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="192x192" href="https://assets.kitabisa.cc/images/icons/meta/android-chrome-192x192.png" />
				<title>
					Kitabisa.com - Indonesia&#x27;s Fundraising Platform
				</title>
				<meta
					name="description"
					content="Situs donasi dan menggalang dana (fundraising) untuk inisiatif, campaign dan program sosial. Mari bergotong royong membangun Indonesia!"
				/>
				<meta property="og:url" content="https://kitabisa.com/" />
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://assets.kitabisa.cc/images/icons/meta/icons-512.png"
				/>
				<meta
					property="og:title"
					content="Kitabisa.com - Indonesia&#x27;s Fundraising Platform"
				/>
				<meta
					property="og:description"
					content="Situs donasi dan menggalang dana (fundraising) untuk inisiatif, campaign dan program sosial. Mari bergotong royong membangun Indonesia!"
				/>
				<meta
					name="description"
					content="Situs donasi dan menggalang dana (fundraising) untuk inisiatif, campaign dan program sosial. Mari bergotong royong membangun Indonesia!"
				/>
				<meta property="product:brand" content="Kitabisa" />
				<meta property="product:availability" content="out of stock" />
				<meta property="product:condition" content="new" />
				<meta property="product:price:amount" content="0" />
				<meta property="product:price:currency" content="IDR" />
				<meta property="product:retailer_item_id" content="1" />
				<meta name="twitter:app:name:iphone" content="Kitabisa" />
				<meta name="twitter:app:id:iphone" content="1458307938" />
				<meta name="twitter:app:name:ipad" content="Kitabisa" />
				<meta name="twitter:app:id:ipad" content="1458307938" />
				<meta name="twitter:app:name:googleplay" content="Kitabisa" />
				<meta
					name="twitter:app:id:googleplay"
					content="com.android.kitabisa"
				/>
				<meta name="twitter:card" content="product" />
				<meta name="twitter:site" content="@kitabisacom" />
				<meta name="twitter:title" content="Kitabisa.com" />
				<meta
					name="twitter:description"
					content="Aplikasi donasi dan zakat online untuk inisiatif, penggalangan dana dan program sosial. Mari bergotong royong membangun Indonesia!"
				/>
				<meta
					name="twitter:image"
					content="https://assets.kitabisa.cc/images/icons/meta/icons-512.png"
				/>
				<meta name="twitter:label1" content="price" />
				<meta name="twitter:data1" content="IDR10000" />
				<meta name="twitter:label2" content="category" />
				<meta name="twitter:data2" content="Kitabisa.com" />
			</Helmet>
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
