'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type Props ={
    words:Array<string>;
    wrapperStyles?:string;
    wordStyles?:string ;
    duration?:number;
    delay?:number;
}

export default function SwapingWords({words,duration = 2.45,delay = 4.5,wordStyles = '',wrapperStyles = ''}:Props){

    const wordsRef = useRef<HTMLSpanElement>(null);
    const wrapperRef = useRef<HTMLSpanElement>(null);

    useGSAP(
        () => {
            if (!wrapperRef.current || !wordsRef.current || words.length === 0) {
                return;
            }

            const firstWord = wordsRef.current.firstElementChild as HTMLSpanElement;
            const height = firstWord.offsetHeight;

            gsap.set(wrapperRef.current, {
                height,
            });

            gsap.set(wordsRef.current, {
                y: 0,
            });

            const tl = gsap.timeline({
                repeat: -1,
                repeatDelay: delay,
            });

            for (let i = 1; i <= words.length; i++) {
                tl.to(wordsRef.current, {
                    y: -(height * i),
                    duration,
                    ease: 'power3.inOut',
                });

                if (i === words.length) {
                    tl.set(wordsRef.current, {
                        y: 0,
                    });
                }
            }

            return () => tl.kill();
        },
        {
            scope: wrapperRef,
            dependencies: [words, duration, delay],
        }
    );


    return (
        <span
            className={`
            relative inline-flex h-[1em] overflow-hidden align-bottom  w-fit  
            ${wrapperStyles}`}
            ref={wrapperRef}
        >
            <span
                className="flex flex-col"
                ref={wordsRef}
            >
                {
                    words.map((word,index) => {
                        if (index === words.length - 1) {
                            gsap.set(wordsRef.current, { y: 0 });
                            index = 0;
                            return;
                        }
                        return(
                            <span
                                className={wordStyles}
                                key={`${word}-${index}`}
                            >
                                {`${word} `}
                            </span>
                        )
                    })
                }
            </span>
        </span>
    )
}