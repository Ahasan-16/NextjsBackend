import {NextResponse} from "next/server";


export function middleware(req,res){
    if(req.nextUrl.pathname.startsWith("/api/profile"))
    {
        console.log("I am middleware");
        const header=new Headers(req.headers);
        let username=header.get("userName");
        if(username==="Ahasan")
        {
            header.set("key","value");
            return NextResponse.next({
                request:{headers:header},
            });
        }
        else {
            return NextResponse.json({msg:"not authorized"});
        }

    }
}

//response er header data set
// const res=NextResponse.next();
// res.headers.set("key","value");
// return res;