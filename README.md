# Watch Video, Dream in Hand - Direct Selling & MLM ERP

Production-ready Direct Selling, Dual-Leg Binary MLM ERP, E-Commerce Storefront, Order & Delivery Tracking, and Login ID-Based BP Wallet System.

---

## 🌐 Hostycare Deployment Guide (Recommended for Full-Stack + SQLite)

This application includes a React + Vite frontend (`dist/`), an Express.js backend (`dist/server.cjs`), and a persistent SQLite database (`data/wdh_ecommerce.db`), making it ideal for **Hostycare Node.js Hosting (cPanel)** or **Hostycare VPS**.

### Option A: Hostycare cPanel ("Setup Node.js App")

1. **Build Locally or on Server**:
   - Ensure dependencies are installed and the production bundle is built:
     ```bash
     npm install
     npm run build
     ```
   - This generates `dist/` (frontend static files + `dist/server.cjs` production server).
2. **Upload Project Files to Hostycare**:
   - In **cPanel > File Manager**, create an application folder outside `public_html` (for example: `/home/yourusername/wdh-app`).
   - Upload the project files (`dist/`, `package.json`, `app.js`, `.env.example`, etc. — exclude `node_modules/` and `data/` before uploading).
3. **Create the Node.js Application in cPanel**:
   - Open **cPanel > Software > Setup Node.js App > Create Application**.
   - Configure the following fields:
     - **Node.js version**: `20.x` or `22.x` (Recommended)
     - **Application mode**: `Production`
     - **Application root**: `wdh-app` (the folder you uploaded to)
     - **Application URL**: Your domain or subdomain (e.g., `yourdomain.com`)
     - **Application startup file**: `app.js` (or `dist/server.cjs`)
   - Click **Create**.
4. **Configure Environment Variables**:
   - In the same **Setup Node.js App** screen (or via `.env` in `wdh-app`), add:
     - `NODE_ENV` = `production`
     - `GEMINI_API_KEY` = *(Optional)* Your Gemini API key for AI Advisory
     - `RAZORPAY_KEY_ID` = *(Optional)* Your Razorpay Key ID for online payments
     - `RAZORPAY_KEY_SECRET` = *(Optional)* Your Razorpay Key Secret for payment verification
   - Note: `PORT` is managed automatically by Hostycare/Passenger.
5. **Install Production Dependencies & Start**:
   - Click **Run NPM Install** in the cPanel Node.js App panel (or via cPanel Terminal inside the virtual environment: `npm install --omit=dev`).
   - Click **Restart** (or **Start App**).
   - Visit your domain — the storefront, API, and SQLite database (`data/wdh_ecommerce.db`) will initialize automatically.

### Option B: Hostycare VPS (Ubuntu / Nginx / PM2)

```bash
git clone <your-repo-url> wdh-app
cd wdh-app
cp .env.example .env   # Fill in keys if needed
npm install
npm run build
npm install -g pm2
pm2 start dist/server.cjs --name wdh-erp
pm2 save
```
Configure Nginx as a reverse proxy forwarding port `80`/`443` to `http://127.0.0.1:3000`.
