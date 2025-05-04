"use client"

import BrideGroom from "@/components/layout/brideGroom";
import Comments from "@/components/layout/comments";
import DateAndPlace from "@/components/layout/dateAndPlace";
import Gallery from "@/components/layout/gallery";
import Intro from "@/components/layout/intro";
import SplashScreen from "@/components/layout/splashScreen";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSplash, setIsSplash] = useState<boolean>(true)
  const [isFading, setIsFading] = useState<boolean>(false)

  const onSplashClose = () => {
    setIsFading(true)
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

      <Intro isOnScreen={!isSplash} />
      <BrideGroom />
      <DateAndPlace />
      <Gallery />
      <Comments />
    </main>
  )
}