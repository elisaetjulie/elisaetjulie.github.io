import { theme } from "src/style/theme";

import styled from "@emotion/styled";

export const StyledContainer = styled("div")``;

export const StyledParagraph = styled("p")`
  margin: ${theme.spacings[32]} ${theme.spacings[16]};
  text-align: justify;
`;

export const StyledLink = styled("a")`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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
`;
