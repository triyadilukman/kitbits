import React from "react";

import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import Sorter from "./Sorter";

import { headerSty } from "./styles";

export default function Header() {
	return (
		<Flex className={headerSty} justifyContent="space-between">
			<Logo />
			<Sorter />
		</Flex>
	);
}
