import { theme } from "src/style/theme";

import styled from "@emotion/styled";

export const StyledContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings[16]};
  padding: 0 ${theme.spacings[64]};
  background-image: url(bg.svg);

  font-size: ${theme.fontSizes.normal};
  min-height: 100vh;
`;
