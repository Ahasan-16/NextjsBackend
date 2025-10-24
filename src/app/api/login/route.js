import {SignJWT} from "jose";
import {NextResponse} from "next/server";

export async function POST(req,res){

    const JSONBody= await req.json();
    let userName=JSONBody["userName"];
    let password=JSONBody["password"];

    if(userName==='Ahasan16'&&password==='1234'){

        const key=new TextEncoder().encode(process.env.JWT_KEY);

        const payload={userName:userName};

        const token=await new SignJWT(payload)
            .setProtectedHeader({alg:"HS256"})
            .setIssuedAt()
            .setIssuer("https://localhost:3000")
            .setExpirationTime("2h")
            .sign(key);

        return NextResponse.json({message:"Success",token:token});
    }
    else {
        return NextResponse.json({"message":"Invalid Username or Password"});
    }
}