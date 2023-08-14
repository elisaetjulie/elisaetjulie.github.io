import { theme } from "src/style/theme";

import styled from "@emotion/styled";

export const StyledContainer = styled("div")`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: ${theme.spacings[16]};
  font-size: ${theme.fontSizes.large};
  padding: 0 ${theme.spacings[16]} ${theme.spacings[64]};
  ${theme.breakpoints.down("md")} {
    justify-content: center;
  }
  ${theme.breakpoints.down("sm")} {
    justify-content: flex-end;
  }
`;

export const StyledTitle = styled("h1")`
  font-size: ${theme.fontSizes.title};
  margin: 0;
  margin-bottom: ${theme.spacings[64]};
  font-family: HighSpirited, cursive;
  ${theme.breakpoints.down("sm")} {
    font-size: 6em;
  }
`;
