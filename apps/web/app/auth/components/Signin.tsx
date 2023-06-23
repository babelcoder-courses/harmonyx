"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button, FormField } from "ui";
import * as api from "../api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppStore } from "../../store";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormType = z.infer<typeof schema>;

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const setAuth = useAppStore((state) => state.setAuth);
  const router = useRouter();

  const signin: SubmitHandler<FormType> = async (credentials) => {
    const auth = await api.signin(credentials);
    setAuth(auth);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit(signin)} className="mx-auto max-w-lg">
      <h1 className="mb-4 border-b-2 border-blue-100 pb-4 text-center text-2xl">
        Sign In
      </h1>
      <FormField
        type="email"
        id="email"
        label="Email"
        placeholder="byebye@prayuth.com"
        error={errors.email?.message}
        {...register("email")}
      ></FormField>
      <FormField
        type="password"
        id="password"
        label="Password"
        placeholder="Your password"
        error={errors.password?.message}
        {...register("password")}
      ></FormField>
      <div className="flex items-center">
        <Button
          color="primary"
          type="submit"
          align="center"
          disabled={!isValid}
        >
          Create
        </Button>
        <Link href="/auth/sign-up">Do not have an account?</Link>
      </div>
    </form>
  );
};

export default Signin;
