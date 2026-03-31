import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { prompt, language } = await req.json();
  // Mock code generation
  return NextResponse.json({
    code: `// Generated code for ${language}\nconsole.log("Hello from Cove.ai");`,
  });
}
