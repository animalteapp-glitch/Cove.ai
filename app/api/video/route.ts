import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { prompt, duration, style } = await req.json();
  // Mock video URL
  return NextResponse.json({
    videoUrl: 'https://via.placeholder.com/640x360?text=Generated+Video',
  });
}
