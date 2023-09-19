import { theme } from "src/style/theme";

import styled from "@emotion/styled";

export const StyledContainer = styled("div")`
  padding: ${theme.spacings[64]} ${theme.spacings[32]};
`;

export const StyledList = styled("ul")`
  list-style-type: none;
  & > li {
    text-indent: -0.5em;
    &::before {
      content: "-";
      margin-right: 0.8em;
    }
  }
`;
