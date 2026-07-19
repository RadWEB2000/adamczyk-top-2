import {Geologica, Fira_Mono, PT_Serif, Inter_Tight, Encode_Sans, Merriweather} from "next/font/google";

const  fontSerif = Merriweather({
    subsets:['latin-ext'],
    weight:['400','700'],
    variable:'--font-serif'
})

const fontData = Fira_Mono({
    subsets:['latin-ext'],
    weight:['400','700'],
    variable:'--font-data'
})

const fontSans = Encode_Sans({
    subsets:['latin-ext'],
    variable:'--font-sans'
})

export {fontSerif, fontData, fontSans}