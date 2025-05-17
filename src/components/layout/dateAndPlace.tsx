"use client"

import { Croissant_One, Raleway } from "next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from 'motion/react'
import { useEffect, useState } from "react";
import moment from 'moment'

const labelFont = Croissant_One({ subsets: ['latin'], weight: ['400'] })
const raleway = Raleway({ subsets: ['latin'] })

export default function DateAndPlace() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = moment()
            const targetDate = moment('07-07-2025, 07:00')
            const difference = targetDate.diff(now);

            if (difference <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="date-place"
            className="w-full min-h-svh relative flex"
        >
            <Image src="/date-and-place-1.jpeg" alt="Date and place" className="object-cover z-0" fill />
            <div className="z-0 bg-linear-to-b from-red-950/50 via-black/50 to-red-950/50 w-full h-[150vh] absolute top-0 left-0" />

            <div className="w-full flex flex-col gap-8 text-white z-50 items-center justify-between px-6 py-8">
                <div className="w-full flex flex-col gap-4 items-center">
                    <motion.p
                        className={twMerge(labelFont.className, 'text-lg')}
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                    >
                        Waktu dan Tempat
                    </motion.p>
                    <motion.div
                        className="grid grid-cols-5 gap-4"
                        initial={{ opacity: 0, scale: 1.2 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    >
                        <p className={twMerge(labelFont.className, "col-span-2 text-6xl")}>07</p>
                        <div className="w-px h-full bg-white col-span-1 place-self-center" />
                        <div className="flex flex-col justify-around h-full col-span-2">
                            <p className={twMerge(labelFont.className, "text-3xl")}>Juli</p>
                            <p className={twMerge(labelFont.className, "text-3xl")}>2025</p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="grid grid-cols-5 gap-4"
                    initial={{ opacity: 0, scale: 1.2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                >
                    <div className="col-span-2 flex flex-col gap-2">
                        <p className={twMerge(labelFont.className, "text-lg text-center")}>Akad</p>
                        <div className="flex flex-col justify-around items-center h-full">
                            <p className={twMerge(raleway.className, "text-lg font-medium")}>07:00</p>
                            <div className="w-full relative flex items-center">
                                <div className="flex-grow border-t border-white"></div>
                                <span className={twMerge(raleway.className, "flex-shrink mx-1 text-white")}>s.d</span>
                                <div className="flex-grow border-t border-white"></div>
                            </div>

                            <p className={twMerge(raleway.className, "font-medium text-lg")}>09:00</p>
                        </div>
                    </div>
                    <div className="col-span-1 place-self-center w-px h-full bg-white" />
                    <div className="col-span-2 flex flex-col gap-2">
                        <p className={twMerge(labelFont.className, "text-lg text-center")}>Resepsi</p>
                        <div className="flex flex-col justify-around items-center h-full">
                            <p className={twMerge(raleway.className, "text-lg font-medium")}>09:00</p>
                            <div className="w-full relative flex items-center">
                                <div className="flex-grow border-t border-white"></div>
                                <span className={twMerge(raleway.className, "flex-shrink mx-1 text-white")}>s.d</span>
                                <div className="flex-grow border-t border-white"></div>
                            </div>

                            <p className={twMerge(raleway.className, "font-medium text-lg")}>Selesai</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 1.2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 0.3 }}
                    className="col-span-5"
                >
                    <div className="w-full inline-flex items-center justify-between gap-2">
                        {[
                            { label: 'Hari', value: timeLeft.days },
                            { label: 'Jam', value: timeLeft.hours },
                            { label: 'Menit', value: timeLeft.minutes },
                            { label: 'Detik', value: timeLeft.seconds },
                        ].map((item) => (
                            <div key={item.label} className="flex shrink-0 flex-col px-4 py-2 text-center rounded-md bg-red-950/65 backdrop-blur-sm">
                                <span className="text-4xl font-bold text-white">{item.value.toString().padStart(2, '0')}</span>
                                <span className="text-sm text-neutral-50">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center gap-4 justify-self-end"
                    initial={{ opacity: 0, scale: 1.2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                >
                    <div className="flex flex-col gap-2">
                        <p className={twMerge(labelFont.className, 'text-center text-lg')}>Lokasi Acara</p>
                        <p className={twMerge(raleway.className, 'text-center text-xs')}>Wado Girang RT005 RW003, Ds. Wado, Kec. Wado, Kab. Sumedang, Jawa Barat</p>
                    </div>

                    <motion.div
                        className="w-64 rounded-md h-full aspect-square overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3960.5097368251013!2d108.09102677499676!3d-6.949038193051174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTYnNTYuNSJTIDEwOMKwMDUnMzcuMCJF!5e0!3m2!1sid!2sid!4v1746331919745!5m2!1sid!2sid" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </motion.div>
                </motion.div>
            </div>

        </section>
    )
}