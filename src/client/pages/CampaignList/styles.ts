import { css } from "@emotion/css";

export const campaignWpSty = css`
	display: flex;
	justify-content: space-between;
	row-gap: 32px;
	flex-wrap: wrap;
	@media (max-width: 720px) {
		padding: 16px;
		flex-direction: column;
	}
`;