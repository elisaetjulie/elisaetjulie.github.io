import React, { memo } from "react";

import { PropsWithStyles } from "src/types";

import { StyledContainer } from "./Hosting.styles";

export interface HostingProps extends PropsWithStyles {}

const Hosting = ({ className }: HostingProps) => {
  return (
    <StyledContainer className={className}>
      <i>
        Voici des possibilités de logements autour de la ferme de Perinaguen pour le week-end. Attention sur la période estivale les locations de mobil-homes et de gîtes se font le plus souvent du samedi au samedi. N'hésitez pas à profitez de l'occasion pour visiter le pays bigouden !

Campings à Penmarc’h :
        - Flower camping cap finistère
        - Camping le grand bleu
        - Village La plage
        - Camping municipal de Toul Ar Ster 

Gîtes à Penmarc’h :
        - Gîte Chez mamie, 52 Rue de Gouesnach
        - Le Penty, 443 Rue de Kergaouen
        - Grand Gîte Fontaine, 31 Prat Gouzien
        - Maison de vacances, impasse de Kerfres
        - La Reverdière, 667 Rue Yvon Lucas
        - Gîte de Rumigou, Rue de Rumigou

Hôtels et chambres d’hôtes :
        - Chambres d’hôtes La Dunette, 228 Rue de Méjou Braz, 29760 Penmarc'h
        - Chambre Émeraude/Brown, 391 Rue de l'École de Voile, 29760 Penmarc'h
        - Gîte naturel Green 29, 865 Rue de l'École de Voile, 29760 Penmarc'h
        - Comme à la breizhon, 201 Rue Duguesclin, 29760 Penmarc'h
        - Hôtel la Ferme du Relais, 3-4 Ham. de Pendreff, 29120 Plomeur
        - Hôtel le Sterenn, 432 Rue de la Joie, 29760 Penmarc'h
        - Chambres d’hôtes Le Trymen, 127 Rue du Port Saint-Guénolé, 29760 Penmarc'h
        - Hôtel les Ondines, 90 Rue Pasteur, 29760 Penmarc'h

      </i>
    </StyledContainer>
  );
};

export default memo(Hosting);
