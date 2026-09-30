import type { IncomingMessage, ServerResponse } from "node:http";
import { sendQuoteEmail, type QuoteRequestBody } from "./_lib/quote-email";

// Minimal shape of the request/response objects Vercel's Node.js runtime
// actually provides at runtime (see https://vercel.com/docs/functions/runtimes/node-js).
// Typed by hand here instead of depending on @vercel/node.
type VercelRequest = IncomingMessage & { body: unknown };
type VercelResponse = ServerResponse & {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const result = await sendQuoteEmail(req.body as Partial<QuoteRequestBody>);
  return res.status(result.status).json(result.body);
}
