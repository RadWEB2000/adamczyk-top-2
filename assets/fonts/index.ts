import {Inter_Tight, Geist_Mono, Space_Grotesk} from "next/font/google";

const  fontBody = Inter_Tight({
    subsets:['latin-ext'],
    variable:'--font-body'
})

const fontData = Geist_Mono({
    subsets:['latin-ext'],
    variable:'--font-data'
})

const fontHeading = Space_Grotesk({
    subsets:['latin-ext'],
    variable:'--font-heading'
})

export {fontBody, fontData, fontHeading}