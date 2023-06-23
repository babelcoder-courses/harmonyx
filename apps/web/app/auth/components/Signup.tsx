"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button, FormField } from "ui";
import { signup } from "../api";
import Link from "next/link";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(signup)} className="mx-auto max-w-lg">
      <h1 className="mb-4 border-b-2 border-blue-100 pb-4 text-center text-2xl">
        Sign Up
      </h1>
      <FormField
        id="name"
        label="Name"
        placeholder="Prayuth ByeBye"
        error={errors.name?.message}
        {...register("name")}
      ></FormField>
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
        <Link href="/auth/sign-in">Already have an account?</Link>
      </div>
    </form>
  );
};

export default Signup;
