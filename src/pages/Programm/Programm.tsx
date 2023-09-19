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
          Les festivités débuteront par la cérémonie civile ! Elle aura lieu à
          15 heure à la mairie de Plobannalec-Lesconil qui se trouve au{" "}
          <StyledLink
            to="https://goo.gl/maps/3pqTB8UEsL55PR7D8"
            target="_blank"
          >
            1 rue de la mairie
          </StyledLink>
          . L’accès en transport en commun est possible par le bus 56A depuis la
          gare de Quimper, mais le covoiturage est conseillé (vous pouvez
          utiliser la{" "}
          <StyledLink
            to="https://www.covievent.org/covoiturage/mariage-a-la-ferme-de-perinaguen/785a9f8f9dafaefbe014ab1bc959c499"
            target="_blank"
          >
            plateforme
          </StyledLink>{" "}
          de covoiturage dédiée à l'évènement).
        </StyledParagraph>
      </StyledSection>
      <StyledSection>
        <StyledParagraph>
          Après la cérémonie nous nous retrouverons à partir de 16 heure sur le
          lieu de la réception :{" "}
          <StyledLink to="/location"> la ferme de Perinaguen</StyledLink>, où se
          déroulera l'ensemble du week-end.
        </StyledParagraph>
        <StyledImage src="icons/camera.png" />
      </StyledSection>
      <StyledSection>
        <StyledImage src="icons/glasses.png" />
        <StyledParagraph>
          La soirée débutera avec un vin d'honneur. Vous vous en doutez
          certainement, nous ferons honneur à la cuisine végétarienne pour
          l'ensemble des repas. Si vous avez des allergies alimentaires,
          n'oubliez pas de les transmettre.
        </StyledParagraph>
      </StyledSection>
      <StyledSection>
        <StyledParagraph>
          Enfin, soyez bien reposés, car après le dîner la soirée continuera
          jusqu'au bout de la nuit !
        </StyledParagraph>
        <StyledImage src="icons/platter.png" />
      </StyledSection>
      <StyledSeparator />
      <StyledSection>
        <StyledImage src="icons/bretagne.png" />
        <StyledParagraph>
          La fête se poursuivra le dimanche ! Nous vous attendrons à partir de
          11 heure à la ferme afin de clôturer ce weekend en beauté. Le
          déjeuner, aux saveurs de la Bretagne, sera servi à partir de 13 heure.
        </StyledParagraph>
      </StyledSection>
    </StyledContainer>
  );
};

export default memo(Programm);
