import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();
  // Mock response
  return NextResponse.json({
    reply: `Echo: ${message} (This is a demo)`,
  });
}
