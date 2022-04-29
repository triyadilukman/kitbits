import { css } from "@emotion/css";

export const headerSty = css`
	padding: 32px 0;
	@media (max-width: 720px) {
		padding: 16px;
		align-items: center;
	}
`;

export const imgSty = css`
	width: 120px;
	height: 48px;
	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;
`;

export const sorterSty = css`
  width: 300px;
  @media (max-width: 480px) {
    width: 200px;
	}
`
