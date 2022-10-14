import { Slot } from "@radix-ui/react-slot";
import React, { InputHTMLAttributes, ReactNode } from "react";

//* TextInput.Root
export interface TextInputRootProps {
  children: ReactNode;
}
const TextInputRoot: React.FC<TextInputRootProps> = (props) => {
  return (
    <div
      className="flex items-center gap-3 h-12
    py-4 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-300"
    >
      {props.children}
    </div>
  );
};

TextInputRoot.displayName = "TextInput.Root";

//* TextInput.Icon
export interface TextInputIconProps {
  children: ReactNode;
}
const TextInputIcon: React.FC<TextInputIconProps> = (props) => {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
};

TextInputIcon.displayName = "TextInput.Icon";

//* TextInput.Input
export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}
const TextInputInput: React.FC<TextInputInputProps> = (props) => {
  return (
    <input
      {...props}
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
    />
  );
};

TextInputInput.displayName = "TextInput.Input";

//* TextInput
export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
};
