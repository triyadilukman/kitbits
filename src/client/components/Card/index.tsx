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
	const onImageError = (e: any) => {
		setTimeout(() => {
			e.target.src = 'http://www.fpoimg.com/634x357';
		}, 300);
	}
	return (
		<Box className={cardSty}>
			<Box className={imgBoxSty}>
				<img src={imgUrl} onError={onImageError} />
			</Box>
			<Flex className={contentWpSty}>
				<Text className="text-bold" height="48px">
					{name}
				</Text>
				<Box>
					<Progress
						colorScheme="pink"
						size="sm"
						value={percent * 100}
					/>
				</Box>
				<Box>
					<Flex justifyContent="space-between" marginTop="32px">
						<Text className="text-bold">Terkumpul</Text>
						<Text className="text-bold">Sisa Hari</Text>
					</Flex>
					<Flex justifyContent="space-between">
						<Text className="text-bold" color="#13a8e5">
							{toIDR(received)}
						</Text>
						<Text className="text-bold" color={day ? "#d53f8c" : "#737373"}>
							{day ? `${day} Hari` : "Selesai"}
						</Text>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
};

export default Card;
