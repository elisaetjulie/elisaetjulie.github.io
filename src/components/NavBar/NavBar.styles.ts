import { Link } from "react-router-dom";

import { theme } from "src/style/theme";

import styled from "@emotion/styled";

export const StyledContainer = styled("nav")``;

export const StyledNav = styled("ul")`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${theme.spacings[16]};
  padding: ${theme.spacings[16]};
  position: relative;

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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.primary};
`;
