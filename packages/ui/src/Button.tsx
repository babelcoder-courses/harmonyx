import { type ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warn"
    | "info"
    | "default";
  align?: "left" | "center" | "right";
}

const Button = ({
  color = "default",
  align = "left",
  children,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  const colorClass = {
    primary: "bg-primary-500",
    secondary: "bg-secondary-500",
    success: "bg-success-500",
    danger: "bg-danger-500",
    warn: "bg-warn-500",
    info: "bg-info-500",
    default: "bg-neutral-500",
  }[color];
  const alignClass = {
    left: "",
    center: "mx-auto",
    right: "ml-auto",
  }[align];

  return (
    <button
      className={twMerge(
        "inline-block rounded px-6 pt-2.5 pb-2 uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none",
        colorClass,
        "block",
        alignClass,
        disabled ? "cursor-not-allowed" : "cursor-pointer",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
