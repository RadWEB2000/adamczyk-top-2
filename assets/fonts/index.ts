import {Geologica, Geist_Mono, PT_Serif, Inter_Tight} from "next/font/google";

const  fontSerif = PT_Serif({
    subsets:['latin-ext'],
    weight:['400','700'],
    variable:'--font-serif'
})

const fontData = Geist_Mono({
    subsets:['latin-ext'],
    variable:'--font-data'
})

const fontSans = Inter_Tight({
    subsets:['latin-ext'],
    variable:'--font-sans'
})

export {fontSerif, fontData, fontSans}