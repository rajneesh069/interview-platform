"use client";

import { mediaStreamStore } from "@/store/streams";
import { useEffect, useRef } from "react";

export default function VideoComponent() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const {
    setVideoStreamStatus,
    setAudioStreamStatus,
    audioStreamStatus,
    videoStreamStatus,
  } = mediaStreamStore();
  useEffect(() => {
    let video: MediaStream | null = null;
    let audio: MediaStream | null = null;
    async function getCameraAndMicrophoneStreams() {
      try {
        const videoStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        video = videoStream;
        if (videoRef.current) {
          videoRef.current.srcObject = videoStream;
        }
        setVideoStreamStatus(true);
        const audioStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        audio = audioStream;
        setAudioStreamStatus(true);
      } catch (error) {
        console.error(error);
        setVideoStreamStatus(false);
        setAudioStreamStatus(false);
      }
    }

    getCameraAndMicrophoneStreams();

    return () => {
      if (video) {
        video.getTracks().forEach((track) => track.stop());
      }
      if (audio) {
        audio.getTracks().forEach((track) => track.stop());
      }
    };
  }, [
    setAudioStreamStatus,
    setVideoStreamStatus,
    audioStreamStatus,
    videoStreamStatus,
  ]);

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <video ref={videoRef} autoPlay playsInline className="rounded-md" muted />
    </div>
  );
}
