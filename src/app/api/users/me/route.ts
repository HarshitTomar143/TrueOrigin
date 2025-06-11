import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const secret = process.env.TOKEN_SECRET;
    if (!secret) {
      console.error("TOKEN_SECRET is not defined in environment variables.");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    console.log("Token:", token.value);
    const decoded = jwt.verify(token.value, secret) as { username: string };
    console.log("Decoded token:", decoded);

    return NextResponse.json({ username: decoded.username });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error verifying token:", error.message);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: "An unknown error occurred" },
      { status: 500 }
    );
  }
}
