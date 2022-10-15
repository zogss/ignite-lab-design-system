import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  asChild,
  className,
  ...props
}) => {
  //* constants
  const Comp = asChild ? Slot : "button";

  //* render
  return (
    <Comp
      className={clsx(
        "py-3 px-4 bg-cyan-500 rounded font-semibold font-sans text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
