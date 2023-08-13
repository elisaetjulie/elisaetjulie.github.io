import React, { memo } from "react";

import useMediaQuery from "src/hooks/useMediaQuery";
import { theme } from "src/style/theme";
import { PropsWithStyles } from "src/types";

import {
  StyledContainer,
  StyledImage,
  StyledParagraph,
  StyledSection,
  StyledSeparator,
  StyledTitle,
  StyledLink,
} from "./Programm.styles";

export interface ProgrammProps extends PropsWithStyles {}

const Programm = ({ className }: ProgrammProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledContainer className={className}>
      {isMobile && <StyledTitle>Programme</StyledTitle>}
      <StyledSection>
        <StyledImage src="/icons/rings.png" />
        <StyledParagraph>
          La cérémonie civile aura lieu à 15 heure à la mairie de
          Plobannalec-Lesconil qui se trouve au 1 rue de la mairie. L’accès en
          transport en commun est possible mais le covoiturage est conseillé. La
          salle n’étant pas grande il y aura un accès limité à la cérémonie.
        </StyledParagraph>
      </StyledSection>
      <StyledSection>
        <StyledParagraph>
          Après la cérémonie nous nous retrouverons à partir de 16 heure sur le
          lieu de la réception :{" "}
          <StyledLink to="/location"> la ferme de Perinaguen</StyledLink>. Nous
          y ferons la cérémonie laïque et les photos de groupe.
        </StyledParagraph>
        <StyledImage src="icons/camera.png" />
      </StyledSection>
      <StyledSection>
        <StyledImage src="icons/glasses.png" />
        <StyledParagraph>
          A la fin de la cérémonie laïque, les festivités pourront commencer,
          nous vous proposerons un vin d’honneur 100% veggie !
        </StyledParagraph>
      </StyledSection>
      <StyledSection>
        <StyledParagraph>
          Le repas sera servi et la fête continuera jusqu’au bout de la nuit,
          toujours à{" "}
          <StyledLink to="/location">la ferme de Perinaguen</StyledLink>.
        </StyledParagraph>
        <StyledImage src="icons/platter.png" />
      </StyledSection>
      <StyledSeparator />
      <StyledSection>
        <StyledImage src="icons/bretagne.png" />
        <StyledParagraph>
          La fête continue le dimanche ! Nous vous attendons à partir de 11
          heure à la ferme afin de clôturer ce weekend en beauté. Le déjeuner,
          aux saveurs de la Bretagne, sera servi à partir de 13 heure.
        </StyledParagraph>
      </StyledSection>
    </StyledContainer>
  );
};

export default memo(Programm);
