import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="content">
      <section className="hero">
        <div className="hero-left">
          <h1>Automated AI Music + Video Agent for n8n</h1>
          <p>
            Generate rhyme ideas, log to Google Sheets, synthesize audio with optional music backing, render video, upload to YouTube, and save logs ? fully automated with free tools and n8n.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#download">
              Download n8n Workflow
            </a>
            <a className="btn" href="#setup">
              Setup Guide
            </a>
          </div>
        </div>
        <div className="hero-right">
          <Image
            src="/hero.svg"
            alt="n8n automated AI agent"
            width={560}
            height={360}
            priority
          />
        </div>
      </section>

      <section id="workflow" className="section">
        <h2>Workflow Overview</h2>
        <ol className="steps">
          <li>
            Rhyme Idea Generation:
            <ul>
              <li>Use Datamuse API to get rhymes and related words.</li>
              <li>Optional: Enhance with OpenRouter LLM (free-tier models) for structure.</li>
            </ul>
          </li>
          <li>
            Log to Google Sheets:
            <ul>
              <li>Append generated lyrics, topic, and metadata to a Sheet.</li>
            </ul>
          </li>
          <li>
            Create Voiceover/Audio:
            <ul>
              <li>Use ElevenLabs, Coqui, or OpenRouter TTS via HTTP Request (free tiers).</li>
              <li>Optional: Add AI music bed via Hugging Face Inference (MusicGen) or Replicate.</li>
            </ul>
          </li>
          <li>
            Video Generation:
            <ul>
              <li>Create a lyric video with waveform and background using a render microservice or external API.</li>
              <li>Template includes a simple composition step with image + audio.</li>
            </ul>
          </li>
          <li>
            Upload to YouTube:
            <ul>
              <li>Use n8n&apos;s YouTube node with OAuth2 credentials to upload the MP4.</li>
            </ul>
          </li>
          <li>
            Save Run Log:
            <ul>
              <li>Append status, links, and IDs back to Google Sheets.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="setup" className="section">
        <h2>Setup (Free Tools)</h2>
        <ul>
          <li>
            n8n: Self-host or n8n Cloud. Import the workflow JSON below and configure
            credentials for Google Sheets, YouTube, and any TTS/music APIs you choose.
          </li>
          <li>
            Google Sheets: Create a Sheet with headers: topic, lyrics, audioUrl, videoUrl,
            youtubeVideoId, status, timestamp.
          </li>
          <li>
            Optional Providers:
            <ul>
              <li>OpenRouter API key (free-tier models).</li>
              <li>ElevenLabs or Coqui TTS free-tier keys.</li>
              <li>Hugging Face Inference or Replicate for MusicGen.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="download" className="section">
        <h2>Download</h2>
        <p>
          Import this workflow into n8n and fill in credentials. The template is modular and
          uses only free tools by default (Datamuse + Google Sheets). Enable optional TTS and
          music steps by providing API keys in the HTTP Request nodes.
        </p>
        <div className="download-card">
          <div>
            <h3>n8n Workflow Template</h3>
            <p className="muted">Includes idea generation, Sheets logging, optional TTS/music, video, YouTube, and logging.</p>
          </div>
          <a className="btn primary" href="/n8n/ai-music-video-agent.json" download>
            Download JSON
          </a>
        </div>
      </section>
    </div>
  );
}

