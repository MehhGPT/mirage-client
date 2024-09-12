// /app/authActions.ts (server-side function)
"use server";

import { signOut } from "@/auth";
export async function SignOut() {
  await signOut({redirectTo: '/', redirect: true});
}
