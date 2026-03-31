import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { prompt, style, aspect } = await req.json();
  // Mock image URL
  return NextResponse.json({
    imageUrl: 'https://via.placeholder.com/512x512?text=Generated+Image',
  });
}
