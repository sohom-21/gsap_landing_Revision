import React from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/all";
import {profileLists} from "../constants/index.js";

const About = () => {
    const stars = Array(5).fill(0).map((_, i) => (
        <img
            key={i}
            src="/images/WhiteStar.svg"
            alt="star"
        />
    ))
    useGSAP(() => {
        const titleSplit = SplitText.create("#about h2", {
            type: "words"
        });
        
        const scrollTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top bottom",
                scrub: true,
            }
        })
        scrollTimeLine.from(titleSplit.words, {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.03
        })
            .from(".top-grid div, .bottom-grid div", {
                opacity: 0,
                duration: 1,
                ease: "elastic.out(1,0.3)",
                stagger: 0.03,
            }, '-=0.7')
    }, [])

    return (
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Best Cocktails</p>
                        <h2>
                            Where every slip is a soul melting <span className="text-white">-</span> experience brought
                            forth
                        </h2>
                    </div>
                    <div className="sub-content">
                        <p>
                            Every Cocktail we serve is a reflection of our obsession with perfection - a blend of
                            premium ingredients, creative flair, and timeless recipes from the muddle to the final
                            garnish -designed to delight your senses.
                        </p>
                        <div className='flex flex-row justify-between items-center gap-1'>
                            <div>
                                <p className='flex flex-row gap-2 items-center justify-start'>
                                    {stars}
                                </p>
                                <p className="md:text-3xl text-xl font-bold">
                                    <span>4.8</span>/5
                                </p>
                                <p className="text-sm text-white">
                                    More than +20,000 customers
                                </p>
                            </div>
                            <div>
                                <img
                                    src="/images/Line.svg"
                                    alt="line image"
                                    className='size-18 mx-0.5'
                                />
                            </div>
                            <div
                                className='w-8 h-9 rounded-full bg-black flex flex-row justify-center items-center gap-1'>
                                {profileLists.map((profile, idx) => (
                                    <img
                                        key={idx}
                                        src={profile.imgPath}
                                        alt="profile"
                                        className='w-9 rounded-full border-2 border-white -ml-3 first:ml-1 last:mr-1.5'
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy">
                        <img src="/images/abt1.png" alt="grid-img-1"/>
                    </div>
                </div>
                <div className="md:col-span-6">
                    <div className="noisy">
                        <img src="/images/abt2.png" alt="grid-img-2"/>
                    </div>
                </div>
                <div className="md:col-span-3">
                    <div className="noisy">
                        <img src="/images/abt5.png" alt="grid-img-5"/>
                    </div>
                </div>
            </div>
            <div className="bottom-grid">
                <div className="md:col-span-8">
                    <div className="noisy">
                        <img src="/images/abt3.png" alt="grid-img-3"/>
                    </div>
                </div>
                <div className="md:col-span-4">
                    <div className="noisy">
                        <img src="/images/abt4.png" alt="grid-img-4"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
