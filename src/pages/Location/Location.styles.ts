import { theme } from "src/style/theme";

import styled from "@emotion/styled";

export const StyledContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const StyledParagraph = styled("p")`
  margin: ${theme.spacings[32]} ${theme.spacings[16]};
  text-align: justify;
`;

export const StyledTitle = styled("h1")`
  font-size: 4em;
  font-family: HighSpirited, cursive;
  margin: 0;
  align-self: center;
  font-weight: 500;
`;

export const StyledLink = styled("a")`
  color: inherit;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledPicturesContainer = styled("div")`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: ${theme.spacings[32]};
  justify-content: center;
`;

export const StyledPic = styled("img")`
  height: 35vh;
  width: 400px;
  object-fit: cover;
  box-shadow: 1px 1px 8px -1px ${theme.colors.primary};
  ${theme.breakpoints.down("sm")} {
    height: auto;
    width: 100%;
  }
`;

export const StyledPlan = styled("iframe")`
  height: 35vh;
  width: 400px;
  box-shadow: 1px 1px 8px -1px ${theme.colors.primary};
  border: none;
  ${theme.breakpoints.down("sm")} {
    height: 300px;
    width: 100%;
  }
`;

export const StyledPlanContainer = styled("div")`
  cursor: zoom-in;
  position: relative;
  display: flex;

  &::after {
    content: "Cliquer pour agrandir";
    position: absolute;
    font-family: sans-serif;
    z-index: 1;
    color: white;
    background-color: black;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    opacity: 0.4;
  }
`;

export const StyledZoomedPlanContainer = styled("div")`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  transition: z-index 1s, background-color 1s;
  cursor: zoom-out;
  user-select: none;

  &.open {
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
export const StyledZoomedPlan = styled("img")`
  position: fixed;
  transition: all 1s;
  height: 0;
  width: 0;
  opacity: 0;
  object-fit: contain;

  div.open > & {
    opacity: 1;
    height: 95vh;
    width: 95vw;
  }
`;
