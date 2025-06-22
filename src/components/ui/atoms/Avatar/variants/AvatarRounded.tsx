import React from "react";
import { Avatar, AvatarProps } from "../Avatar.types";

/**
 * AvatarRounded – Avatar bo góc lớn (vuông bo thay vì full tròn)
 */
export const AvatarRounded: React.FC<AvatarProps> = (props) => (
  <span className="inline-block rounded-xl overflow-hidden">
    <Avatar {...props} />
  </span>
);

export default AvatarRounded;
