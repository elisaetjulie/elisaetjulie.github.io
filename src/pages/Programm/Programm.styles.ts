import { Link } from "react-router-dom";

import { theme } from "src/style/theme";

import styled from "@emotion/styled";

export const StyledContainer = styled("div")`
  padding: ${theme.spacings[32]} ${theme.spacings[128]};
  gap: ${theme.spacings[32]};
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${theme.breakpoints.down("md")} {
    padding: ${theme.spacings[16]} ${theme.spacings[64]};
  }
  ${theme.breakpoints.down("sm")} {
    padding: ${theme.spacings[16]} 0;
  }
`;

export const StyledTitle = styled("h1")`
  font-size: 4em;
  font-family: HighSpirited, cursive;
  margin: 0;
  align-self: center;
`;

export const StyledSection = styled("section")`
  display: flex;
  align-items: center;
  gap: ${theme.spacings[16]};
`;

export const StyledImage = styled("img")`
  width: 200px;
  height: auto;
  transform: rotate(180deg);
  ${theme.breakpoints.down("sm")} {
    width: 100px;
  }
`;

export const StyledParagraph = styled("p")`
  margin: 0;
  text-align: justify;
`;

export const StyledLink = styled(Link)`
  color: inherit;
`;

export const StyledSeparator = styled("span")`
  border-bottom: solid 1px;
  width: 70%;
  align-self: center;
`;
