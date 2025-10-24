import {NextResponse} from "next/server";
import {headers} from "next/headers";

export async function GET(req,res){

    const HeaderList=await headers();

    let userName=HeaderList.get('userName');

    return NextResponse.json({message:"Here Your Cash userName:" + userName});
}