"use client";

import { mediaStreamStore } from "@/store/streams";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function StartInterview() {
  const {
    videoStreamStatus,
    audioStreamStatus,
    screenSharingStatus,
    setScreenSharingStatus,
    setAudioStreamStatus,
    setVideoStreamStatus,
  } = mediaStreamStore();
  const router = useRouter();

  async function handleInterviewStart() {
    if (videoStreamStatus && audioStreamStatus && screenSharingStatus) {
      router.push("/start");
      return;
    }

    if (!videoStreamStatus) {
      alert("Please enable the camera permissions.");
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        setVideoStreamStatus(true);
      } catch (error) {
        console.error(error);
        setVideoStreamStatus(false);
      }
    }

    if (!audioStreamStatus) {
      alert("Please enable the audio permissions.");
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setAudioStreamStatus(true);
      } catch (error) {
        console.error(error);
        setAudioStreamStatus(false);
      }
    }

    if (!screenSharingStatus) {
      alert("Please enable the screen sharing permissions.");
      try {
        await navigator.mediaDevices.getDisplayMedia({ video: true });
        setScreenSharingStatus(true);
      } catch (error) {
        console.error(error);
        setScreenSharingStatus(false);
      }
    }
  }

  return (
    <div>
      <Button
        className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-6 text-lg"
        size="lg"
        onClick={handleInterviewStart}
      >
        Start Interview
      </Button>
    </div>
  );
}
