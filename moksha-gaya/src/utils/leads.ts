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

const LEADS_STORAGE_KEY = "moksha_gaya_leads";
const WHATSAPP_STORAGE_KEY = "moksha_gaya_whatsapp_logs";

const MOCK_LEADS: Lead[] = [
  {
    id: "MG1001",
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
    id: "MG1002",
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
    id: "MG1003",
    name: "Suresh Kumar",
    phone: "9123456789",
    email: "suresh.k@outlook.com",
    ritual: "Shraddh Karma",
    package: "Complete Family",
    date: "2026-06-22",
    additionalInfo: "Bringing family of 6. Requires AC SUV transfer and premium Brahmin Bhoj.",
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
  } catch (e) {
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
  
  // Calculate next Reference ID (e.g. MG1004)
  const nextIdNum = leads.reduce((max, lead) => {
    const num = parseInt(lead.id.replace("MG", ""), 10);
    return num > max ? num : max;
  }, 1000) + 1;
  
  const refId = `MG${nextIdNum}`;
  
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
  const userMsg = `Pranam. Thank you for contacting Moksha Gaya. Our coordinator will contact you shortly. Reference ID: ${refId}`;
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
    phone: "7782099739", // Main admin phone
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
  const adminPhone = "917782099739";
  const text = `Pranam, I have submitted an enquiry on Moksha Gaya.\n\n*Reference ID:* ${refId}\n*Name:* ${name}\n*Service:* ${ritual}\n\nPlease confirm my details.`;
  return `https://wa.me/${adminPhone}?text=${encodeURIComponent(text)}`;
}

export function getStatusWhatsAppUrl(lead: Lead): string {
  const clientPhone = cleanPhone(lead.phone);
  let text = "";
  
  switch(lead.status) {
    case "Pending":
      text = `Pranam ${lead.name}, this is Moksha Gaya. We received your enquiry (Ref: ${lead.id}) for ${lead.ritual}. Let us know a convenient time to connect and explain the procedure.`;
      break;
    case "Called":
      text = `Pranam ${lead.name}, this is Moksha Gaya. Following up on our call regarding your enquiry (Ref: ${lead.id}). Let us know if you have any questions.`;
      break;
    case "Confirmed":
      text = `Pranam ${lead.name}, this is Moksha Gaya. We are pleased to confirm your ritual booking for ${lead.ritual} on ${lead.date}. Reference ID: ${lead.id}. Our coordinator will assist you in Gaya.`;
      break;
    case "Completed":
      text = `Pranam ${lead.name}, this is Moksha Gaya. The ancestral rites for ${lead.ritual} (Ref: ${lead.id}) have been successfully completed. May your ancestors find eternal peace (Moksha).`;
      break;
    case "Cancelled":
      text = `Pranam ${lead.name}, this is Moksha Gaya. Your enquiry (Ref: ${lead.id}) has been marked as cancelled/postponed. Please contact us if you wish to reschedule.`;
      break;
  }
  
  return `https://wa.me/${clientPhone}?text=${encodeURIComponent(text)}`;
}

