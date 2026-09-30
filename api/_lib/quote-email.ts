import { Resend } from "resend";
import { CONTACT } from "../../src/constants";

// Base64 encoding inflates size ~33%, and Vercel hard-caps function request
// bodies at 4.5MB (unconfigurable) — so raw files must stay well under that.
const MAX_TOTAL_ATTACHMENT_BYTES = 3 * 1024 * 1024;

export interface QuoteAttachment {
  filename: string;
  content: string; // base64, no data: prefix
}

export interface QuoteRequestBody {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  projectName: string;
  bidDueDate: string;
  notes?: string;
  fileNames?: string[];
  attachments?: QuoteAttachment[];
  attachmentsSkipped?: boolean;
}

export interface QuoteEmailResult {
  status: number;
  body: { ok: true } | { error: string };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendQuoteEmail(body: Partial<QuoteRequestBody>): Promise<QuoteEmailResult> {
  if (!process.env.PRIVATE_RESEND_API_KEY) {
    console.error("PRIVATE_RESEND_API_KEY is not configured");
    return { status: 500, body: { error: "Email service is not configured" } };
  }

  const required = ["companyName", "contactName", "phone", "email", "projectName", "bidDueDate"] as const;
  const missing = required.filter((field) => !body[field]);
  if (missing.length > 0) {
    return { status: 400, body: { error: `Missing required field(s): ${missing.join(", ")}` } };
  }

  const attachments = Array.isArray(body.attachments) ? body.attachments : [];
  const totalAttachmentBytes = attachments.reduce((sum, file) => sum + file.content.length * 0.75, 0);
  if (totalAttachmentBytes > MAX_TOTAL_ATTACHMENT_BYTES) {
    return { status: 413, body: { error: "Attachments too large" } };
  }

  const fileList = body.fileNames?.length
    ? body.fileNames.map((name) => `<li>${escapeHtml(name)}</li>`).join("")
    : "<li><em>No files attached</em></li>";

  const attachmentNote = body.attachmentsSkipped
    ? `<p style="color:#b45309"><strong>Note:</strong> uploaded files were too large to email automatically. Follow up with the contractor directly for the plan set.</p>`
    : "";

  const html = `
    <h2>New Quote Request</h2>
    <p><strong>Firm:</strong> ${escapeHtml(body.companyName!)}</p>
    <p><strong>Contact:</strong> ${escapeHtml(body.contactName!)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(body.phone!)}</p>
    <p><strong>Email:</strong> ${escapeHtml(body.email!)}</p>
    <p><strong>Project:</strong> ${escapeHtml(body.projectName!)}</p>
    <p><strong>Bid Due Date:</strong> ${escapeHtml(body.bidDueDate!)}</p>
    <p><strong>Notes:</strong><br>${body.notes ? escapeHtml(body.notes).replace(/\n/g, "<br>") : "<em>None</em>"}</p>
    <p><strong>Files:</strong></p>
    <ul>${fileList}</ul>
    ${attachmentNote}
  `;

  const resend = new Resend(process.env.PRIVATE_RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: "Grounded Measures Intake <onboarding@resend.dev>",
      to: CONTACT.email,
      replyTo: body.email!,
      subject: `New Quote Request: ${body.projectName}`,
      html,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return { status: 502, body: { error: "Failed to send email" } };
    }

    return { status: 200, body: { ok: true } };
  } catch (err) {
    console.error("Unexpected error sending quote request:", err);
    return { status: 500, body: { error: "Unexpected server error" } };
  }
}
