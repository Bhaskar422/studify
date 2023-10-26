"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

const UserAccountNav = () => {
  return (
    <Button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        })
      }
      variant="ghost"
    >
      Sign out
    </Button>
  );
};

export default UserAccountNav;
