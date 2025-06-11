import { getDataFromToken } from "@/helpers/getDataFromTokens";

import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest){
    try {

        const userId= await getDataFromToken(request);
        const user= await User.findOne({_id:userId}).select("-password");
        return NextResponse.json({
            messsage: "User Found",
            data: user,
        });
        

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status: 400});
    }
}