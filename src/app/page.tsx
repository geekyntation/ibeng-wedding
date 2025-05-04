"use client"

import BrideGroom from "@/components/layout/brideGroom";
import Comments from "@/components/layout/comments";
import DateAndPlace from "@/components/layout/dateAndPlace";
import Gallery from "@/components/layout/gallery";
import Intro from "@/components/layout/intro";
import { Loader2Icon } from "lucide-react";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

const SplashScreen = lazy(() => import('@/components/layout/splashScreen'))

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
        <Suspense fallback={
          <div className="w-full h-svh grid place-items-center bg-red-950 brightness-75">
            <Loader2Icon className="w-8 h-8 animate-spin" />
          </div>
        }>
          <SplashScreen isFading={isFading} onClose={onSplashClose} />
        </Suspense>
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