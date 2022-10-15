import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import React from "react";

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  //* render
  return (
    <CheckboxPrimitive.Root
      className="w-6 h-6 p-[.125rem] bg-gray-800 rounded"
      {...props}
    >
      <CheckboxPrimitive.Indicator className="" asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};
