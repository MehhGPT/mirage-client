"use client"

import { SignOut } from "@/actions/SignOut";

export default function SignOutButton() {
  const handleGoogleSignIn = async () => {
    await SignOut();
  };

  return (
    <div onClick={handleGoogleSignIn}>
      Log Out
    </div>
  );
}
