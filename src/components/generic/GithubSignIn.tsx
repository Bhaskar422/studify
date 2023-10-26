import { Button } from "@/components/ui/button";
import { absoluteUrl } from "@/lib/utils";
// import { absoluteUrl } from "@/lib/utils";
import { signIn } from "next-auth/react";
import React, { FC, ReactNode } from "react";

interface GoogleSignInProps {
  children: ReactNode;
}

const GithubSignIn: FC<GoogleSignInProps> = ({ children }) => {
  const loginWithGithub = () =>
    signIn("github", { callbackUrl: `${absoluteUrl("/user")}` });
  return (
    <Button onClick={loginWithGithub} className="w-full">
      {children}
    </Button>
  );
};

export default GithubSignIn;
