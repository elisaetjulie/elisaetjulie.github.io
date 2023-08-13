import React, { memo } from "react";

import { PropsWithStyles } from "src/types";

import {
  StyledContainer,
  StyledParagraph,
  StyledPicturesContainer,
  StyledPic,
  StyledLink,
} from "./Location.styles";

export interface LocationProps extends PropsWithStyles {}

const Location = ({ className }: LocationProps) => {
  return (
    <StyledContainer className={className}>
      <StyledParagraph>
        Après la cérémonie, qui aura lieu à la mairie de Plobannalec-Lesconil,
        nous vous accueillerons à la ferme de Perinaguen :{" "}
        <StyledLink
          href="https://goo.gl/maps/xh1CieqMCeyLjEiR7"
          target="_blank"
        >
          394 Rue de Perinaguen, 29760 Penmarc'h
        </StyledLink>
        . Elle est accessible en voiture à 10 minutes de la mairie, et se trouve
        à 1km de la mer. Un parking sera disponible sur place.
      </StyledParagraph>
      <StyledPicturesContainer>
        <StyledPic src="images/farm.jpeg" />
        <StyledPic src="images/farm2.jpeg" />
        <StyledPic src="images/beach.webp" />
      </StyledPicturesContainer>
    </StyledContainer>
  );
};

export default memo(Location);
