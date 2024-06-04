import { NextResponse } from "next/server";
import db from "@/lib/db";
export async function POST(request) {
  const data = await request.json();

  console.log(data);

  return NextResponse.json("Register Successfull");
}
