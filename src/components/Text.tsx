import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import React, { ReactNode } from "react";

export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  size = "md",
  children,
  asChild,
  className,
}) => {
  //* constants
  const Comp = asChild ? Slot : "span";

  //* render
  return (
    <Comp
      className={clsx(
        "text-gray-100 font-sans",
        {
          "text-sm": size === "sm",
          "text-md": size === "md",
          "text-lg": size === "lg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
};
