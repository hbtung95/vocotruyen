import React from "react";
import { Tag, TagProps } from "../Tag";

/**
 * TagClosable – Tag có thể xoá (closable)
 */
const TagClosable: React.FC<Omit<TagProps, "closable">> = (props) => (
  <Tag {...props} closable />
);

export default TagClosable;
