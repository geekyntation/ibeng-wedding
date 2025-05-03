'use client'

import { MailIcon } from "lucide-react";
import { Croissant_One, Dancing_Script } from "next/font/google";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const labelFont = Croissant_One({ subsets: ['latin'], weight: ['400'] })
const coupleFont = Dancing_Script({ subsets: ['latin'] })

export default function SplashScreen({ isFading, onClose }: { isFading: boolean, onClose: () => void }) {
    const [guestName, setGuestName] = useState<string | null>(null)
    const searchParams = useSearchParams()
    const router = useRouter()
  
    useEffect(() => {
      const searchGuest = searchParams.get('to')
      if (searchGuest) {
        setGuestName(searchGuest)
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('guest', searchGuest ?? '')
        }
    } else {
        if (typeof window !== 'undefined') {
            const localGuest = window.localStorage.getItem('guest')
            setGuestName(localGuest)
        }
    } 
    router.replace('/')
    }, [router, searchParams])
  
    return (
        <section id="splash-screen" className={twMerge(labelFont.className, "w-full h-svh relative flex transition-opacity duration-500 ease-in-out", isFading ? 'opacity-0' : 'opacity-100')}>
            <Image src="/splash-screen.jpeg" alt="splash-scren" fill className="object-cover" />
            <div className="z-[998] bg-linear-to-b from-red-950/25 via-black/25 to-red-950/25 w-full h-svh absolute top-0 left-0" />

            <div className="z-[999] w-full flex flex-col items-center justify-between gap-8 px-6 py-14 text-white text-center">
                <h3 className="text-sm">Turut mengundang ke acara pernikahan</h3>

                <div className={twMerge(coupleFont.className, "flex flex-col gap-4 text-6xl")}>
                    <b>Renaldi</b>
                    <b>&</b>
                    <b>Wulan</b>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1 text-xs">
                        <p>Kepada Yth:</p>
                        <p>Bapak/Ibu/Saudara/i</p>
                    </div>

                    <h6 className="text-lg font-medium">{guestName}</h6>

                    <button onClick={onClose} className="w-fit mx-auto px-4 py-2 text-xs cursor-pointer rounded-md bg-orange-950/95 hover:bg-orange-950/100 transition-all text-red-50 inline-flex gap-2 justify-center items-center">
                        <MailIcon className="w-4 h-4" />
                        <p>Buka Undangan</p>
                    </button>
                </div>
            </div>
        </section>
    )
}