import {NextResponse} from "next/server";
import {headers} from "next/headers";

export async function GET(req, res) {
    const headerList=await headers();
    let value=headerList.get("key");
    return NextResponse.json({key:value});
}