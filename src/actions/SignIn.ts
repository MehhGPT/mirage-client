// /app/authActions.ts (server-side function)
"use server";

import { signIn } from "@/auth";
export async function SignIn(provider: string) {
  await signIn(provider);
}
