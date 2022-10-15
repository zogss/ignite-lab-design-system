import axios from "axios";
import { Envelope, Lock } from "phosphor-react";
import React, { FormEvent, useCallback, useState } from "react";
import ReactLogo from "../assets/svgs/ReactLogo";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";

export const SignIn: React.FC = () => {
  //* states
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false);

  //* handlers
  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      await axios.post("/sessions", {
        email: "yanlucasbranco@gmail.com",
        password: "12345678",
      });

      console.log("🚀 ~ file: SignIn.tsx ~ line 18 ~ SignIn ~ e", e);
      setIsUserSignedIn(true);
    },
    [isUserSignedIn]
  );

  //* render
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center gap-4">
        <ReactLogo />
        <div className="flex flex-col items-center gap-1">
          <Heading size="lg">Ignite Lab</Heading>
          <Text size="lg" className="text-gray-400">
            Faça login e comece a usar!
          </Text>
        </div>
      </header>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-stretch w-full max-w-[25rem] mt-10"
      >
        {isUserSignedIn && <Text>Login Realizado!</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text size="sm" className="font-semibold">
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text size="sm" className="font-semibold">
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="********"
            />
          </TextInput.Root>
        </label>

        <label
          htmlFor="remember"
          className="flex items-center gap-2 w-fit self-start cursor-pointer"
        >
          <Checkbox id="remember" title="Lembrar de mim"/>
          <Text size="sm" className="text-gray-200">
            Lembrar de mim
          </Text>
        </label>

        <Button
          type="submit"
          className="mt-4"
          title="Entrar na plataforma"
        >
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" asChild>
          <a
            href=""
            className="text-gray-400 underline transition-colors hover:text-gray-200"
          >
            Esqueceu sua senha?
          </a>
        </Text>
        <Text size="sm" asChild>
          <a
            href=""
            className="text-gray-400 underline transition-colors hover:text-gray-200"
          >
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
};
