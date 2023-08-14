import React, { memo } from "react";

import useMediaQuery from "src/hooks/useMediaQuery";
import { theme } from "src/style/theme";
import { PropsWithStyles } from "src/types";

import {
  StyledContainer,
  StyledParagraph,
  StyledPicturesContainer,
  StyledPic,
  StyledLink,
  StyledTitle,
} from "./Location.styles";

export interface LocationProps extends PropsWithStyles {}

const Location = ({ className }: LocationProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledContainer className={className}>
      {isMobile && <StyledTitle>Lieu</StyledTitle>}
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
        à 1km de la mer. Un parking sera mis à disposition sur place.
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
