import { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { Croissant_One } from "next/font/google";

const labelFont = Croissant_One({ subsets: ['latin'], weight: ['400'] })

export default function Gallery() {
    const photos = [
        { src: '/gallery-1.jpeg', width: 2321, height: 3480 },
        { src: '/gallery-2.jpeg', width: 2321, height: 3480 },
        { src: '/gallery-3.jpeg', width: 2321, height: 3480 },
        { src: '/gallery-4.jpeg', width: 2321, height: 3480 },
        { src: '/gallery-5.jpeg', width: 3480, height: 2321 },
        { src: '/gallery-6.jpeg', width: 2321, height: 3480 },
        { src: '/gallery-7.jpeg', width: 2321, height: 3480 },
        { src: '/gallery-8.jpeg', width: 2321, height: 3480 },
        { src: '/gallery-9.jpeg', width: 3480, height: 2321 },
        { src: '/gallery-10.jpeg', width: 2321, height: 3423 },
        { src: '/gallery-11.jpeg', width: 2321, height: 3439 },
        { src: '/gallery-12.jpeg', width: 854, height: 1280 },
        { src: '/gallery-13.jpeg', width: 2321, height: 3480 },
    ]

    const [index, setIndex] = useState<number>(-1)

    return (
        <section 
            id="gallery"
            className="w-full min-h-svh overflow-hidden px-6 py-8 flex flex-col gap-8 items-cener text-white"
            style={{
                backgroundImage: 'url(/texture.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                filter: 'brightness(1)',
            }}
        >
            <div className="w-full h-[300svh] bg-black/50 absolute top-0 left-0 z-0" />
            <motion.p
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className={twMerge(labelFont.className, "z-50 text-lg text-balance text-center")}
            >
                Our Gallery
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.3 }}
            >
                <RowsPhotoAlbum
                    photos={photos}
                    onClick={({ index }) => setIndex(index)}
                    targetRowHeight={250}
                />
            </motion.div>

            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
            
        </section>
    )
}