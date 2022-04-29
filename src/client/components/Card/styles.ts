import { css } from "@emotion/css";

export const cardSty = css`
  width: auto;
  height: auto;
  border-radius: 6px;
  overflow: hidden;
  flex: 0 1 calc(33% - 1em);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const imgBoxSty = (image: string) => css`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 200px;
`;

export const contentWpSty = css`
  flex-direction: column;
  row-gap: 32px;
  padding: 16px;
  .text-bold {
    font-weight: bold;
    font-size: 16px;
  }
`