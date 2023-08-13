import { Link } from "react-router-dom";

import { alpha } from "src/style/colors";
import { theme } from "src/style/theme";

import styled from "@emotion/styled";

export const StyledContainer = styled("nav")``;

export const StyledNav = styled("ul")`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${theme.spacings[16]};
  padding: 0 ${theme.spacings[16]};
  position: relative;
  font-size: ${theme.fontSizes.large};
  margin: 0;

  & > li {
    display: inline-flex;
  }

  &::after {
    content: "";
    position: absolute;
    border-bottom: solid 1px ${theme.colors.primary};
    inset: 100% ${theme.spacings[32]} 0;
  }
`;

export const StyledLink = styled(Link)<{ active?: boolean }>`
  text-decoration: none;
  color: ${theme.colors.primary};
  font-family: HighSpirited, cursive;
  padding: ${theme.spacings[16]};
  border-bottom: solid 3px;
  border-color: ${({ active }) =>
    active ? theme.colors.primary : "transparent"};
  margin-bottom: -1px;

  &:hover {
    border-color: ${alpha(theme.colors.primary, 0.5)};
  }
`;
