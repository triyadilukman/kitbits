import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CacheProvider } from "@emotion/react";
import { ChakraProvider } from "@chakra-ui/react";
import { PrerenderData } from "shared/PrerenderedData";

import { cache } from "@emotion/css";
import { IServerDataContextType } from "./context/types";

import App from "./App";

function WrappedApp(): JSX.Element {
	const prerenderData =
		PrerenderData.readFromDom<IServerDataContextType>(true);
	const campaignsPrerender = prerenderData?.state?.data || [];

	return (
		<BrowserRouter>
			<ChakraProvider>
				<CacheProvider value={cache}>
					<App serverData={campaignsPrerender} />
				</CacheProvider>
			</ChakraProvider>
		</BrowserRouter>
	);
}

hydrate(<WrappedApp />, document.getElementById("root"));
