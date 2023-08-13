import React, { memo } from "react";

import { PropsWithStyles } from "src/types";

import { StyledContainer } from "./Pictures.styles";

export interface PicturesProps extends PropsWithStyles {}

const Pictures = ({ className }: PicturesProps) => {
  return (
    <StyledContainer className={className}>
      <i>
        Après le mariage nous partagerons ici le lien pour accéder aux photos
        prises par la photographe et pour que vous puissiez également partager
        les vôtres.
      </i>
    </StyledContainer>
  );
};

export default memo(Pictures);
