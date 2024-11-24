import React, { useEffect } from "react";
import {
  TagBoxes,
  TagContainer,
  TagContent,
  TagLine,
  TagLineContainer,
} from "./SelectTag.style";
import TagButton from "../Tag/TagButton";

interface SelectTagProps {
  cityRows: [];
  isMenuFixed: boolean;
  requestRegionCamping: (region: string) => void;
}

function SelectTag({
  cityRows,
  isMenuFixed,
  requestRegionCamping,
}: SelectTagProps) {
  return (
    <TagContainer isMenuFixed={isMenuFixed}>
      <TagBoxes />
      <TagLineContainer isMenuFixed={isMenuFixed}>
        {cityRows.map((row, rowIndex) => (
          <TagLine key={rowIndex}>
            {row.map((cityName, index) => (
              <TagButton
                city={cityName}
                key={index}
                requestRegionCamping={requestRegionCamping}
              />
            ))}
          </TagLine>
        ))}
        {!isMenuFixed && (
          <TagContent>선택한 지역 정보가 표시됩니다.</TagContent>
        )}
      </TagLineContainer>
    </TagContainer>
  );
}

export default SelectTag;
