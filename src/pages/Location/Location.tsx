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
        Notre mariage aura lieu à la ferme de Perinaguen :{" "}
        <StyledLink
          href="https://goo.gl/maps/xh1CieqMCeyLjEiR7"
          target="_blank"
        >
          394 Rue de Perinaguen, 29760 Penmarc'h
        </StyledLink>
        . Cette ancienne ferme typique du pays Bigouden se trouve à un kilomètre de la mer. Si vous venez en voiture, elle est à dix minutes de la mairie. Un parking sera mis à disposition sur place, comme indiqué sur le plan d'accès ci-dessous. Un accès en bus est également possible, avec le 56A depuis la gare SNCF de Quimper. Les arrêts Gouesnach et Kergaouen se trouvent à moins de dix minutes à pied de la ferme. Il faudra compter environ une heure pour ce trajet en bus. Nous vous conseillons cependant de covoiturer en utilisant la 
        <StyledLink
          href="https://www.covievent.org/covoiturage/mariage-a-la-ferme-de-perinaguen/785a9f8f9dafaefbe014ab1bc959c499"
          target="_blank"
        >
          plateforme dédiée
        </StyledLink>.
      </StyledParagraph>
      <StyledPicturesContainer>
        <StyledPic src="images/farm.jpeg" />
        <StyledPic src="images/farm2.jpeg" />
        <StyledPic src="images/beach.webp" />
        <StyledPic src="images/plan.png" />
      </StyledPicturesContainer>
    </StyledContainer>
  );
};

export default memo(Location);
