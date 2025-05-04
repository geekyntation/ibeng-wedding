"use client"

import BrideGroom from "@/components/layout/brideGroom";
import Comments from "@/components/layout/comments";
import DateAndPlace from "@/components/layout/dateAndPlace";
import Gallery from "@/components/layout/gallery";
import Intro from "@/components/layout/intro";
import SplashScreen from "@/components/layout/splashScreen";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isSplash, setIsSplash] = useState<boolean>(true)
  const [isFading, setIsFading] = useState<boolean>(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  const onSplashClose = () => {
    setIsFading(true)
    if (audioRef.current) {
      audioRef.current.play()
    }
    setTimeout(() => {
      setIsSplash(false)
      document.body.classList.remove('overflow-hidden')
    }, 1000)
  }

  useEffect(() => {
    document.body.classList.add('overflow-hidden')
  }, [])

  return (
    <main className="w-full max-w-md mx-auto overflow-hidden">
      {isSplash && (
        <SplashScreen isFading={isFading} onClose={onSplashClose} />
      )}

      <audio loop ref={audioRef} src="/song.mp3" />

      <Intro isOnScreen={!isSplash} />
      <BrideGroom />
      <DateAndPlace />
      <Gallery />
      <Comments />
    </main>
  )
}