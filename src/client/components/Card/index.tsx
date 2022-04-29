import React from "react";
import { Box, Flex, Text, Progress } from "@chakra-ui/react";

import toIDR from "client/utils/toIDR";
import { cardSty, imgBoxSty, contentWpSty } from "./styles";
/**
 * @param {ReactNode} children
 * @returns {ReactNode}
 */

interface Props {
	imgUrl: string;
	name: string;
	received: number;
	day: number;
  percent: number;
}

const Card: React.FC<Props> = ({ imgUrl, name, received, day, percent }) => {
	return (
		<Box className={cardSty}>
			<Box className={imgBoxSty(imgUrl)} />
			<Flex className={contentWpSty}>
				<Text className="text-bold">{name}</Text>
				<Box>
					<Progress colorScheme="pink" size="sm" value={percent * 100} />
				</Box>
				<Box>
					<Flex justifyContent="space-between" marginTop="32px">
						<Text className="text-bold">Terkumpul</Text>
						<Text className="text-bold">Sisa Hari</Text>
					</Flex>
					<Flex justifyContent="space-between">
						<Text className="text-bold" color="#E0E0E0">
							{toIDR(received)}
						</Text>
						<Text className="text-bold" color="#E0E0E0">
							{day ? day : "Selesai"}
						</Text>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default Card;
