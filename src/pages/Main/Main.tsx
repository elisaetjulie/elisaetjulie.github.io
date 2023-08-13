import React, { memo } from "react";

import { PropsWithStyles } from "src/types";

import { StyledContainer } from "./Main.styles";

export interface MainProps extends PropsWithStyles {}

const Main = ({ className }: MainProps) => {
  return (
    <StyledContainer className={className}>Main Component</StyledContainer>
  );
};

export default memo(Main);
