import { NextResponse } from "next/server";

export const dynamic = "force-static"; // opt-in for caching

export async function GET() {
  return NextResponse.json({ time: new Date().toISOString() });
}
