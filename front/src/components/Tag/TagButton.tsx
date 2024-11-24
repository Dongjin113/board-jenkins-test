import React from "react";
import { Tag, TagBox } from "./TagButton.style";

interface TagButtonProps {
  city: string;
  requestRegionCamping: (region) => void;
}

export default function TagButton({
  city,
  requestRegionCamping,
}: TagButtonProps) {
  return (
    <div>
      <TagBox>
        <Tag onClick={() => requestRegionCamping(city)}>{city}</Tag>
      </TagBox>
    </div>
  );
}
