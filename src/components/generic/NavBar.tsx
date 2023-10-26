import MaxWidthWrapper from "@/components/generic/MaxWidthWrappter";
import { ModeToggle } from "@/components/generic/ModeToggle";
import UserAccountNav from "@/components/generic/UserAccountNav";
import { buttonVariants } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const NavBar = async () => {
  const session = await getServerSession();
  return (
    <header className="h-14 sticky top-0 z-30 inset-x-0 w-full border-b bg-background/95 backdrop:blur supports-[backdrop-filter]:bg-background/60">
      <MaxWidthWrapper>
        <nav className="flex h-14 items-center justify-between border-b">
          <Link href="/" className="font-semibold">
            Studify
          </Link>

          {/* Implement Mobile Nav bar*/}

          <div className="hidden items-center space-x-4 sm:flex">
            {session?.user ? (
              <>
                <UserAccountNav />
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className={buttonVariants({ variant: "ghost", size: "sm" })}
                >
                  Sign in
                </Link>
                <Link href="/sign-up" className={buttonVariants({ size: "sm" })}>
                  Get Started
                </Link>
              </>
            )}
            <ModeToggle />
          </div>
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default NavBar;
