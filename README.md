# Google Calendar MCP Integration

This project provides an initial integration with Google Calendar using MCP (Model Context Protocol), built with Node.js and TypeScript.

## Features
- Schedule meetings in Google Calendar via API
- Secure handling of sensitive credentials using environment variables
- Ready for use with Windsurf or other MCP-compatible tools

---

## Prerequisites
- Node.js (v16+ recommended)
- Google Cloud Platform (GCP) account
- Google Calendar API enabled in your GCP project

---

## Getting Started

### 1. Create a Google Cloud Project and Enable Calendar API
1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select an existing one)
3. Navigate to **APIs & Services > Library**
4. Search for **Google Calendar API** and enable it
5. Go to **APIs & Services > Credentials**
6. Click **Create Credentials > OAuth client ID**
7. Configure the consent screen and set the redirect URI (e.g., `http://localhost:3000/oauth2callback`)
8. Download your client ID and client secret

### 2. Set Up Environment Variables
Create a `.env` file in the root directory with the following content:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=http://localhost:3000/oauth2callback
PORT=3000
```

**Never commit your `.env` file or sensitive credentials to version control.**

---

### 3. Install Dependencies
```bash
pnpm install
```

---

### 4. Run the Server

You can run the server directly with:
```bash
npx -y tsx src/app.ts
```

Or, for convenience, add the following script to your `package.json`:

```json
"scripts": {
  "start": "tsx src/app.ts"
}
```
Then you can simply run:
```bash
pnpm start
```

The server will start and be ready to handle Google Calendar API requests.

---

## Using MCP & Windsurf

1. **Add this project as an MCP tool in Windsurf:**
   - In Windsurf, add your project directory as a workspace.
   - Select the MCP tool for Google Calendar integration.

2. **Interact with the tool:**
   - Use Windsurf's chat or tool interface to schedule meetings, passing the required details (title, participants, date/time, etc.).
   - **Important:** Always provide a valid Google access token when prompted. Never share or display your access token in logs or chat responses.

---

## Security Notes
- The `.env` file and all sensitive credentials are excluded via `.gitignore`.
- Never expose your access token or secrets in logs, chat, or public repositories.

---

## License
MIT
