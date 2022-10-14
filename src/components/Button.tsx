import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import React, { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, asChild }) => {
  //* constants
  const Comp = asChild ? Slot : "button";

  //* render
  return (
    <Comp className={clsx("py-4 px-3 bg-cyan-500 rounded font-semibold font-sans text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white", {})}>
      {children}
    </Comp>
  );
};
