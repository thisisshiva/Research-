export async function POST(req: Request) {
    const formData = await req.formData();
    const recordingUrl = formData.get("RecordingUrl");
  
    console.log("Recording URL:", recordingUrl);
  
    // Download MP3 and send to Whisper, then to GPT
    // Store lead data in your DB
  
    return new Response("<Response></Response>", {
      headers: {
        "Content-Type": "text/xml"
      }
    });
  }
  