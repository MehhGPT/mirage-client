"use client"; // Client-side component

import { SignIn } from "@/actions/SignIn";
import { FaGithub } from "react-icons/fa";
import { Button } from "../../ui/button";

export default function GithubButton() {
  const handleSignIn = async () => {
    await SignIn('github');
  };

  return (
    <Button variant="outline" onClick={handleSignIn}>
      <FaGithub className="mr-3"/> Github
    </Button>
  );
}
