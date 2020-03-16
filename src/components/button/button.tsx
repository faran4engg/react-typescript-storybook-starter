import React, { MouseEvent } from "react";

import "./button.css";

export interface ButtonProps {
  /**optionally add an ID to the element */
  id?: string;
  /** Button Type: submit or button */
  type?: "submit" | "button";
  /** Button Content: Subcomponents or text */
  children: React.ReactNode;
  /** Display As: primary, secondary, ghost, or plain text (for additional styling) */
  as: "primary" | "secondary" | "ghost" | "text";
  /** Function to run when the button is clicked */
  onClick: (event: MouseEvent) => void;
  /** Button is disabled: true or false */
  disabled?: boolean;
  /** Additional CSS classes to apply */
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  as = "primary",
  onClick,
  disabled = false,
  className = "",
  id = ""
}: ButtonProps) => {
  const classes = `button button-${as} ${className}`.trim();
  return (
    <>
      <button
        id={id}
        type={type}
        onClick={onClick}
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};
