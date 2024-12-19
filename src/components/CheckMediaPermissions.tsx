"use client";

import { mediaStreamStore } from "@/store/streams";
import { useEffect } from "react";

export default function CheckMediaPermissions() {
  const {
    videoStreamStatus,
    audioStreamStatus,
    screenSharingStatus,
    setScreenSharingStatus,
  } = mediaStreamStore();

  useEffect(() => {
    let screen: MediaStream | null = null;
    async function getScreenSharingPermissions() {
      try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
        });
        screen = screenStream;
        setScreenSharingStatus(true);
      } catch (error) {
        setScreenSharingStatus(false);
        console.error(error);
      }
    }

    getScreenSharingPermissions();

    return () => {
      if (screen) {
        screen.getTracks().forEach((track) => track.stop());
      }
    };
  }, [setScreenSharingStatus, screenSharingStatus]);

  if (typeof window === "undefined") return null;

  return (
    <div>
      <ol className="list-decimal pl-5">
        <li>Video : {videoStreamStatus ? "Enabled" : "Disabled"}</li>
        <li>Microphone : {audioStreamStatus ? "Enabled" : "Disabled"}</li>
        <li>Screen Sharing : {screenSharingStatus ? "Enabled" : "Disabled"}</li>
      </ol>
    </div>
  );
}
