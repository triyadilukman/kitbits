import React from "react";
import { Box, Img } from "@chakra-ui/react";

import { imgSty } from "./styles";
import logoImg from "./assets/kitabisa-full.png";

const Logo: React.FC = () => {
	return (
		<Box className={imgSty}>
			<Img src={logoImg} alt="Kitabisa Logo" />
		</Box>
	);
};

export default Logo;
