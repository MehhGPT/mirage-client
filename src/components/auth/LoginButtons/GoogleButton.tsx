"use client"; // Client-side component

import { SignIn } from "@/actions/SignIn";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../../ui/button";

export default function GoogleButton() {
  const handleSignIn = async () => {
    await SignIn('google');
  };

  return (
    <Button variant="outline" onClick={handleSignIn}>
      <FcGoogle className="mr-3"/> Google
    </Button>
  );
}
