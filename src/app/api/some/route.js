import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("Hola, Next.js!");
}
