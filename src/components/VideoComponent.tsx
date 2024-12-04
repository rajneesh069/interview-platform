"use client";

import { useEffect, useRef } from "react";

export default function VideoComponent() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.muted = true;
        }
      } catch (error) {
        alert("Failed to access media devices. Please allow permissions.");
        console.error(error);
      }
    };

    startMedia();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        const confirmLeave = window.confirm(
          "If you switch tabs, the current tab will close. Do you want to continue?"
        );
        if (confirmLeave) {
          window.close();
        }
      }
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        const confirmExit = window.confirm(
          "If you exit fullscreen, the current tab will close. Do you want to continue?"
        );
        if (confirmExit) {
          window.close();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-[250px] md:min-w-full max-w-md border rounded-md"
      />
    </div>
  );
}
