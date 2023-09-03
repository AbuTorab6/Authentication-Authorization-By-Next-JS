import { NextResponse } from "next/server";

import { headers } from "next/headers";

export async function GET(req, res) {
  var headerData = headers();
  var email = headerData.get("email");
  return NextResponse.json(
    { data: "i am profile", logedInUserEmail: email },
    { status: 200 }
  );
}
