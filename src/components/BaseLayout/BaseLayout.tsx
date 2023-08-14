import React, { PropsWithChildren, memo } from "react";
import { useLocation } from "react-router-dom";

import { PropsWithStyles } from "src/types";

import { StyledContainer } from "./BaseLayout.styles";

export interface BaseLayoutProps extends PropsWithStyles {}

const BaseLayout = ({
  className,
  children,
}: PropsWithChildren<BaseLayoutProps>) => {
  const location = useLocation();

  return (
    <StyledContainer className={className} lightBG={location.pathname !== "/"}>
      {children}
    </StyledContainer>
  );
};

export default memo(BaseLayout);
