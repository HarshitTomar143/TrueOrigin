import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get("token")?.value || "";

        if (!token) {
            return NextResponse.json({ success: false, error: "No token found" }, { status: 401 });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET!);

        if (!decoded) {
            return NextResponse.json({ success: false, error: "Invalid token" }, { status: 401 });
        }

        return NextResponse.json({ success: true, user: decoded });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 401 });
    }
} 