import {NextResponse} from "next/server";
import {jwtVerify} from "jose";

export async function middleware(req,res){
    if(req.nextUrl.pathname.startsWith("/api/cash")){
        try{
            const HeaderList=new Headers(req.headers);

            let token=HeaderList.get('token');

            const key=new TextEncoder().encode(process.env.JWT_KEY);

            const decode=await jwtVerify(token,key);
            HeaderList.set('userName',decode['payload']['userName']);

            return NextResponse.next({
                    request:{headers:HeaderList}
            }

            );
        }
        catch (e) {
            return NextResponse.json({message:"Invalid Token"});
        }

    }


}