import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody= await request.json()
        const {email, password, rememberMe}= reqBody;

        //check wheather user exists or not

        const user= await User.findOne({email})
        if(!user){
            return NextResponse.json({error:"User does not exist"},{status: 400})
        }

        //checking whether the password is correct or not
        const validPassword= await bcrypt.compare(password,user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"},{status: 400})
        }

        //create token data

        const tokenData= {
            id: user._id,
            username: user.username,
            email:user.email
        }
        
        //creating token

        const token= await jwt.sign(tokenData, process.env.TOKEN_SECRET!,{
            expiresIn: rememberMe ? "30d" : "1h"
        })

        const response= NextResponse.json({
            message:"Login Sucessful",
            success: true,
        })
        response.cookies.set("token",token,{
            httpOnly: true,
            expires: new Date(Date.now() + (rememberMe ? 30 * 24 * 60 * 60 * 1000 : 3600000)) // 30 days or 1 hour in milliseconds
        })

        return response;
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status: 500})
    }
}