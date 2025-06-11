import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect()


export async function POST(request: NextRequest){
    try {

        const reqBody= await request.json()
        const {username, email, password}= reqBody

        console.log(reqBody);

        // Validate password
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const isLongEnough = password.length >= 8;

        if (!isLongEnough || !hasUpperCase || !hasLowerCase || !hasNumber) {
            return NextResponse.json({
                error: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
            }, {status: 400});
        }

        //checking if the user Already Exists
        const existingUser = await User.findOne({
            $or: [
                { email },
                { username }
            ]
        });

        if(existingUser){
            if(existingUser.email === email) {
                return NextResponse.json({error: "Email Already Exists" },{status: 400})
            }
            if(existingUser.username === username) {
                return NextResponse.json({error: "Username Already In Use" },{status: 400})
            }
        }

        //hasing Password
        const salt= await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser= new User({
            email,
            username,
            password: hashedPassword
        })

        const savedUser= await newUser.save()
        console.log(savedUser);

        return NextResponse.json({
            message: "User Created Successfully",
            success: true,
            savedUser 
        })
        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status: 500})
    }
}