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
            className="w-full min-h-svh overflow-hidden"
            style={{
                backgroundImage: 'url(/texture.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                filter: 'brightness(1)',
            }}
        >
            <div className="w-full h-full bg-black/50 absolute top-0 left-0 z-0" />
            <div className="w-full flex flex-col gap-8 px-6 py-8 justify-center items-center z-50 text-white">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                    className={twMerge(labelFont.className, "z-50 text-sm text-balance text-center flex flex-col gap-2")}
                >
                    <p className="z-50 text-center italic">{"Assalamu'alaikum Wr Wb"}</p>
                    <p className={twMerge(raleway.className, "z-50 text-center text-balance text-xs")}>Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara resepsi pernikahan kami</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="flex flex-col gap-2 z-50 items-center justify-center relative"
                >
                    <div className="w-48 h-72 z-50 rounded-full border border-white object-cover overflow-hidden bg-[url(/groom.jpeg)] bg-cover bg-top" />

                    <p className={twMerge(labelFont.className, "z-50 text-xl")}>Renaldi Dwi Putra</p>
                    <p className={twMerge(raleway.className, "z-50 text-center text-xs")}>Putra kedua dari Bpk. Tatang Suherman dan Ibu. Dewi Utami</p>
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
                    <div className="w-48 h-72 z-50 rounded-full border border-white object-cover overflow-hidden bg-[url(/gallery-3.jpeg)] bg-cover bg-center" />

                    <p className={twMerge(labelFont.className, "z-50 text-xl")}>Wulan Sari Anggraeni</p>
                    <p className={twMerge(raleway.className, "z-50 text-center text-xs")}>Putri pertama dari Bpk. Ade Ruhyat dan Ibu. Iis Aisyah</p>
                </motion.div>
            </div>
        </section>
    )
}