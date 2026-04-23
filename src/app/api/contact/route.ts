import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
  interest?: string;
}

function validate(body: Partial<ContactPayload>): string | null {
  if (!body.name?.trim()) return 'Name is required';
  if (!body.email?.trim()) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return 'Invalid email address';
  if (!body.message?.trim()) return 'Message is required';
  return null;
}

export async function POST(req: NextRequest) {
  let body: Partial<ContactPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 422 });
  }

  const { name, email, phone, message, subject, interest } = body as ContactPayload;

  // Requires SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL in .env.local
  const smtpConfigured =
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.CONTACT_TO_EMAIL;

  if (smtpConfigured) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_PORT === '465',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"ChicsRetreat Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: subject ?? `New Inquiry from ${name}`,
      html: `
        <h2 style="color:#1A3828">New Contact Form Submission</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>` : ''}
          ${interest ? `<tr><td><strong>Interest:</strong></td><td>${interest}</td></tr>` : ''}
          <tr><td colspan="2"><strong>Message:</strong><br/><br/>${message.replace(/\n/g, '<br/>')}</td></tr>
        </table>
      `,
    });
  } else {
    // Log to console in dev when SMTP is not configured
    console.log('[Contact Form Submission]', { name, email, phone, subject, interest, message });
  }

  return NextResponse.json({ success: true });
}
