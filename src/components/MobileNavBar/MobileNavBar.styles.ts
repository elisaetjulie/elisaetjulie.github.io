import { Link } from "react-router-dom";

import { theme } from "src/style/theme";

import styled from "@emotion/styled";

export const StyledContainer = styled("nav")`
  position: fixed;
  bottom: 0;
  padding: ${theme.spacings[16]};
  align-self: center;
  border-radius: 16px 16px 0 0;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 3px -1px ${theme.colors.primary};
`;

export const StyledNav = styled("ul")`
  display: flex;
  align-items: center;
  gap: ${theme.spacings[8]};
  padding: 0;
  margin: 0;
  & > li {
    display: inline-flex;
  }
`;

export const StyledLink = styled(Link)<{ active?: boolean }>`
  text-decoration: none;
  color: ${theme.colors.primary};
  padding: ${theme.spacings[4]};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;
