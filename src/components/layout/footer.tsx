import { ExternalLinkIcon } from "lucide-react"
import { Dancing_Script, Raleway } from "next/font/google"
import { twMerge } from "tailwind-merge"

const raleway = Raleway({ subsets: ['latin'] })
const ds = Dancing_Script({ subsets: ['latin'] })

export default function Footer() {
    return (
        <section id="footer" className={twMerge(raleway.className, "w-full flex flex-col gap-8 px-6 py-2 text-center text-white text-xs")}>
            <div className="w-full flex flex-col gap-2">
                <p className="text-center">{"Atas kehadiran dan do'a restu Bapak/Ibu/Saudara/i sekalian, kami mengucapkan banyak Terima Kasih."}</p>

                <div className="flex flex-col gap-2">
                    <p>{"Kami yang Berbahagia"}</p>

                    <p className={twMerge(ds.className, 'text-4xl')}>Renaldi & Wulan</p>
                </div>
            </div>
            <span>
                <span>Built with 🤍 by </span>
                <a href="https://wa.link/2p96tr" target="_blank" className="inline-flex items-center gap-1 underline">
                    <span>Geekyntation</span>
                    <ExternalLinkIcon className="w-3 h-3" />
                </a>
            </span>
        </section>
    )
}