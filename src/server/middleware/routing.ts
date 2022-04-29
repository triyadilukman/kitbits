import { Express, response } from "express";
import fetch from "node-fetch";
import { renderReactAsync } from "server/ssr/renderer";

import { CAMPAIGN_API } from "./constant";

async function getCampaign() {
	try {
		const getCampaign = await fetch(CAMPAIGN_API, { method: "GET" });
		const apiResponseJson = await getCampaign.json();

		return apiResponseJson;
	} catch (error) {
		return error;
	}
}

/** Defines the server routings. */
export function useRouting(app: Express) {
	app.get("/backend/get-campaign", async (_, res) => {
		try {
			const data = await getCampaign();
			res.status(200).contentType("application/json").send(data);
		} catch (error) {
			res.status(500).contentType("application/json").send(error);
		}
	});

	app.get("/", async (req, res) => {
		try {
			const campaigns = await getCampaign();
			const html = await renderReactAsync(
				req.url,
				// @ts-ignore
				campaigns?.data
			);
			return res.status(200).contentType("text/html").send(html);
		} catch(e) {
			return res.status(500).send("Internal server error");
		}
	});

	/**
	 * put other routes here like:
	 *
	 * app.post("/backend/post-api", (req, res) => {
	 *
	 *     ...stuff
	 *
	 * })
	 *
	 */
}
