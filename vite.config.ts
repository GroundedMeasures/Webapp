import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'

// Runs the same /api/send-quote logic as api/send-quote.ts directly inside
// `vite dev`, so the quote form works locally with just `npm run dev` —
// no Vercel login/CLI needed. Production deploys still use api/send-quote.ts.
function resendDevApiPlugin(): Plugin {
  return {
    name: 'resend-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/send-quote', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Allow', 'POST');
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        try {
          const chunks: Buffer[] = [];
          for await (const chunk of req) chunks.push(chunk as Buffer);
          const body = JSON.parse(Buffer.concat(chunks).toString('utf-8') || '{}');

          const { sendQuoteEmail } = await server.ssrLoadModule('/api/_lib/quote-email.ts');
          const result = await sendQuoteEmail(body);

          res.statusCode = result.status;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(result.body));
        } catch (err) {
          console.error('resend-dev-api error:', err);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Unexpected server error' }));
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Loads .env into process.env for this Node-side config/plugin only —
  // never exposed to client code (that would require the VITE_ prefix).
  const env = loadEnv(mode, process.cwd(), '');
  process.env.PRIVATE_RESEND_API_KEY = env.PRIVATE_RESEND_API_KEY;

  return {
    plugins: [react(), tailwindcss(), resendDevApiPlugin()],
  }
})
