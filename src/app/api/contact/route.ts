import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect"
import User from "@/models/Usermodels"

dbConnect()

export async function POST(request: NextRequest){
    
    try {
        const reqBody = await request.json()
        const {email , telephone, fullname, custom} = reqBody

        console.log(reqBody);
         
        
        const newUser = new User({
            
            email,
            telephone,
            fullname,
            custom
        })

        const savedUser = await newUser.save()
        console.log(savedUser);
        
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
        
          

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
} 