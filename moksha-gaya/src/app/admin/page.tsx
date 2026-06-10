"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getLeads, getWhatsAppLogs, updateLead, getStatusWhatsAppUrl, openWhatsApp, Lead, WhatsAppLog } from "@/utils/leads";

export default function AdminPanel() {
  // Login Guard State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Leads & Logs state
  const [leads, setLeads] = useState<Lead[]>([]);
  const [whatsappLogs, setWhatsappLogs] = useState<WhatsAppLog[]>([]);
  
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<"leads" | "whatsapp">("leads");

  // Filters & Search
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Lead Detail Modal
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [newNote, setNewNote] = useState("");

  // Load data
  useEffect(() => {
    if (typeof window !== "undefined") {
      const logged = sessionStorage.getItem("moksha_gaya_logged_in") === "true";
      if (logged) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsLoggedIn(true);
      }
      setLeads(getLeads());
      setWhatsappLogs(getWhatsAppLogs());
    }
  }, []);

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "moksha2026") {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("moksha_gaya_logged_in", "true");
      }
      setIsLoggedIn(true);
      setLeads(getLeads());
      setWhatsappLogs(getWhatsAppLogs());
      setLoginError("");
    } else {
      setLoginError("Invalid credentials. Try again.");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("moksha_gaya_logged_in");
    }
    setIsLoggedIn(false);
  };

  // Status Change Handler
  const handleStatusChange = (leadId: string, newStatus: Lead["status"]) => {
    const leadToUpdate = leads.find(l => l.id === leadId);
    if (!leadToUpdate) return;

    const updatedLead: Lead = { ...leadToUpdate, status: newStatus };
    updateLead(updatedLead);

    const updated = leads.map(l => l.id === leadId ? updatedLead : l);
    setLeads(updated);

    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead(updatedLead);
    }

    // Automatically open WhatsApp with updated template
    const whatsappUrl = getStatusWhatsAppUrl(updatedLead);
    openWhatsApp(whatsappUrl);

    // Trigger Email notification for Confirmed or Cancelled status changes if email exists
    if ((newStatus === "Confirmed" || newStatus === "Cancelled") && updatedLead.email) {
      fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadId: updatedLead.id,
          name: updatedLead.name,
          phone: updatedLead.phone,
          email: updatedLead.email,
          ritual: updatedLead.ritual,
          package: updatedLead.package,
          date: updatedLead.date,
          status: newStatus
        })
      }).catch(err => console.error("Error triggering status change email:", err));
    }
  };

  // Add Note Handler
  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLead || !newNote.trim()) return;

    const updatedNotes = [
      ...selectedLead.notes,
      { timestamp: new Date().toISOString(), text: newNote.trim() }
    ];

    const updatedLead = { ...selectedLead, notes: updatedNotes };
    updateLead(updatedLead);
    setSelectedLead(updatedLead);
    setNewNote("");

    // Update main list
    setLeads(leads.map(l => l.id === updatedLead.id ? updatedLead : l));
  };

  // Filter & Search computation
  const filteredLeads = leads.filter(lead => {
    const matchesStatus = statusFilter === "All" || lead.status === statusFilter;
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      lead.name.toLowerCase().includes(query) || 
      lead.phone.includes(query) ||
      lead.id.toLowerCase().includes(query) ||
      lead.ritual.toLowerCase().includes(query);
    return matchesStatus && matchesSearch;
  });

  // Stats computation
  const totalEnquiries = leads.length;
  const todayEnquiries = leads.filter(l => {
    const today = new Date().toISOString().split("T")[0];
    return l.createdAt.split("T")[0] === today;
  }).length;
  const pendingCalls = leads.filter(l => l.status === "Pending" || l.status === "Called").length;
  const completedRituals = leads.filter(l => l.status === "Completed").length;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1c1917] px-6 py-20 relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, rgba(177, 122, 32, 0.1), transparent)" }} />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-white border border-[#efe9de]/30 rounded-2xl p-8 md:p-10 shadow-2xl relative z-10"
        >
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-stone-100 border border-[#b17a20]/30 flex items-center justify-center mx-auto mb-4">
              <img src="/images/hero/moksha_gayalogo2.png" alt="Moksha Gaya Logo" className="w-full h-full object-cover scale-110" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-[#2c1a04] tracking-wider uppercase">Admin Portal</h1>
            <p className="text-xs text-[#7c6954] mt-1">Spiritual lead console and automation dashboard</p>
          </div>

          {loginError && (
            <div className="mb-6 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium text-center">
              ⚠️ {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Username</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter admin username"
                className="w-full px-4 py-3 bg-[#faf8f5] border border-[#efe9de] rounded-xl text-sm text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#2c1a04] uppercase tracking-wider mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-[#faf8f5] border border-[#efe9de] rounded-xl text-sm text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#b17a20] hover:bg-[#2c1a04] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:shadow-lg mt-2"
            >
              Log In
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-[#efe9de]">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white border border-[#b17a20]/30 flex items-center justify-center shrink-0">
                <img src="/images/hero/moksha_gayalogo2.png" alt="Logo" className="w-full h-full object-cover scale-110" />
              </div>
              <h1 className="font-serif text-2xl font-bold text-[#2c1a04]">Moksha Gaya Admin</h1>
            </div>
            <p className="text-xs text-[#7c6954] mt-1">Lead Manager &amp; WhatsApp Automation Logs</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-[#efe9de] text-[#2c1a04] hover:bg-[#2c1a04] hover:text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-200"
          >
            Logout
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {[
            { label: "Total Enquiries", val: totalEnquiries, desc: "All registrations", color: "border-l-stone-400" },
            { label: "Today's Enquiries", val: todayEnquiries, desc: "New registrations", color: "border-l-amber-500" },
            { label: "Pending Calls", val: pendingCalls, desc: "Require coordinator callback", color: "border-l-[#b17a20]" },
            { label: "Completed Rituals", val: completedRituals, desc: "Successfully conducted", color: "border-l-emerald-600" }
          ].map((stat, idx) => (
            <div key={idx} className={`bg-white border border-[#efe9de] border-l-4 ${stat.color} rounded-2xl p-5 shadow-xs`}>
              <p className="text-[10px] font-bold text-[#7c6954] uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="font-serif text-2xl md:text-3xl font-bold text-[#2c1a04]">{stat.val}</p>
              <p className="text-[10px] text-[#9c8974] mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 border-b border-[#efe9de] mb-8">
          <button
            onClick={() => setActiveTab("leads")}
            className={`pb-4 px-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === "leads"
                ? "border-[#b17a20] text-[#b17a20]"
                : "border-transparent text-[#7c6954] hover:text-[#2c1a04]"
            }`}
          >
            📋 Lead Management
          </button>
          <button
            onClick={() => setActiveTab("whatsapp")}
            className={`pb-4 px-2 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === "whatsapp"
                ? "border-[#b17a20] text-[#b17a20]"
                : "border-transparent text-[#7c6954] hover:text-[#2c1a04]"
            }`}
          >
            💬 WhatsApp Logs
          </button>
        </div>

        {activeTab === "leads" && (
          <div className="bg-white border border-[#efe9de] rounded-2xl overflow-hidden shadow-xs p-6">
            {/* Filters Bar */}
            <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-6 pb-6 border-b border-[#faf8f5]">
              <div className="flex flex-wrap gap-2">
                {["All", "Pending", "Called", "Confirmed", "Completed", "Cancelled"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                      statusFilter === status
                        ? "bg-[#b17a20] text-white shadow-xs"
                        : "bg-[#faf8f5] text-[#7c6954] hover:bg-[#efe8db]"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name, phone or ID..."
                  className="w-full md:w-64 px-4 py-2 border border-[#efe9de] rounded-full text-xs text-[#2c1a04] bg-[#faf8f5] focus:outline-none focus:border-[#b17a20] transition-colors"
                />
              </div>
            </div>

            {/* Leads Table */}
            {filteredLeads.length === 0 ? (
              <div className="text-center py-12 text-stone-400 text-xs font-medium">
                No matching leads found in local records.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[#efe9de] text-[#7c6954] font-bold uppercase tracking-wider bg-[#faf8f5]">
                      <th className="p-4 rounded-tl-xl">Ref ID</th>
                      <th className="p-4">Customer</th>
                      <th className="p-4">Mobile</th>
                      <th className="p-4">Ritual Service</th>
                      <th className="p-4">Package</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 rounded-tr-xl text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#faf8f5]">
                    {filteredLeads.map((lead) => {
                      const statusStyles = {
                        Pending: "bg-amber-50 text-amber-700 border-amber-200",
                        Called: "bg-stone-100 text-stone-700 border-stone-200",
                        Confirmed: "bg-blue-50 text-blue-700 border-blue-200",
                        Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
                        Cancelled: "bg-red-50 text-red-700 border-red-200"
                      }[lead.status];

                      return (
                        <tr key={lead.id} className="hover:bg-[#faf8f5]/40 transition-colors">
                          <td className="p-4 font-bold text-[#b17a20]">{lead.id}</td>
                          <td className="p-4 font-bold text-[#2c1a04]">{lead.name}</td>
                          <td className="p-4 font-medium text-stone-600">{lead.phone}</td>
                          <td className="p-4 font-medium text-[#2c1a04]">{lead.ritual}</td>
                          <td className="p-4 font-serif italic text-[#b17a20]">{lead.package}</td>
                          <td className="p-4 font-medium text-stone-500">{lead.date}</td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold ${statusStyles}`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <button
                              onClick={() => setSelectedLead(lead)}
                              className="px-3 py-1.5 bg-[#f8f1e5] hover:bg-[#b17a20] text-[#b17a20] hover:text-white text-[10px] font-bold uppercase tracking-wider rounded-full transition-colors"
                            >
                              Manage
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === "whatsapp" && (
          <div className="bg-white border border-[#efe9de] rounded-2xl overflow-hidden shadow-xs p-6">
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-[#faf8f5]">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2c1a04]">Outbound Automated Log</h3>
                <p className="text-[10px] text-[#7c6954]">Simulated API dispatch registers</p>
              </div>
              <span className="text-[10px] font-bold uppercase bg-[#f8f1e5] text-[#b17a20] px-3 py-1 rounded-full">
                Active Mock Webhook
              </span>
            </div>

            {whatsappLogs.length === 0 ? (
              <div className="text-center py-12 text-stone-400 text-xs font-medium">
                No automated WhatsApp triggers logged yet.
              </div>
            ) : (
              <div className="space-y-4">
                {whatsappLogs.map((log) => {
                  const isAdmin = log.recipient === "Admin";
                  return (
                    <div 
                      key={log.id} 
                      className={`border rounded-xl p-5 text-xs transition-all ${
                        isAdmin 
                          ? "border-[#ebdcc7] bg-[#faf6f0]" 
                          : "border-emerald-100 bg-[#f7fbf8]"
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                            isAdmin 
                              ? "bg-[#2c1a04] text-white" 
                              : "bg-emerald-600 text-white"
                          }`}>
                            {log.recipient} Alert
                          </span>
                          <span className="font-semibold text-stone-500">Ref: {log.refId}</span>
                        </div>
                        <span className="text-[10px] text-stone-400 font-mono">
                          {new Date(log.timestamp).toLocaleString("en-IN")}
                        </span>
                      </div>
                      
                      <div className="bg-white/80 p-3 rounded-lg border border-stone-200/50 mb-2 font-mono whitespace-pre-line text-stone-700">
                        {log.message}
                      </div>

                      <div className="flex justify-between items-center text-[10px] text-stone-400">
                        <span>Recipient Phone: <strong className="text-stone-600">{log.phone}</strong></span>
                        <span className="text-emerald-600 font-bold">✓ Delivered via MockAPI</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Lead Detail Modal */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 bg-[#1c1917]/70 backdrop-blur-xs flex items-center justify-center p-6 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white border border-[#efe9de] rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-[#efe9de] flex justify-between items-center bg-[#faf8f5]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#b17a20]">{selectedLead.id}</span>
                    <h2 className="font-serif text-lg font-bold text-[#2c1a04]">Manage Enquiry</h2>
                  </div>
                  <p className="text-[10px] text-[#7c6954]">Registered: {new Date(selectedLead.createdAt).toLocaleString("en-IN")}</p>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-[#2c1a04] flex items-center justify-center font-bold text-sm"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
                {/* Devotee Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#faf8f5] p-3.5 rounded-xl border border-[#efe9de]/50">
                    <p className="text-[10px] text-stone-400 font-bold uppercase">Customer Name</p>
                    <p className="font-bold text-sm text-[#2c1a04] mt-0.5">{selectedLead.name}</p>
                  </div>
                  <div className="bg-[#faf8f5] p-3.5 rounded-xl border border-[#efe9de]/50 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] text-stone-400 font-bold uppercase">Mobile Number</p>
                      <p className="font-bold text-sm text-[#2c1a04] mt-0.5">{selectedLead.phone}</p>
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href={`tel:${selectedLead.phone}`}
                        className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-[#2c1a04] font-bold uppercase rounded-full text-[9px] tracking-wider transition-colors flex items-center gap-1"
                      >
                        📞 Call
                      </a>
                      <a 
                        href={getStatusWhatsAppUrl(selectedLead)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase rounded-full text-[9px] tracking-wider transition-colors flex items-center gap-1"
                      >
                        💬 WhatsApp
                      </a>
                    </div>
                  </div>
                  <div className="bg-[#faf8f5] p-3.5 rounded-xl border border-[#efe9de]/50">
                    <p className="text-[10px] text-stone-400 font-bold uppercase">Email Address</p>
                    <p className="font-semibold text-stone-700 mt-0.5">{selectedLead.email || "N/A"}</p>
                  </div>
                  <div className="bg-[#faf8f5] p-3.5 rounded-xl border border-[#efe9de]/50">
                    <p className="text-[10px] text-stone-400 font-bold uppercase">Tentative Date</p>
                    <p className="font-semibold text-stone-700 mt-0.5">{selectedLead.date}</p>
                  </div>
                  <div className="bg-[#faf8f5] p-3.5 rounded-xl border border-[#efe9de]/50">
                    <p className="text-[10px] text-stone-400 font-bold uppercase">Ritual Service</p>
                    <p className="font-bold text-[#2c1a04] mt-0.5">{selectedLead.ritual}</p>
                  </div>
                  <div className="bg-[#faf8f5] p-3.5 rounded-xl border border-[#efe9de]/50">
                    <p className="text-[10px] text-stone-400 font-bold uppercase">Package Tier</p>
                    <p className="font-serif italic font-bold text-[#b17a20] mt-0.5">{selectedLead.package}</p>
                  </div>
                </div>

                {selectedLead.additionalInfo && (
                  <div className="p-4 bg-amber-50/50 border border-amber-200/50 rounded-xl">
                    <p className="text-[10px] text-amber-800 font-bold uppercase mb-1">Enquiry Requirements &amp; gotra Details</p>
                    <p className="text-stone-700 leading-relaxed font-serif italic">&quot;{selectedLead.additionalInfo}&quot;</p>
                  </div>
                )}

                {/* Status Updater */}
                <div className="flex items-center justify-between border-t border-b border-[#efe9de] py-4 bg-[#faf8f5]/40 px-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">📊</span>
                    <div>
                      <p className="font-bold text-[#2c1a04]">Enquiry Status</p>
                      <p className="text-[9px] text-[#7c6954]">Update to log progression audits</p>
                    </div>
                  </div>
                  <select
                    value={selectedLead.status}
                    onChange={(e) => handleStatusChange(selectedLead.id, e.target.value as Lead["status"])}
                    className="px-3 py-2 bg-white border border-[#efe9de] rounded-lg font-bold text-[#2c1a04] focus:outline-none focus:border-[#b17a20]"
                  >
                    <option value="Pending">Pending Callback</option>
                    <option value="Called">Customer Called</option>
                    <option value="Confirmed">Ritual Confirmed</option>
                    <option value="Completed">Ritual Completed</option>
                    <option value="Cancelled">Cancelled/Postponed</option>
                  </select>
                </div>

                {/* Notes Audits Section */}
                <div className="space-y-4">
                  <h3 className="font-serif text-sm font-bold text-[#2c1a04] border-b border-[#efe9de] pb-1.5">Coordinator Audit Notes</h3>
                  
                  {selectedLead.notes.length === 0 ? (
                    <p className="text-stone-400 italic text-[10px] text-center py-2">No coordinator notes added yet.</p>
                  ) : (
                    <div className="space-y-2.5 max-h-[150px] overflow-y-auto pr-1">
                      {selectedLead.notes.map((note, nIdx) => (
                        <div key={nIdx} className="bg-stone-50 border border-stone-200/40 p-2.5 rounded-lg">
                          <p className="text-[9px] text-stone-400 font-mono mb-1">
                            {new Date(note.timestamp).toLocaleString("en-IN")}
                          </p>
                          <p className="text-stone-700 leading-normal font-medium">{note.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add Note Form */}
                  <form onSubmit={handleAddNote} className="flex gap-2">
                    <input
                      type="text"
                      required
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="e.g. Called Rajesh. Confirmed travel on 15 June, needs hotel booking assistance."
                      className="flex-1 px-4 py-2.5 bg-[#faf8f5] border border-[#efe9de] rounded-xl text-xs text-[#2c1a04] focus:outline-none focus:border-[#b17a20] transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-[#2c1a04] hover:bg-[#b17a20] text-white font-bold uppercase tracking-wider rounded-xl transition-colors shrink-0"
                    >
                      Add Note
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
