import { motion } from 'motion/react'
import { Croissant_One, Raleway } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Loader2Icon, SendIcon } from 'lucide-react'
import { Switch } from '../ui/switch'
import { useCallback, useEffect, useState } from 'react'
import { getComments, insertComment, TComment } from '@/lib/data'
import { toast } from 'sonner'

const labelFont = Croissant_One({ subsets: ['latin'], weight: ['400'] })
const raleway = Raleway({ subsets: ['latin'] })

type TForm = {
    name: string,
    comment: string,
    isComing: boolean,
}

export default function Comments() {
    const [form, setForm] = useState<TForm>({
        name: '',
        comment: '',
        isComing: false,
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [data, setData] = useState<TComment[]>([])

    const getData = useCallback(async () => {
        try {
            setIsLoading(true)
            const result = await getComments()
            
            const resultData: TComment[] = result.map((res) => ({
                comment_id: res.id,
                name: res.c_name,
                comment: res.c_comment,
                isComing: res.c_is_coming,
                createdAt: res.created_at,
            }))

            setData(resultData)
        } catch (err) {
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }, [])

    async function onSubmit() {
        try {
            if (form.name === '') {
                toast.error('Nama harus di isi')
                return
            }
            if (form.comment === '') {
                toast.error('Ucapan harus di isi')
                return
            }
            setIsSubmitting(true)
            const res = await insertComment(form)

            if (res) {
                setData(prev => [...prev, res])
            }
        } catch (err) {
            console.error(err)
        } finally {
            setIsSubmitting(false)
        }
    }

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <section
            id="comments"
            className={twMerge(raleway.className, "w-full min-h-svh relative p-4 text-xs")}
            style={{
                backgroundImage: 'url(/texture.jpg)',
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'round',
                filter: 'brightness(1)',
            }}
        >
            <div className="bg-linear-to-b from-red-950/75 via-black/75 to-red-950/75 w-full h-svh absolute top-0 left-0" />

            <div className="w-full flex flex-col gap-8 px-6 py-4 items-center z-50 text-white bg-black/5 backdrop-blur-sm rounded-lg min-h-svh">
                <motion.p
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                        className={twMerge(labelFont.className, "z-50 text-lg text-balance text-center")}
                    >
                    Ucapan Bahagia
                </motion.p>

                <div className="w-full flex flex-col gap-8">
                    <div className="w-full flex flex-col gap-4">
                        <motion.div
                            className="w-full flex flex-col gap-2"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2, delay: 0.3 }}
                        >
                            <Label className="text-xs" htmlFor="name">Nama</Label>
                            <Input onBlur={(e) => setForm(prev => ({ ...prev, name: e.target.value }))} name="name" id="name" placeholder='Nama anda...' className="bg-white placeholder:text-black/50 text-black text-xs" />
                        </motion.div>
                        <motion.div
                            className="w-full flex flex-col gap-2"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2, delay: 0.3 }}
                        >
                            <Label className="text-xs" htmlFor="ucapan">Ucapan Anda</Label>
                            <Textarea onBlur={(e) => setForm(prev => ({ ...prev, comment: e.target.value }))} placeholder='Ucapan...' className="bg-white placeholder:text-black/50 text-black text-xs" />
                        </motion.div>

                        <motion.div className="inline-flex items-center gap-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2, delay: 0.3 }}>
                            <Switch
                                checked={form.isComing}
                                onCheckedChange={(check) => setForm(prev => ({ ...prev, isComing: check }))}
                                className='data-[state=checked]:bg-red-950'
                            />
                            <span>Akan Hadir</span>
                        </motion.div>

                        <motion.button
                            disabled={isSubmitting}
                            className="w-full disabled:bg-orange-950/35 mx-auto px-4 py-2 text-xs cursor-pointer rounded-md bg-orange-950/95 hover:bg-orange-950/100 transition-all text-red-50 inline-flex gap-2 justify-center items-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            onClick={() => onSubmit()}
                        >
                            {isSubmitting ? <Loader2Icon className="w-4 h-4 animate-spin" /> : <SendIcon className="w-4 h-4" />}
                            <p>Kirim</p>
                        </motion.button>
                    </div>

                    <motion.div className="w-full relative flex items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2, delay: 1 }}>
                        <div className="flex-grow border-t border-white"></div>
                        <span className="flex-shrink mx-4 text-white text-xs">Ucapan-ucapan</span>
                        <div className="flex-grow border-t border-white"></div>
                    </motion.div>

                    {isLoading && <p className="animate-pulse text-white/85">Memuat data...</p>}

                    {!isLoading && data.map((value) => (
                        <motion.div
                            className="w-full flex flex-col gap-2"
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2, delay: 0.5 }}
                            key={value.comment_id}
                        >
                            <div
                                className="w-full rounded-md flex flex-col gap-2 p-2 bg-white text-black"
                            >
                                <div className="inline-flex items-center gap-2">
                                    <b className="text-xs">{value.name}</b>
                                    {value.isComing ? <div className="bg-green-600 text-green-50 px-4 py-1 rounded-sm text-center">Hadir</div> : <div className="bg-red-600 text-red-50 px-4 py-1 rounded-sm text-center">Tidak Hadir</div>}
                                </div>
                                <p className="text-xs">{value.comment}</p>
                                <p className="text-xs text-right text-black/45">{value.createdAt.toLocaleDateString('id-ID', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}