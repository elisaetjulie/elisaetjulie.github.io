import React, { PropsWithChildren, memo } from "react";

import { PropsWithStyles } from "src/types";

import { StyledContainer } from "./BaseLayout.styles";

export interface BaseLayoutProps extends PropsWithStyles {}

const BaseLayout = ({
  className,
  children,
}: PropsWithChildren<BaseLayoutProps>) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default memo(BaseLayout);
