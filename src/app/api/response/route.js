import {NextResponse} from "next/server";

export async function GET(req,res){
    return NextResponse.json(
        {message:"success",message1:"success1"},
        {status: 200,
            headers:{
                 "user_id":"ahasan16",
                "password":"123456",
                "set-cookie":"auth=123;path=/;",
            }
        }
    );
}