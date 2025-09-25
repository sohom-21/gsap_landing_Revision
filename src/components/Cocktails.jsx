import React from 'react'
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {cocktailLists, mockTailLists} from "../constants/index.js";
const Cocktails = () => {

    useGSAP(()=>{
        const paralaxTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:'.list',
                start:'top 30%',
                end:'bottom 80%',
                scrub:true,
            }
        })
        paralaxTimeline.from('#c-left-leaf',{
            x: -100,
            y: 100,
        })
            .from('#c-right-leaf',{
                x: 100,
                y: 100,
            })
    })

    return (
        <section id="cocktails" className="noisy" >
            <img src="/images/cocktail-left-leaf.png" alt="cocktail-left-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="cocktail-right-leaf" id="c-right-leaf" />
            <div className="list" >
                <div className="popular" >
                    <h2 > Most Popular Cocktails: </h2>
                    <ul>
                        {cocktailLists.map((drink)=>(
                            <li key={drink.name}>
                                <div className="md:me-28 " >
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} | {drink.detail}</p>
                                </div>
                                <span>- {drink.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="loved" >
                    <h2 > Most Loved Mocktails: </h2>
                    <ul>
                        {mockTailLists.map((drink)=>(
                            <li key={drink.name}>
                                <div className="me-28 " >
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country} | {drink.detail}</p>
                                </div>
                                <span>- {drink.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Cocktails
