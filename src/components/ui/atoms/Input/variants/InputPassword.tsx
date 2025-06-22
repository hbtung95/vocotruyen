import React, { useState } from "react";
import { Input, InputProps } from "../Input";
import { Icon } from "../../Icon";

/**
 * InputPassword – Input cho password, có icon show/hide
 */
const InputPassword: React.FC<Omit<InputProps, "type" | "rightIcon">> = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Input
      {...props}
      type={show ? "text" : "password"}
      rightIcon={
        <span onClick={() => setShow((v) => !v)} tabIndex={0} role="button" aria-label={show ? "Ẩn mật khẩu" : "Hiện mật khẩu"}>
          <Icon name={show ? "eyeOff" : "eye"} />
        </span>
      }
    />
  );
};
export default InputPassword;
