"use client"

import SplashScreen from "@/components/layout/splashScreen";
import { useState } from "react";

export default function Home() {
  const [isSplash, setIsSplash] = useState<boolean>(true)
  const [isFading, setIsFading] = useState<boolean>(false)

  const onSplashClose = () => {
    setIsFading(true)
    setTimeout(() => {
      setIsSplash(false)
    }, 500)
  }
  return (
    <main className="w-full max-w-md mx-auto">
      {isSplash && (
        <SplashScreen isFading={isFading} onClose={onSplashClose} />
      )}
    </main>
  )
}