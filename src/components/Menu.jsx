import React, {useRef, useState} from 'react'
import gsap from "gsap";
import {allCocktails} from "../constants/index.js";
import {useGSAP} from "@gsap/react";

const Menu = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const contentRef = useRef();
    const totalCocktails = allCocktails.length;

    const goToSlide = ( index )=>{
        const newIndex = (index + totalCocktails) % totalCocktails
        setCurrentIndex(newIndex);
    }

    const getCocktailAT  =( indexOffSet)=>{
        return allCocktails[(currentIndex+indexOffSet+totalCocktails)%totalCocktails]
    }

    const currentCocktail = getCocktailAT(0)
    const prevCocktail = getCocktailAT(-1)
    const nextCocktail = getCocktailAT(1)

    useGSAP(()=>{
        gsap.fromTo('#title', {
            opacity:0
        } ,{
            opacity:1,
            duration:1,
        });

        gsap.fromTo('.cocktail img', {
            opacity:0,
            xPercent:-100
        } ,{
            opacity:1,
            xPercent:0,
            duration:1,
            ease:'power1.inOut'
        });

        gsap.fromTo('.details h2', {
            opacity:0,
            yPercent:100
        } ,{
            opacity:100,
            yPercent:0,
            duration:1,
            ease:'power1.inOut'
        });

        gsap.fromTo('.details p', {
            opacity:0,
            yPercent:100
        } ,{
            opacity:100,
            yPercent:0,
            duration:1,
            ease:'power1.inOut'
        });
    },[currentIndex])

    return (
        <section id='menu' aria-labelledby='menu-heading' >
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
            <h2 id="menu-heading" className="sr-only" >
                Cocktails Menu
            </h2>
            <nav className="cocktail-tabs" aria-label="Cocktail Navigation" >
                {allCocktails.map((cocktails, index)=>{
                    const isActive = index === currentIndex;

                    return(
                        <button
                            key={cocktails.id}
                            className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}
                            onClick={()=>goToSlide(index)}
                        >
                            {cocktails.name}
                        </button>
                    )
                })}
            </nav>
            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={()=>goToSlide(currentIndex -1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="arrow-right" aria-hidden={"true"}/>
                    </button>

                    <button className="text-left" onClick={()=>goToSlide(currentIndex -1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="arrow-left" aria-hidden={"true"}/>
                    </button>
                </div>
                <div className="cocktail">
                    <img src={currentCocktail.image} className="object-contain" alt="cocktail image"/>
                </div>

                <div className="recipe">
                    <div ref={contentRef} className="info">
                        <p>Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Menu
