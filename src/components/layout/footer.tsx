import { ExternalLinkIcon } from "lucide-react"
import { Raleway } from "next/font/google"
import { twMerge } from "tailwind-merge"

const raleway = Raleway({ subsets: ['latin'] })

export default function Footer() {
    return (
        <section id="footer" className={twMerge(raleway.className, "w-full px-6 py-2 text-center text-white text-xs")}>
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