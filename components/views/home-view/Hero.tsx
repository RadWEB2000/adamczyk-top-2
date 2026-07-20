import { SwapingWords } from "@/components/utils/features"
import img from "@/img/me/r-adamczyk-lumo (1).webp"
import Image from "next/image"

const swapingWords: Array<string> = [
    'Google',
    // 'AI',
    // 'TOP 10',
    // 'Frazy',
    // 'Ruch',
    // 'Klientów',
    // 'Leady',
    // 'Sprzedaż',
    // 'Widoczność',
    'Konwersje',
]


export default function Hero(){
    return (
        <header className="bg-support-200 min-h-[95vh] grid grid-cols-2">
            <section
                className="bg-orange-200"
            >
                <hgroup
                    className="flex flex-col-reverse"
                >
                    <h1
                        className="text-display-lg text-balance font-bold"
                    >
                        <span>Pozycjonuję Twoją firmę na: </span>
                        <SwapingWords
                            words={swapingWords}
                            wordStyles="font-serif text-brand-600 uppercase bg-green-400 h-full font-thin place-content-center"
                        /> .
                    </h1>
                    <h2>Pomagam firmom zdobywać klientów dzięki SEO i nowoczesnym stronom internetowym.</h2>
                </hgroup>
            </section>
            <figure>
                <Image
                    alt=''
                    className="img-better rotate-y-180 grayscale"
                    loading="eager"
                    priority
                    {...img}
                />
            </figure>
        </header>
    )
}