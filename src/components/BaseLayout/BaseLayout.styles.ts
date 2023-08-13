import { theme } from "src/style/theme";

import styled from "@emotion/styled";

export const StyledContainer = styled("div")<{
  lightBG?: boolean;
  noBG?: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings[16]};
  padding: 0 ${theme.spacings[64]} ${theme.spacings[32]};
  color: ${theme.colors.primary};
  min-height: 100vh;

  ${({ noBG, lightBG }) =>
    noBG
      ? ""
      : `
  &::before {
    content: "";
    position: fixed;
    inset: 0;
    align-self: center;
    z-index: -1;
    background-image: url(bg.png);
    background-size: auto 80vh;
    background-repeat: no-repeat;
    background-position: bottom ${theme.spacings[16]} right
      ${theme.spacings[16]};
    opacity: ${lightBG ? 0.15 : 0.25};
  }`}

  width: ${theme.breakpoints.xl};
  font-size: 45px;

  ${theme.breakpoints.down("xl")} {
    width: ${theme.breakpoints.lg};
    font-size: 27px;
  }
  ${theme.breakpoints.down("lg")} {
    width: ${theme.breakpoints.md};
    font-size: 23px;
    padding: 0 ${theme.spacings[32]} ${theme.spacings[16]};
  }
  ${theme.breakpoints.down("md")} {
    width: ${theme.breakpoints.sm};
    font-size: 20px;
    padding: ${theme.spacings[32]} ${theme.spacings[16]};
  }
  ${theme.breakpoints.down("sm")} {
    width: ${theme.breakpoints.xs};
    font-size: 15px;
    padding: ${theme.spacings[32]} ${theme.spacings[16]} ${theme.spacings[64]};
  }
  margin: auto;
`;
