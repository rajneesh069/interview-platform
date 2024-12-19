import { create } from "zustand";

interface MediaStreamStore {
  videoStreamStatus: boolean;
  audioStreamStatus: boolean;
  screenSharingStatus: boolean;
  setVideoStreamStatus: (newVideoStreamStatus: boolean) => void;
  setScreenSharingStatus: (newScreenSharingStatus: boolean) => void;
  setAudioStreamStatus: (newAudioStreamStatus: boolean) => void;
}

export const mediaStreamStore = create<MediaStreamStore>((set) => ({
  videoStreamStatus: false,
  screenSharingStatus: false,
  audioStreamStatus: false,
  setVideoStreamStatus: (newVideoStreamStatus: boolean) =>
    set({ videoStreamStatus: newVideoStreamStatus }),
  setScreenSharingStatus: (newScreenSharingStatus: boolean) =>
    set({ screenSharingStatus: newScreenSharingStatus }),
  setAudioStreamStatus: (newAudioStreamStatus: boolean) =>
    set({ audioStreamStatus: newAudioStreamStatus }),
}));
