// /app/api/inbound-call/route.ts (for App Router)
import { NextResponse } from "next/server";
import { twiml } from "twilio";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(_req: Request) {
  const VoiceResponse = twiml.VoiceResponse;
  const response = new VoiceResponse();

  // Basic greeting – replace with ElevenLabs MP3 later
  response.say(
    {
      voice: "alice", // basic TTS from Twilio
      language: "en-US",
    },
    "Hi! Thanks for calling. Please tell me what you're looking for."
  );

  // Start recording
  response.record({
    action: "/api/handle-recording", // handle recorded audio here
    method: "POST",
    maxLength: 30,
    playBeep: true,
    trim: "do-not-trim",
  });

  const xml = response.toString();

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
