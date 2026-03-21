import { useRef, useState } from "react";

interface UseVoiceDictationOptions {
  /**
   * API endpoint that accepts a POST request with FormData containing an
   * `audio` File and returns `{ text: string }`.
   * Defaults to `/brian/dictate/api/transcribe`.
   */
  apiPath?: string;
  /**
   * Callback invoked with the transcribed text once available.
   */
  onTranscription?: (text: string) => void;
}

interface UseVoiceDictationResult {
  start: () => Promise<void>;
  stop: () => void;
  recording: boolean;
  transcribing: boolean;
  error: string | null;
}

/**
 * Hook that records audio from the user's microphone and sends it to a
 * transcription endpoint. Useful for adding voice controls to prototypes.
 */
function useVoiceDictation(
  options: UseVoiceDictationOptions = {},
): UseVoiceDictationResult {
  const { apiPath = "/brian/dictate/api/transcribe", onTranscription } =
    options;

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  const [recording, setRecording] = useState(false);
  const [transcribing, setTranscribing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function start() {
    setError(null);
    setTranscribing(false);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm",
      });

      recordedChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) recordedChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        setRecording(false);
        setTranscribing(true);

        const blob = new Blob(recordedChunksRef.current, {
          type: "audio/webm",
        });
        if (blob.size === 0) {
          setTranscribing(false);
          return;
        }

        const file = new File([blob], "audio.webm", { type: "audio/webm" });
        const formData = new FormData();
        formData.append("audio", file);

        try {
          const res = await fetch(apiPath, {
            method: "POST",
            body: formData,
          });

          if (!res.ok) {
            const errorJson = await res.json();
            setError(errorJson.error ?? "Transcription failed");
            setTranscribing(false);
            return;
          }

          const json = await res.json();
          const text: string = json.text ?? "";
          onTranscription?.(text);
          setTranscribing(false);
        } catch (err) {
          console.error("Transcription request failed", err);
          setError("Network error while transcribing");
          setTranscribing(false);
        }
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setRecording(true);
    } catch (err) {
      console.error("Could not start audio recording", err);
      setError("Microphone permission denied or unavailable");
    }
  }

  function stop() {
    mediaRecorderRef.current?.stop();
    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    mediaStreamRef.current = null;
  }

  return { start, stop, recording, transcribing, error };
}

export default useVoiceDictation;
