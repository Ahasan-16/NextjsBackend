import {NextResponse} from "next/server";
import {headers} from "next/headers";


export async function GET(req, res) {
    const {searchParams} = new URL(req.url);
    let id=searchParams.get("id");
    let name=searchParams.get("name");
    return NextResponse.json({id:id,name:name});
}

export async function POST(req, res) {
   const JSONBody= await req.json();
   let firstName=JSONBody["firstName"];
   let lastName=JSONBody["lastName"];
   return NextResponse.json({firstName:firstName,lastName:lastName});

}

export async function PUT(req, res) {
    const formData=await req.formData();
    let token=formData.get("token");
    return NextResponse.json({token:token});
}
export async function PATCH(req, res) {
    const headerList=await headers();
    let user_id=headerList.get("user_id");
    let password=headerList.get("password");
    return NextResponse.json({user_id:user_id,password:password});

}
export async function DELETE(req, res) {
    const cookies=req.cookies.get("key");
    return NextResponse.json({cookies:cookies});
}