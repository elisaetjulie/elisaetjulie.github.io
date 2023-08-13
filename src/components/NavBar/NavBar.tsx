import React, { memo } from "react";

import { routing } from "src/config/routing";
import { PropsWithStyles } from "src/types";

import { StyledNav, StyledContainer, StyledLink } from "./NavBar.styles";

export interface NavBarProps extends PropsWithStyles {}

const NavBar = ({ className }: NavBarProps) => {
  return (
    <StyledContainer className={className}>
      <StyledNav>
        {routing.map(({ path, label }) => (
          <li key={path}>
            <StyledLink to={path}>{label}</StyledLink>
          </li>
        ))}
      </StyledNav>
    </StyledContainer>
  );
};

export default memo(NavBar);
