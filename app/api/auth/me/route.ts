import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { cookies } from "next/headers"
import * as jose from "jose"

export async function GET(req: NextApiRequest) {
  // const bearerToken = req.headers["authorization"] as string;
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  return new Response('Hello next.js', {
    status:200,
    headers:{'Set-cookie': `token=${token}`}
  })
  

}



// export async function GET(req:NextApiRequest, res:NextApiResponse){
//   const bearerToken = req.headers["authorization"] as string;

//   if(!bearerToken){
//     NextResponse.json({
//       errorMessage: "unauthorized request (no bearer token)"
//     });
//   }

//   const token = bearerToken.split(" ")[1]

//     if (!token) {
//       NextResponse.json({
//         errorMessage: "unauthorized request (no token)",
//       });
//     }
    
//     const secret = new TextEncoder().encode(process.env.JWT_SECRET)

//     try{
//       await jose.jwtVerify(token, secret)
//     } catch(error){
//        NextResponse.json({
//          errorMessage: "unauthorized request (token invalid)",
//        });
//     }


//   return NextResponse.json({me: "laith someathi"})
// }