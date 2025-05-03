import { Croissant_One, Dancing_Script, Raleway } from "next/font/google"
import { twMerge } from "tailwind-merge"
import { motion } from 'motion/react'

const labelFont = Croissant_One({ subsets: ['latin'], weight: ['400'] })
const raleway = Raleway({ subsets: ['latin'] })
const coupleFont = Dancing_Script({ subsets: ['latin'] })

export default function BrideGroom() {
    return (
        <section
            id="bride-groom"
            className="w-full min-h-svh"
            style={{
                backgroundImage: 'url(/texture.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                filter: 'brightness(1)',
            }}
        >
            <div className="w-full h-[150svh] bg-black/50 absolute top-0 left-0 z-0" />
            <div className="w-full flex flex-col gap-8 px-6 py-8 justify-center items-center z-50 text-white">
                <motion.p
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className={twMerge(labelFont.className, "z-50 text-lg text-balance text-center")}
                >
                    Mengharapkan Kehadiran di Acara Pernikahan
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="flex flex-col gap-2 z-50 items-center justify-center relative"
                >
                    <div className="w-48 h-48 rounded-full border border-white object-cover overflow-hidden bg-[url(/groom.jpeg)] bg-cover bg-center" />

                    <p className={twMerge(labelFont.className, "text-xl")}>Renaldi Dwi Putra</p>
                    <p className={twMerge(raleway.className, "text-center text-xs")}>Putra kedua dari Bpk. Joko Widodo dan Ibu. Iriana Joko Widodo</p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 0.7 }}
                    className={twMerge(coupleFont.className, 'text-6xl text-white z-50')}
                >
                    &
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="flex flex-col gap-2 z-50 items-center justify-center relative"
                >
                    <div className="w-48 h-48 rounded-full border border-white object-cover overflow-hidden bg-[url(/bride.jpeg)] bg-cover bg-center" />

                    <p className={twMerge(labelFont.className, "text-xl")}>Wulan</p>
                    <p className={twMerge(raleway.className, "text-center text-xs")}>Putra pertama dari Bpk. Prabowo Subianto dan Bpk. Mayor Teddy</p>
                </motion.div>
            </div>
        </section>
    )
}