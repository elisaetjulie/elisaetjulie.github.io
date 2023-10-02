import React, { memo } from "react";

import { PropsWithStyles } from "src/types";

import {
  StyledContainer,
  StyledTitle,
  StyledAknowledgements,
} from "./Main.styles";

export interface MainProps extends PropsWithStyles {}

const Main = ({ className }: MainProps) => {
  return (
    <StyledContainer className={className}>
      <StyledTitle>Elisa & Julie</StyledTitle>
      <span>6 - 7 Juillet 2024</span>
      <span>Ferme de Perinaguen - Penmarc’h</span>
      <StyledAknowledgements>
        Merci à Margaux (illustration du port) & Oumar (site internet)
      </StyledAknowledgements>
    </StyledContainer>
  );
};

export default memo(Main);
