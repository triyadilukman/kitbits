import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";

import App from "./App";

function WrappedApp(): JSX.Element {
	return (
		<BrowserRouter>
			<ChakraProvider>
				<CacheProvider value={cache}>
					<App />
				</CacheProvider>
			</ChakraProvider>
		</BrowserRouter>
	);
}

hydrate(<WrappedApp />, document.getElementById("root"));
