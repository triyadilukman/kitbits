import React from "react";
import App from "client/App";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";
import createEmotionServer from "@emotion/server/create-instance";

import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import fs from "fs";
import { HTML_TEMPLATE_PATH } from "server/configuration";
import { PrerenderData } from "shared/PrerenderedData";
import { ChakraProvider } from "@chakra-ui/react";
import { ICampaign } from "client/context/types";

// import { ServerStyleSheet } from "styled-components";

/**
 * Renders the react App as a html string.
 * @param url The render url. It will be injected in the react router so it can render the corresponding route.
 * @param prerenderedObject An object created in the server that can be accessed in the client side.
 * @returns A html string;
 */
export async function renderReactAsync(
	url: string,
	data?: ICampaign[]
) {
	// read the html template file

	const staticHtmlContent = await fs.promises.readFile(HTML_TEMPLATE_PATH, {
		encoding: "utf-8",
	});

	// create an element to store server side data
	const dataElement = PrerenderData.saveToDom(data);

	// In SSR, using react-router-dom/BrowserRouter will throw an exception.
	// Instead, we use react-router-dom/server/StaticRouter.
	// In the client compilation, we still use BrowserRouter (see: src/client/Index.tsx)

	const WrappedApp = (
		<StaticRouter location={url}>
			<App serverData={data} />
		</StaticRouter>
	);

	/*
        render the react html content and the styled-component style sheet as string.
        without prerendering styled-components, the page will flash a styleless version of it
     */

	const [reactContent, styleTags] = renderToStringWithStyles(WrappedApp);

	// finally combine all parts together

	const renderedHtml = buildHtml(
		staticHtmlContent,
		reactContent,
		styleTags,
		dataElement
	);

	return renderedHtml;
}

function buildHtml(
	templateHtml: string,
	reactHtml: string,
	styleTags: string,
	dataTag: string
) {
	const pattern = /(?<head><head>)|(?<root><div\sid="root">)/g;

	const temp = templateHtml.replace(pattern, (match, ...params: any[]) => {
		const groups = params.pop();

		if (groups.head) return groups.head + styleTags;
		if (groups.root) return dataTag + groups.root + reactHtml;

		return match;
	});

	return temp;
}

function renderToStringWithStyles(component: JSX.Element) {
	const key = "css";
	const { extractCritical } = createEmotionServer(cache);
	const element = (
		<ChakraProvider>
			<CacheProvider value={cache}>{component}</CacheProvider>
		</ChakraProvider>
	);

	try {
		const { html, css, ids } = extractCritical(renderToString(element));
		const emotionStyles = `<style data-emotion="${key} ${ids.join(
			" "
		)}">${css}</style>`;

		return [html, emotionStyles];
	} finally {
		// sheet.seal();
	}
}
