export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  ritual: string;
  package: string;
  date: string;
  additionalInfo?: string;
  status: "Pending" | "Called" | "Confirmed" | "Completed" | "Cancelled";
  notes: { timestamp: string; text: string }[];
  createdAt: string;
}

export interface WhatsAppLog {
  id: string;
  refId: string;
  recipient: "User" | "Admin";
  phone: string;
  message: string;
  timestamp: string;
}

const LEADS_STORAGE_KEY = "gaya_rituals_leads";
const WHATSAPP_STORAGE_KEY = "gaya_rituals_whatsapp_logs";

const MOCK_LEADS: Lead[] = [
  {
    id: "GR1001",
    name: "Rajesh Sharma",
    phone: "9876543210",
    email: "rajesh.sharma@gmail.com",
    ritual: "Pind Daan Puja",
    package: "Traditional",
    date: "2026-06-15",
    additionalInfo: "Elderly parents joining, need wheelchair assistance at Vishnupad Temple.",
    status: "Called",
    notes: [
      { timestamp: "2026-06-04T10:30:00.000Z", text: "Customer called. Wants Pind Daan. Coming on 15 June. Hotel required." }
    ],
    createdAt: "2026-06-04T09:15:00.000Z"
  },
  {
    id: "GR1002",
    name: "Amit Verma",
    phone: "7782091234",
    email: "amit.verma@yahoo.com",
    ritual: "Online Pind Daan",
    package: "Essential",
    date: "2026-06-18",
    additionalInfo: "Participating from San Francisco. Needs custom video link coordination.",
    status: "Confirmed",
    notes: [
      { timestamp: "2026-06-04T14:20:00.000Z", text: "Sankalp timing coordinated for SFO time zone. Pandit assigned." }
    ],
    createdAt: "2026-06-04T12:00:00.000Z"
  },
  {
    id: "GR1003",
    name: "Suresh Kumar",
    phone: "9123456789",
    email: "suresh.k@outlook.com",
    ritual: "Shraddh Karma",
    package: "Complete Family",
    date: "2026-06-22",
    additionalInfo: "Bringing family of 6. Requires transport facility and premium Brahmin Bhoj.",
    status: "Pending",
    notes: [],
    createdAt: "2026-06-05T02:10:00.000Z"
  }
];

export function getLeads(): Lead[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(LEADS_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(MOCK_LEADS));
    return MOCK_LEADS;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return MOCK_LEADS;
  }
}

export function getWhatsAppLogs(): WhatsAppLog[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(WHATSAPP_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveWhatsAppLog(log: WhatsAppLog) {
  if (typeof window === "undefined") return;
  const logs = getWhatsAppLogs();
  logs.unshift(log);
  localStorage.setItem(WHATSAPP_STORAGE_KEY, JSON.stringify(logs));
}

export function saveLead(leadData: Omit<Lead, "id" | "status" | "notes" | "createdAt">): Lead {
  const leads = getLeads();
  
  // Calculate next Reference ID (e.g. GR1004)
  const nextIdNum = leads.reduce((max, lead) => {
    const num = parseInt(lead.id.replace("GR", ""), 10);
    return num > max ? num : max;
  }, 1000) + 1;
  
  const refId = `GR${nextIdNum}`;
  
  const newLead: Lead = {
    ...leadData,
    id: refId,
    status: "Pending",
    notes: [],
    createdAt: new Date().toISOString()
  };
  
  leads.unshift(newLead);
  if (typeof window !== "undefined") {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
  }

  // Trigger simulated WhatsApp Notifications
  
  // 1. User Notification
  const userMsg = `Pranam. Thank you for contacting Gaya Rituals. Our coordinator will contact you shortly. Reference ID: ${refId}`;
  saveWhatsAppLog({
    id: `WA_U_${Date.now()}`,
    refId,
    recipient: "User",
    phone: leadData.phone,
    message: userMsg,
    timestamp: new Date().toISOString()
  });

  // 2. Admin Notification
  const adminMsg = `New Enquiry\nName: ${leadData.name}\nService: ${leadData.ritual}\nMobile: ${leadData.phone}\nPackage: ${leadData.package}`;
  saveWhatsAppLog({
    id: `WA_A_${Date.now()}`,
    refId,
    recipient: "Admin",
    phone: "7070719993", // Main admin phone
    message: adminMsg,
    timestamp: new Date().toISOString()
  });

  return newLead;
}

export function updateLead(updatedLead: Lead): void {
  if (typeof window === "undefined") return;
  const leads = getLeads();
  const idx = leads.findIndex(l => l.id === updatedLead.id);
  if (idx !== -1) {
    leads[idx] = updatedLead;
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
  }
}

export function cleanPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `91${digits}`;
  }
  return digits;
}

export function getEnquiryWhatsAppUrl(refId: string, name: string, ritual: string): string {
  const adminPhone = "917070719993";
  const text = `Pranam, I have submitted an enquiry on Gaya Rituals.\n\n*Reference ID:* ${refId}\n*Name:* ${name}\n*Service:* ${ritual}\n\nPlease confirm my details.`;
  
  if (typeof window !== "undefined" && typeof navigator !== "undefined") {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
      return `https://web.whatsapp.com/send?phone=${adminPhone}&text=${encodeURIComponent(text)}`;
    }
  }
  return `https://wa.me/${adminPhone}?text=${encodeURIComponent(text)}`;
}

export function getStatusWhatsAppUrl(lead: Lead): string {
  const clientPhone = cleanPhone(lead.phone);
  let text = "";
  
  switch(lead.status) {
    case "Pending":
      text = `Pranam ${lead.name}, this is Gaya Rituals. We received your enquiry (Ref: ${lead.id}) for ${lead.ritual}. Let us know a convenient time to connect and explain the procedure.`;
      break;
    case "Called":
      text = `Pranam ${lead.name}, this is Gaya Rituals. Following up on our call regarding your enquiry (Ref: ${lead.id}). Let us know if you have any questions.`;
      break;
    case "Confirmed":
      text = `Pranam ${lead.name}, this is Gaya Rituals. We are pleased to confirm your ritual booking for ${lead.ritual} on ${lead.date}. Reference ID: ${lead.id}. Our coordinator will assist you in Gaya.`;
      break;
    case "Completed":
      text = `Pranam ${lead.name}, this is Gaya Rituals. The ancestral rites for ${lead.ritual} (Ref: ${lead.id}) have been successfully completed. May your ancestors find eternal peace.`;
      break;
    case "Cancelled":
      text = `Pranam ${lead.name}, this is Gaya Rituals. Your enquiry (Ref: ${lead.id}) has been marked as cancelled/postponed. Please contact us if you wish to reschedule.`;
      break;
  }
  
  if (typeof window !== "undefined" && typeof navigator !== "undefined") {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) {
      return `https://web.whatsapp.com/send?phone=${clientPhone}&text=${encodeURIComponent(text)}`;
    }
  }
  return `https://wa.me/${clientPhone}?text=${encodeURIComponent(text)}`;
}

export function openWhatsApp(url: string): void {
  if (typeof window === "undefined") return;
  const newWindow = window.open(url, "_blank");
  if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
    window.location.href = url;
  }
}

