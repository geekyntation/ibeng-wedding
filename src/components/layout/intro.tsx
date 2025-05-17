"use client"

import { AnimatePresence, motion } from 'motion/react'
import { Croissant_One, Dancing_Script } from "next/font/google";
import { useEffect, useMemo, useState } from 'react';
import { twMerge } from "tailwind-merge";

const labelFont = Croissant_One({ subsets: ['latin'], weight: ['400'] })
const coupleFont = Dancing_Script({ subsets: ['latin'] })

export default function Intro({ isOnScreen }: { isOnScreen: boolean }) {
    const backgrounds = useMemo(() => {
        return [
            '/intro-1.jpeg',
            '/intro-2.jpeg',
            '/intro-3.jpeg',
            '/intro-4.jpeg',
        ];
    }, []);
    const [activeBackgroundImage, setActiveBackgroundImage] = useState<number>(0)
    const [loadedImages, setLoadedImages] = useState<string[]>([]);

    useEffect(() => {
        const preloadImages = () => {
            const loaded: string[] = [];
            backgrounds.forEach((src) => {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                    loaded.push(src);
                    setLoadedImages([...loaded]);
                };
            });
        };
        preloadImages();
    }, [backgrounds]);

    useEffect(() => {
        if (isOnScreen && loadedImages.length === backgrounds.length) {
            const intervalId = setInterval(() => {
                setActiveBackgroundImage((prev) => (prev >= backgrounds.length - 1 ? 0 : prev + 1));
            }, 5000);

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [isOnScreen, loadedImages, backgrounds.length]);

    return (
        <section
            id="intro"
            className="w-full h-svh flex relative z-[997] transition-all duration-1000"
            style={{
                backgroundImage: loadedImages.includes(backgrounds[activeBackgroundImage])
                    ? `url(${backgrounds[activeBackgroundImage]})`
                    : (activeBackgroundImage - 1) < 0 ? `url(${backgrounds[0]})` : `url${backgrounds[activeBackgroundImage - 1]}`,
                backgroundColor: '#000', // Fallback color
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}
        >
            <div className="z-[996] bg-linear-to-b from-red-950/25 via-black/25 to-red-950/25 w-full h-svh absolute top-0 left-0" />

            <div className="w-full z-[997] text-white h-svh px-6 py-8 flex flex-col items-center justify-center">
                <AnimatePresence>
                    {isOnScreen && (
                        <motion.div className="flex items-center justify-center flex-col gap-4">
                            <motion.p
                                className={twMerge(labelFont.className, 'text-sm')}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 2 }}
                            >
                                The Wedding Of
                            </motion.p>
                            <motion.h3
                                className={twMerge(coupleFont.className, 'text-5xl')}
                                initial={{ opacity: 0, scale: 2 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 2, delay: 2 }}
                            >
                                Renaldi & Wulan
                            </motion.h3>
                            <motion.p
                                className={twMerge(labelFont.className, 'text-sm')}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 2, delay: 3 }}
                            >
                                07.07.2025
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}