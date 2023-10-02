import React, { memo } from "react";
import { useLocation } from "react-router-dom";

import { routing } from "src/config/routing";
import { PropsWithStyles } from "src/types";

import { StyledContainer, StyledLink, StyledNav } from "./MobileNavBar.styles";

export interface MobileNavBarProps extends PropsWithStyles {}

const MobileNavBar = ({ className }: MobileNavBarProps) => {
  const location = useLocation();

  return (
    <StyledContainer className={className}>
      <StyledNav>
        {routing.map(({ path, label }) => (
          <li key={path}>
            <StyledLink to={path} active={path === location.pathname}>
              {label}
            </StyledLink>
          </li>
        ))}
      </StyledNav>
    </StyledContainer>
  );
};

export default memo(MobileNavBar);
