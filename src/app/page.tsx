"use client"

import Intro from "@/components/layout/intro";
import SplashScreen from "@/components/layout/splashScreen";
import { useState } from "react";

export default function Home() {
  const [isSplash, setIsSplash] = useState<boolean>(true)
  const [isFading, setIsFading] = useState<boolean>(false)

  const onSplashClose = () => {
    setIsFading(true)
    setTimeout(() => {
      setIsSplash(false)
    }, 1000)
  }
  return (
    <main className="w-full max-w-md mx-auto overflow-hidden">
      {isSplash && (
        <SplashScreen isFading={isFading} onClose={onSplashClose} />
      )}

      <Intro isOnScreen={!isSplash} />
    </main>
  )
}