import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'data', 'subscribers.json');

async function readSubscribers(): Promise<string[]> {
  try {
    const raw = await fs.readFile(SUBSCRIBERS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeSubscribers(emails: string[]): Promise<void> {
  await fs.mkdir(path.dirname(SUBSCRIBERS_FILE), { recursive: true });
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(emails, null, 2));
}

export async function POST(req: NextRequest) {
  let body: { email?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email address required' }, { status: 422 });
  }

  const subscribers = await readSubscribers();
  if (subscribers.includes(email)) {
    return NextResponse.json({ success: true, already: true });
  }

  await writeSubscribers([...subscribers, email]);
  console.log(`[Newsletter] New subscriber: ${email}`);

  return NextResponse.json({ success: true });
}
