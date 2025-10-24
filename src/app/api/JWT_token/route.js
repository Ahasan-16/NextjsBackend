import {jwtVerify, SignJWT} from "jose";
import {NextResponse} from "next/server";

export async function GET(req,res){
    const key=new TextEncoder().encode(process.env.JWT_KEY);
    const payload={email:"abc@gmail.com",user_id:"1234"};
    let token=await new SignJWT(payload)
        .setProtectedHeader({alg:"HS256"})
        .setIssuedAt()
        .setIssuer("https://localhost:3000")
        .setExpirationTime("2h")
        .sign(key);
    return NextResponse.json(token);
}
export async function POST(req,res){
    const key=new TextEncoder().encode(process.env.JWT_KEY);

    const JSONBody=await req.json();
    let token=JSONBody['token'];

   const payload=await jwtVerify(token,key);
   return NextResponse.json(payload);

}