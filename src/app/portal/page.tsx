'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home, DollarSign, FileText, Wrench, MessageSquare,
  Bell, ChevronRight, CheckCircle2, Clock, AlertCircle, TrendingUp, Download
} from 'lucide-react';

const mockProperty = {
  address: '500 Brickell Key Drive, Unit 2401',
  city: 'Miami, FL 33131',
  image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  type: 'Condo',
  status: 'Occupied',
  rent: 8500,
  leaseEnd: 'November 30, 2025',
};

const payments = [
  { month: 'April 2025', amount: 8500, status: 'paid', date: 'Apr 1, 2025' },
  { month: 'March 2025', amount: 8500, status: 'paid', date: 'Mar 1, 2025' },
  { month: 'February 2025', amount: 8500, status: 'paid', date: 'Feb 1, 2025' },
  { month: 'January 2025', amount: 8500, status: 'paid', date: 'Jan 1, 2025' },
];

const maintenanceRequests = [
  { id: 1, title: 'AC Unit Servicing', date: 'Apr 10, 2025', status: 'completed', priority: 'normal' },
  { id: 2, title: 'Dishwasher Repair', date: 'Apr 18, 2025', status: 'in-progress', priority: 'normal' },
  { id: 3, title: 'Lobby Intercom Issue', date: 'Apr 20, 2025', status: 'pending', priority: 'urgent' },
];

const statusColors: Record<string, { bg: string; text: string; icon: React.ElementType }> = {
  completed: { bg: 'bg-green-100', text: 'text-green-700', icon: CheckCircle2 },
  'in-progress': { bg: 'bg-blue-100', text: 'text-blue-700', icon: Clock },
  pending: { bg: 'bg-amber-100', text: 'text-amber-700', icon: Clock },
};

const navItems = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'payments', label: 'Payments', icon: DollarSign },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'maintenance', label: 'Maintenance', icon: Wrench },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
];

