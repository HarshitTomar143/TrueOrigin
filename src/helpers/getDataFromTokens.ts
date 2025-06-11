import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

interface TokenData {
    id: string;
    username: string;
    email: string;
}

export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || "";
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as TokenData;
        return decodedToken;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("Invalid token");
    }
}