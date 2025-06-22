import { useRef } from "react";

export function useNotificationSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function play() {
    if (!audioRef.current) {
      audioRef.current = new Audio("/noti.mp3");
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }
  return play;
}