export default function PortalPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const [maintenanceForm, setMaintenanceForm] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-1" style={{ color: '#C9A96E' }}>
              Resident Portal
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading" style={{ color: '#0A1F44' }}>
              Welcome, James
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2.5 rounded-xl border border-gray-200 bg-white hover:border-amber-400 transition-all text-gray-500">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">2</span>
            </button>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold" style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}>
              JW
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Nav */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-5">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className="w-full flex items-center gap-3 px-5 py-4 text-sm font-medium transition-all border-b border-gray-50 last:border-0"
                  style={activeSection === id
                    ? { background: '#fffbf5', color: '#C9A96E', borderLeft: '3px solid #C9A96E' }
                    : { color: '#374151' }
                  }
                >
                  <Icon size={16} />
                  {label}
                  {id === 'maintenance' && (
                    <span className="ml-auto w-5 h-5 rounded-full bg-red-100 text-red-600 text-xs flex items-center justify-center font-bold">1</span>
                  )}
                  {id === 'messages' && (
                    <span className="ml-auto w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs flex items-center justify-center font-bold">3</span>
                  )}
                  {id !== 'maintenance' && id !== 'messages' && <ChevronRight size={14} className="ml-auto text-gray-300" />}
                </button>
              ))}
            </div>

            {/* Property Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="relative h-36">
                <Image src={mockProperty.image} alt={mockProperty.address} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-semibold text-sm line-clamp-1">{mockProperty.address}</p>
                  <p className="text-white/70 text-xs">{mockProperty.city}</p>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Status</span>
                  <span className="text-green-600 font-semibold">{mockProperty.status}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Monthly Rent</span>
                  <span className="font-bold text-gray-900">${mockProperty.rent.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Lease Ends</span>
                  <span className="font-medium text-gray-700">{mockProperty.leaseEnd}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* OVERVIEW */}
            {activeSection === 'overview' && (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { icon: DollarSign, label: 'Next Payment', value: 'May 1, 2025', sub: '$8,500 due', color: '#C9A96E' },
                    { icon: FileText, label: 'Active Lease', value: '7 months', sub: 'Until Nov 30, 2025', color: '#3b82f6' },
                    { icon: Wrench, label: 'Open Requests', value: '2 Active', sub: '1 urgent', color: '#ef4444' },
                  ].map(({ icon: Icon, label, value, sub, color }) => (
                    <div key={label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${color}15` }}>
                        <Icon size={18} style={{ color }} />
                      </div>
                      <p className="font-bold text-gray-900 text-base">{value}</p>
                      <p className="text-xs text-gray-400">{label}</p>
                      <p className="text-xs font-medium mt-1" style={{ color }}>{sub}</p>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h3 className="font-bold font-heading mb-4" style={{ color: '#0A1F44' }}>Recent Activity</h3>
                  <div className="space-y-3">
                    {[
                      { icon: CheckCircle2, color: 'text-green-500', text: 'April rent payment confirmed', time: '2 days ago' },
                      { icon: Wrench, color: 'text-blue-500', text: 'Maintenance: Dishwasher repair in progress', time: '4 days ago' },
                      { icon: FileText, color: 'text-amber-500', text: 'Lease renewal offer available', time: '1 week ago' },
                      { icon: MessageSquare, color: 'text-purple-500', text: 'New message from property manager', time: '1 week ago' },
                    ].map(({ icon: Icon, color, text, time }, i) => (
                      <div key={i} className="flex items-center gap-3 py-2.5 border-b border-gray-50 last:border-0">
                        <Icon size={16} className={`flex-shrink-0 ${color}`} />
                        <span className="text-sm text-gray-700 flex-1">{text}</span>
                        <span className="text-xs text-gray-400 flex-shrink-0">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lease Renewal Banner */}
                <div
                  className="rounded-2xl p-6 text-white"
                  style={{ background: 'linear-gradient(135deg, #0A1F44, #112a5a)' }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#C9A96E' }}>Action Required</p>
                      <h3 className="text-lg font-bold font-heading mb-1">Your lease renews in 7 months</h3>
                      <p className="text-white/70 text-sm">Review your renewal offer and lock in your rate before Nov 30.</p>
                    </div>
                    <button
                      className="flex-shrink-0 px-6 py-3 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all"
                      style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
                    >
                      Review Offer
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* PAYMENTS */}
            {activeSection === 'payments' && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                  <h3 className="font-bold font-heading" style={{ color: '#0A1F44' }}>Payment History</h3>
                  <button
                    className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg text-white"
                    style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
                  >
                    Pay Now
                  </button>
                </div>
                <div className="divide-y divide-gray-50">
                  {payments.map(p => (
                    <div key={p.month} className="flex items-center gap-4 px-6 py-4">
                      <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={18} className="text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-gray-900">{p.month}</p>
                        <p className="text-xs text-gray-400">Paid on {p.date}</p>
                      </div>
                      <p className="font-bold text-gray-900">${p.amount.toLocaleString()}</p>
                      <button className="p-1.5 text-gray-400 hover:text-amber-600 transition-colors">
                        <Download size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DOCUMENTS */}
            {activeSection === 'documents' && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="font-bold font-heading" style={{ color: '#0A1F44' }}>Documents</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {[
                    { name: 'Lease Agreement 2024–2025', date: 'Dec 1, 2024', size: '1.2 MB' },
                    { name: 'Move-In Inspection Report', date: 'Dec 1, 2024', size: '3.4 MB' },
                    { name: 'Building Rules & Regulations', date: 'Dec 1, 2024', size: '0.8 MB' },
                    { name: 'Renter\'s Insurance Certificate', date: 'Jan 15, 2025', size: '0.5 MB' },
                    { name: 'Lease Renewal Offer', date: 'Apr 15, 2025', size: '1.1 MB', badge: 'New' },
                  ].map(doc => (
                    <div key={doc.name} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <FileText size={16} className="text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-sm text-gray-900">{doc.name}</p>
                          {doc.badge && (
                            <span className="text-xs px-2 py-0.5 rounded-full font-semibold text-white" style={{ backgroundColor: '#C9A96E' }}>{doc.badge}</span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400">{doc.date} · {doc.size}</p>
                      </div>
                      <button className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-amber-400 transition-all">
                        <Download size={13} /> Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* MAINTENANCE */}
            {activeSection === 'maintenance' && (
              <>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="font-bold font-heading" style={{ color: '#0A1F44' }}>Maintenance Requests</h3>
                    <button
                      onClick={() => setMaintenanceForm(true)}
                      className="text-sm font-semibold px-4 py-2 rounded-xl text-white hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
                    >
                      + New Request
                    </button>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {maintenanceRequests.map(req => {
                      const { bg, text, icon: StatusIcon } = statusColors[req.status];
                      return (
                        <div key={req.id} className="flex items-center gap-4 px-6 py-4">
                          <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <Wrench size={16} className="text-gray-500" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium text-sm text-gray-900">{req.title}</p>
                              {req.priority === 'urgent' && (
                                <span className="flex items-center gap-1 text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded-full font-medium">
                                  <AlertCircle size={10} /> Urgent
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-400">Submitted {req.date}</p>
                          </div>
                          <span className={`text-xs px-2.5 py-1 rounded-full font-medium capitalize flex items-center gap-1 ${bg} ${text}`}>
                            <StatusIcon size={11} />
                            {req.status.replace('-', ' ')}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* New Request Form */}
                {maintenanceForm && (
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                    <h3 className="font-bold font-heading mb-4" style={{ color: '#0A1F44' }}>Submit a Request</h3>
                    {requestSent ? (
                      <div className="text-center py-8">
                        <CheckCircle2 size={36} className="mx-auto text-green-500 mb-3" />
                        <p className="font-semibold text-gray-900">Request Submitted</p>
                        <p className="text-sm text-gray-400 mt-1">We&apos;ll contact you within 24 hours.</p>
                      </div>
                    ) : (
                      <form onSubmit={e => { e.preventDefault(); setRequestSent(true); }} className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Issue Category</label>
                          <select className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 transition-all">
                            <option>Plumbing</option>
                            <option>Electrical</option>
                            <option>Appliances</option>
                            <option>HVAC / Climate</option>
                            <option>Building / Common Areas</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Description *</label>
                          <textarea
                            required
                            rows={3}
                            placeholder="Describe the issue in detail..."
                            className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 transition-all resize-none"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" id="urgent" className="accent-amber-500" />
                          <label htmlFor="urgent" className="text-sm text-gray-600">This is urgent (affects habitability)</label>
                        </div>
                        <div className="flex gap-3">
                          <button
                            type="submit"
                            className="flex-1 py-3 rounded-xl text-sm font-semibold text-white hover:opacity-90"
                            style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
                          >
                            Submit Request
                          </button>
                          <button
                            type="button"
                            onClick={() => setMaintenanceForm(false)}
                            className="px-5 py-3 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 hover:border-gray-300"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </>
            )}

            {/* MESSAGES */}
            {activeSection === 'messages' && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="font-bold font-heading" style={{ color: '#0A1F44' }}>Messages</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {[
                    { from: 'Property Management', avatar: 'PM', text: 'Your lease renewal offer is now available for review...', time: '2h ago', unread: true },
                    { from: 'Maintenance Team', avatar: 'MT', text: 'We\'ve scheduled your dishwasher repair for Thursday...', time: '4h ago', unread: true },
                    { from: 'Sofia Martinez', avatar: 'SM', text: 'Hi James, just checking in on how you\'re enjoying the unit...', time: '3d ago', unread: false },
                  ].map((msg, i) => (
                    <div key={i} className={`flex items-start gap-4 px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors ${msg.unread ? 'bg-amber-50/30' : ''}`}>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #0A1F44, #112a5a)' }}
                      >
                        {msg.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <p className={`text-sm font-semibold ${msg.unread ? 'text-gray-900' : 'text-gray-600'}`}>{msg.from}</p>
                          <p className="text-xs text-gray-400 flex-shrink-0">{msg.time}</p>
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-1">{msg.text}</p>
                      </div>
                      {msg.unread && <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: '#C9A96E' }} />}
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-100">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 transition-all"
                    />
                    <button
                      className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
                      style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
