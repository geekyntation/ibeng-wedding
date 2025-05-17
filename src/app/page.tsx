/* eslint-disable @next/next/no-img-element */
"use client"

import ArRum from "@/components/layout/arrum";
import BrideGroom from "@/components/layout/brideGroom";
import Comments from "@/components/layout/comments";
import DateAndPlace from "@/components/layout/dateAndPlace";
import Gallery from "@/components/layout/gallery";
import Intro from "@/components/layout/intro";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

const SplashScreen = lazy(() => import('@/components/layout/splashScreen'))

export default function Home() {
  const [isSplash, setIsSplash] = useState<boolean>(true)
  const [isFading, setIsFading] = useState<boolean>(false)
  const [isClient, setIsClient] = useState<boolean>(false)

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

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <main className="w-full max-w-md mx-auto overflow-hidden">
      {isClient ? (
        <>
          {isSplash && (
            <Suspense fallback={
              <div className="w-full h-svh flex flex-col gap-1 items-center justify-center bg-red-950">
                <img src="/logo.png" className="w-10 h-10 animate-bounce duration-500" alt="loading..." />
                <p className="text-xs text-[#CFA162] animate-bounce delay-200 duration-500">Loading...</p>
              </div>
            }>
              <SplashScreen isFading={isFading} onClose={onSplashClose} />
            </Suspense>
          )}

          <audio loop ref={audioRef} src="/song.mp3" />

          <Intro isOnScreen={!isSplash} />
          <ArRum />
          <BrideGroom />
          <DateAndPlace />
          <Gallery />
          <Comments />
        </>
      ) : <div className="w-full h-svh flex flex-col gap-1 items-center justify-center bg-red-950">
        <img src="/logo.png" className="w-10 h-10 animate-bounce duration-500" alt="loading..." />
        <p className="text-xs text-[#CFA162] animate-bounce delay-200 duration-500">Loading...</p>
      </div>}
    </main>
  )
}