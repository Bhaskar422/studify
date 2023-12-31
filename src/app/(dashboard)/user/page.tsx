import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <h2>Admin page - Welcome back {session?.user.username || session?.user.name}</h2>
    );
  }
  return <div>Please login to see the user page</div>;
};

export default page;
