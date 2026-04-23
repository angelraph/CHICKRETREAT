'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, CheckCircle2, MessageCircle } from 'lucide-react';

const offices = [
  {
    city: 'New York',
    address: '150 Park Avenue, Suite 2800',
    state: 'New York, NY 10022',
    phone: '+1 (212) 555-0100',
    email: 'ny@luxeestates.com',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80',
  },
  {
    city: 'Los Angeles',
    address: '9200 Wilshire Blvd, Suite 400',
    state: 'Beverly Hills, CA 90212',
    phone: '+1 (310) 555-0200',
    email: 'la@luxeestates.com',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80',
  },
  {
    city: 'Miami',
    address: '1000 Brickell Avenue, Suite 850',
    state: 'Miami, FL 33131',
    phone: '+1 (305) 555-0300',
    email: 'miami@luxeestates.com',
    image: 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=600&q=80',
  },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', interest: 'buying', message: '',
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Enter a valid email address';
    if (!formData.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    setErrors({});
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, subject: `Website Inquiry: ${formData.interest}` }),
      });
      if (!res.ok) throw new Error('Server error');
      setSubmitted(true);
    } catch {
      setErrors({ submit: 'Something went wrong. Please try again or call us directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  const Field = ({ id, label, error }: { id: string; label: string; error?: string }) => (
    <p id={`${id}-err`} className="text-xs text-red-500 mt-1" role="alert" aria-live="polite">
      {error}
    </p>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Left: Form */}
      <div>
        <h2 className="text-2xl font-bold font-heading mb-2" style={{ color: '#0A1F44' }}>Send Us a Message</h2>
        <p className="text-gray-500 text-sm mb-8">We typically respond within 2 hours during business hours.</p>

        {submitted ? (
          <div className="text-center py-16 bg-green-50 rounded-3xl border border-green-100" role="status" aria-live="polite">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} className="text-green-600" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Message Received!</h3>
            <p className="text-gray-500 text-sm">A member of our team will be in touch within 2 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="Contact form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Full Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'contact-name-err' : undefined}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 text-sm bg-gray-50 border rounded-xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                  style={{ borderColor: errors.name ? '#ef4444' : '#e5e7eb' }}
                />
                {errors.name && <p id="contact-name-err" className="text-xs text-red-500 mt-1" role="alert">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'contact-email-err' : undefined}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 text-sm bg-gray-50 border rounded-xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                  style={{ borderColor: errors.email ? '#ef4444' : '#e5e7eb' }}
                />
                {errors.email && <p id="contact-email-err" className="text-xs text-red-500 mt-1" role="alert">{errors.email}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Phone</label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-interest" className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  I&apos;m Interested In
                </label>
                <select
                  id="contact-interest"
                  value={formData.interest}
                  onChange={e => setFormData(p => ({ ...p, interest: e.target.value }))}
                  className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 transition-all"
                >
                  <option value="buying">Buying a Property</option>
                  <option value="selling">Selling a Property</option>
                  <option value="renting">Renting a Property</option>
                  <option value="investing">Investment Advice</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Message <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={formData.message}
                onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'contact-message-err' : undefined}
                placeholder="Tell us about your real estate needs..."
                className="w-full px-4 py-3 text-sm bg-gray-50 border rounded-xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all resize-none"
                style={{ borderColor: errors.message ? '#ef4444' : '#e5e7eb' }}
              />
              {errors.message && <p id="contact-message-err" className="text-xs text-red-500 mt-1" role="alert">{errors.message}</p>}
            </div>
            {errors.submit && <p className="text-sm text-red-500 py-2 px-3 bg-red-50 rounded-lg" role="alert">{errors.submit}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
            >
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}

        {/* WhatsApp */}
        <div className="mt-6 flex items-center gap-3 p-4 rounded-2xl border border-green-200 bg-green-50">
          <MessageCircle size={20} className="text-green-600 flex-shrink-0" aria-hidden="true" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-green-800">Prefer WhatsApp?</p>
            <p className="text-xs text-green-600">Chat with us instantly</p>
          </div>
          <a
            href="https://wa.me/18005558936"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold text-white rounded-lg bg-green-500 hover:bg-green-600 transition-colors"
          >
            Open Chat
          </a>
        </div>
      </div>

      {/* Right: Info */}
      <div>
        <div className="grid grid-cols-1 gap-5 mb-8">
          {[
            { icon: Phone, title: 'Phone', lines: ['+1 (800) 555-LUXE', 'Mon–Sat 8AM–8PM EST'] },
            { icon: Mail, title: 'Email', lines: ['hello@luxeestates.com', 'We reply within 2 hours'] },
            { icon: Clock, title: 'Office Hours', lines: ['Monday–Friday: 8AM–8PM', 'Saturday: 9AM–6PM EST'] },
          ].map(({ icon: Icon, title, lines }) => (
            <div key={title} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #0A1F44, #112a5a)' }}>
                <Icon size={18} style={{ color: '#C9A96E' }} aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-0.5">{title}</p>
                {lines.map((l, i) => (
                  <p key={i} className={`text-sm ${i === 0 ? 'text-gray-700' : 'text-gray-400'}`}>{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-lg font-heading mb-4" style={{ color: '#0A1F44' }}>Our Offices</h3>
        <div className="space-y-4">
          {offices.map(office => (
            <div key={office.city} className="flex gap-4 p-4 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
              <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0">
                <Image src={office.image} alt={`${office.city} office`} fill className="object-cover" quality={70} />
              </div>
              <address className="not-italic">
                <p className="font-semibold text-gray-900 text-sm">{office.city}</p>
                <p className="text-xs text-gray-500">{office.address}</p>
                <p className="text-xs text-gray-500">{office.state}</p>
                <p className="text-xs mt-1" style={{ color: '#C9A96E' }}>{office.phone}</p>
              </address>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
