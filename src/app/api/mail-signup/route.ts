import { db } from "@/server/db/client";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { ServerSchema } from "@/lib/valid-types";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = ServerSchema.parse(body);

    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }
    const existingUserByUsername = await db.user.findUnique({
      where: { username: username },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: "User with this username already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Something Went Wrong" }, { status: 500 });
  }
}
