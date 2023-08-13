import React, { memo } from "react";

import { PropsWithStyles } from "src/types";

import { StyledContainer } from "./Hosting.styles";

export interface HostingProps extends PropsWithStyles {}

const Hosting = ({ className }: HostingProps) => {
  return (
    <StyledContainer className={className}>
      <i>
        Nous indiquerons sur cette page des informations sur les logements
        disponibles à proximité du lieu du mariage. N’hésitez pas à profiter de
        cette occasion pour découvrir le pays Bigouden !
      </i>
    </StyledContainer>
  );
};

export default memo(Hosting);
