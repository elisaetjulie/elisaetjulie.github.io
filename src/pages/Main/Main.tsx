import React, { memo } from "react";

import { PropsWithStyles } from "src/types";

import { StyledContainer, StyledTitle } from "./Main.styles";

export interface MainProps extends PropsWithStyles {}

const Main = ({ className }: MainProps) => {
  return (
    <StyledContainer className={className}>
      <StyledTitle>Elisa & Julie</StyledTitle>
      <span>6 - 7 Juillet 2024</span>
      <span>Ferme de Perinaguen - Penmarc’h</span>
    </StyledContainer>
  );
};

export default memo(Main);
