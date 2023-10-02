import { memo } from "react";

import useMediaQuery from "src/hooks/useMediaQuery";
import { theme } from "src/style/theme";
import { PropsWithStyles } from "src/types";

import {
  StyledContainer,
  StyledLink,
  StyledParagraph,
  StyledPic,
  StyledPicturesContainer,
  StyledPlan,
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
        . Cette ancienne ferme typique du pays Bigouden se trouve à un kilomètre
        de la mer. Si vous venez en voiture, elle est à dix minutes de la
        mairie. Un parking sera mis à disposition sur place, comme indiqué sur
        le plan d'accès ci-dessous. Un accès en bus est également possible, avec
        le 56A depuis la gare SNCF de Quimper. Les arrêts Gouesnach et Kergaouen
        se trouvent à moins de dix minutes à pied de la ferme. Il faudra compter
        environ une heure pour ce trajet en bus. Nous vous conseillons cependant
        de covoiturer en utilisant la{" "}
        <StyledLink
          href="https://www.covievent.org/covoiturage/mariage-a-la-ferme-de-perinaguen/785a9f8f9dafaefbe014ab1bc959c499"
          target="_blank"
        >
          plateforme dédiée
        </StyledLink>
        .
      </StyledParagraph>
      <StyledPicturesContainer>
        <StyledPic src="images/farm.jpeg" />
        <StyledPic src="images/farm2.jpeg" />
        <StyledPic src="images/beach.webp" />
        <StyledPlan
          src="https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d2665.2187855117418!2d-4.324627573611318!3d47.81686857120995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e0!4m3!3m2!1d47.8186791!2d-4.3196487!4m4!2s47.816102%2C%20-4.321526!3m2!1d47.816102!2d-4.3215259999999995!5e1!3m2!1sfr!2sfr!4v1696273256792!5m2!1sfr!2sfr"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </StyledPicturesContainer>
    </StyledContainer>
  );
};

export default memo(Location);
