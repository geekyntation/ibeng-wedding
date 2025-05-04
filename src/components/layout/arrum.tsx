import { Scheherazade_New } from "next/font/google"
import { twMerge } from "tailwind-merge"
import { motion } from 'motion/react'

const arabFont = Scheherazade_New({ subsets: ['arabic'], weight: ['400', '500', '600', '700'] })

export default function ArRum() {
    return (
        <div
            className="w-full px-6 py-8 relative flex flex-col gap-8 items-center justify-center text-white"
            style={{
                backgroundImage: 'url(texture.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        >
            <div className="z-0 bg-linear-to-b from-red-950/50 via-black/50 to-red-950/50 w-full h-svh absolute top-0 left-0" />

            <motion.div
                className={twMerge(arabFont.className, 'w-full z-50 text-center flex flex-col gap-2 text-2xl/14')}
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.3 }}
            >
            <p className="text-sm">{'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ'}</p>
            <p>{'وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ ۝٢١'}</p>
            </motion.div>
            <motion.p
                className="text-xs text-white text-center text-balance italic z-50"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 0.4 }}
            >
                Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir. (QS. Ar-Rum:21)
            </motion.p>
        </div>
    )
}