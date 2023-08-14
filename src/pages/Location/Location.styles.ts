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
  max-width: 90vw;
  object-fit: contain;
  box-shadow: 1px 1px 8px -1px ${theme.colors.primary};
  ${theme.breakpoints.down("sm")} {
    height: auto;
    width: 70vw;
  }
`;
