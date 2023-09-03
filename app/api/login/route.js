import { NextResponse } from "next/server";
import { SignJWT, jwtVerify } from "jose";

export async function POST(req, res) {
  var dataFromPostman = await req.json();

  if (
    dataFromPostman.email == "juboraz727@gmail.com" &&
    dataFromPostman.password == "1234"
  ) {
    const key = new TextEncoder().encode("secter");
    const token = await new SignJWT({
      email: dataFromPostman.email,
      password: dataFromPostman.password,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setIssuer("https://localhost:3000")
      .setExpirationTime("2h")
      .sign(key);

    return NextResponse.json({ data: token }, { status: 200 });
  } else {
    return NextResponse.json({ data: "login failed " }, { status: 200 });
  }
}
