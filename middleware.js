import { NextResponse } from "next/server";
import { SignJWT, jwtVerify } from "jose";

export async function middleware(req, res, next) {
  if (req.nextUrl.pathname.startsWith("/api/profile")) {
    var reqHeader = new Headers(req.headers);
    var token = reqHeader.get("token");

    try {
      const key = new TextEncoder().encode("secter");
      var decode = await jwtVerify(token, key);
      if (
        decode.payload.password == "1234" &&
        decode.payload.email == "juboraz727@gmail.com"
      ) {
        reqHeader.set("email", decode.payload.email);
        return NextResponse.next({ request: { headers: reqHeader } });
      } else {
        return NextResponse.json(
          { data: "incorrect email or password" },
          { status: 200 }
        );
      }
    } catch (ob) {
      return NextResponse.json({ data: ob.message });
    }
  } else {
    return NextResponse.next();
  }
}
