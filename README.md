# n8n Automated AI Music + Video Agent (Free Tools)

This repository contains a deployable Next.js site with:

- Documentation for setting up an advanced n8n automation pipeline that:
  - Generates rhyme ideas (free Datamuse API, optional OpenRouter LLM)
  - Logs to Google Sheets
  - Creates audio with free-tier TTS providers (e.g., ElevenLabs, Coqui)
  - Renders a simple lyric video (via your render API or self-hosted ffmpeg)
  - Uploads to YouTube
  - Writes final logs back to Sheets
- A downloadable n8n workflow template under `public/n8n/ai-music-video-agent.json`

## Quick Start

1) Install dependencies
```bash
npm install
```

2) Run locally
```bash
npm run dev
```

3) Build
```bash
npm run build
```

4) Deploy to Vercel (production)
```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-6c7ad1a8
```

Then open: https://agentic-6c7ad1a8.vercel.app

## n8n Workflow

Download from the website or directly from:
`public/n8n/ai-music-video-agent.json`

Import into n8n, then:
- Set `GOOGLE_SHEETS_OAUTH` credentials for the Google Sheets nodes.
- Set `YOUTUBE_OAUTH` credentials for the YouTube node.
- Optional: provide TTS keys (e.g., `ELEVENLABS_API_KEY`) in node params/headers.
- Replace the placeholder render API with your service, or:
  - Use an n8n self-hosted instance with an Execute Command node invoking `ffmpeg` to combine a static background image with the generated audio into MP4.

## Google Sheets
Create a sheet with headers:
`topic, lyrics, audioUrl, videoUrl, youtubeVideoId, status, timestamp`

## Triggers
Use the Webhook Trigger node. Send a POST with JSON:
```json
{ "topic": "sunrise", "ELEVENLABS_API_KEY": "..." }
```
`topic` is required for rhyme generation. TTS is optional.

## Notes
- All referenced services have free tiers but may require API keys and have limits.
- YouTube upload requires OAuth2; use n8n's built-in credentials.
- For video rendering, you can swap in any free/hosted API or run your own renderer.