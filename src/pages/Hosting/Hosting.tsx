import React, { memo } from "react";

import { PropsWithStyles } from "src/types";

import { StyledContainer } from "./Hosting.styles";

export interface HostingProps extends PropsWithStyles {}

const Hosting = ({ className }: HostingProps) => {
  return (
    <StyledContainer className={className}>
      <i>
        Voici des possibilités de logements autour de la ferme de Perinaguen pour le week-end. Attention sur la période estivale les locations de mobil-homes et de gîtes se font le plus souvent du samedi au samedi. N'hésitez pas à profiter de l'occasion pour visiter le pays bigouden.

<p> Campings à Penmarc’h : </p>
        <ul>
          <li>Flower camping cap finistère</li>
          <li>Camping le grand bleu</li>
          <li>Village La plage</li>
          <li> Camping municipal de Toul Ar Ster </li>
        </ul>

<p>Gîtes :</p>
        <ul>
          <li>Gîte Chez mamie, 52 Rue de Gouesnach, 29760 Penmarc'h</li>
          <li>Le Penty, 443 Rue de Kergaouen, 29760 Penmarc'h</li>
          <li>Grand Gîte Fontaine, 31 Prat Gouzien, 29760 Penmarc'h</li>
          <li>Maison de vacances, impasse de Kerfres, 29760 Penmarc'h</li>
          <li>La Reverdière, 667 Rue Yvon Lucas, 29760 Penmarc'h</li>
          <li>Gîte de Rumigou, Rue de Rumigou, 29760 Penmarc'h</li>        
        </ul>

<p>Hôtels et chambres d’hôtes :</p>
        <ul>
          <li>Chambres d’hôtes La Dunette, 228 Rue de Méjou Braz, 29760 Penmarc'h</li>
          <li>Chambre Émeraude/Brown, 391 Rue de l'École de Voile, 29760 Penmarc'h</li>
          <li>Gîte naturel Green 29, 865 Rue de l'École de Voile, 29760 Penmarc'h</li>
          <li>Comme à la breizhon, 201 Rue Duguesclin, 29760 Penmarc'h</li>
          <li>Hôtel la Ferme du Relais, 3-4 Ham. de Pendreff, 29120 Plomeur</li>
          <li>Hôtel le Sterenn, 432 Rue de la Joie, 29760 Penmarc'h</li>
          <li>Chambres d’hôtes Le Trymen, 127 Rue du Port Saint-Guénolé, 29760 Penmarc'h</li>
          <li>Hôtel les Ondines, 90 Rue Pasteur, 29760 Penmarc'h</li>
        </ul>
      </i>
    </StyledContainer>
  );
};

export default memo(Hosting);
