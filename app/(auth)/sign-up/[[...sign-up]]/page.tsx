"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="min-h-screen grid w-full items-center bg-zinc-900 px-4 font-mono text-sm text-white">
      <SignUp.Root>
        <SignUp.Step
          name="start"
          className="mx-auto w-full sm:w-96 space-y-6 bg-zinc-800 px-4 py-8 border-4 border-black shadow-[8px_8px_0_0_#000]"
        >
          <header className="text-center flex flex-col items-center">
            <Image src="/logo.png" width={40} height={40} alt="logo" />

            <h1 className="mt-3 text-base font-bold tracking-wide text-yellow-400 uppercase">
              Create Account
            </h1>
          </header>

          <Clerk.GlobalError className="block text-sm text-red-500" />

          <div className="space-y-4">
            <Clerk.Field name="emailAddress" className="space-y-1">
              <Clerk.Label className="font-bold text-yellow-400 uppercase">
                Email
              </Clerk.Label>
              <Clerk.Input
                type="email"
                required
                className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
              />
              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>

            <Clerk.Field name="password" className="space-y-1">
              <Clerk.Label className="font-bold text-yellow-400 uppercase">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
              />
              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>
          </div>

          <SignUp.Action
            submit
            className="w-full px-4 py-2 bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none text-black font-bold uppercase"
          >
            Sign Up
          </SignUp.Action>

          <p className="text-center text-xs text-yellow-400">
            Already have an account?{" "}
            <Clerk.Link
              navigate="sign-in"
              className="font-bold underline underline-offset-2 hover:text-yellow-200"
            >
              Sign in
            </Clerk.Link>
          </p>
        </SignUp.Step>

        {/* Verification Step */}
        <SignUp.Step
          name="verifications"
          className="mx-auto w-full sm:w-96 space-y-6 bg-zinc-800 px-4 py-8 border-4 border-black shadow-[8px_8px_0_0_#000]"
        >
          <header className="text-center">
            <h1 className="mt-3 text-base font-bold tracking-wide text-yellow-400 uppercase">
              Verify Email Code
            </h1>
          </header>

          <Clerk.GlobalError className="block text-sm text-red-500" />
          <SignUp.Strategy name="email_code">
            <Clerk.Field name="code" className="space-y-1">
              <Clerk.Label className="font-bold text-yellow-400 uppercase">
                Email Code
              </Clerk.Label>
              <Clerk.Input
                type="otp"
                required
                className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
              />
              <Clerk.FieldError className="text-sm text-red-500" />
            </Clerk.Field>
            <SignUp.Action
              submit
              className="w-full px-4 py-2 bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none text-black font-bold uppercase"
            >
              Verify
            </SignUp.Action>
          </SignUp.Strategy>

          <p className="text-center text-xs text-yellow-400">
            Already have an account?{" "}
            <Clerk.Link
              navigate="sign-in"
              className="font-bold underline underline-offset-2 hover:text-yellow-200"
            >
              Sign in
            </Clerk.Link>
          </p>
        </SignUp.Step>

        {/* Continue Registration Step */}
        <SignUp.Step
          name="continue"
          className="mx-auto w-full sm:w-96 space-y-6 bg-zinc-800 px-4 py-8 border-4 border-black shadow-[8px_8px_0_0_#000]"
        >
          <header className="text-center">
            <h1 className="mt-3 text-base font-bold tracking-wide text-yellow-400 uppercase">
              Continue Registration
            </h1>
          </header>

          <Clerk.GlobalError className="block text-sm text-red-500" />
          <Clerk.Field name="username" className="space-y-1">
            <Clerk.Label className="font-bold text-yellow-400 uppercase">
              Username
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="w-full px-3 py-2 bg-zinc-900 border-2 border-black shadow-[3px_3px_0_0_#000] outline-none focus:border-yellow-400 text-white"
            />
            <Clerk.FieldError className="text-sm text-red-500" />
          </Clerk.Field>
          <SignUp.Action
            submit
            className="w-full px-4 py-2 bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] active:translate-y-[2px] active:shadow-none text-black font-bold uppercase"
          >
            Continue
          </SignUp.Action>

          <p className="text-center text-xs text-yellow-400">
            Already have an account?{" "}
            <Clerk.Link
              navigate="sign-in"
              className="font-bold underline underline-offset-2 hover:text-yellow-200"
            >
              Sign in
            </Clerk.Link>
          </p>
        </SignUp.Step>
      </SignUp.Root>
    </div>
  );
}
