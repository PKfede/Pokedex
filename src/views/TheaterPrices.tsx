import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/theater.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import foods from "../assets/Foods/assetIndex";

const images = [foods.popcorn, foods.hotdog, foods.nacho, foods.dessert];

const navigation = (value: number) => {
    document.getElementsByClassName(styles.aa)[value].scrollIntoView();
};

const TheaterPrices = () => {
    const [img, setImg] = useState(images[0]);
    const [currentImg, setCurrentImg] = useState(0);
    const [play, setPlay] = useState(true);
    const id = useRef(0);
    const autoId = useRef(0)

    const count = images.length;
    const carousel = () => {
        id.current = setInterval(() => {
            moveForward();
            console.log(play, id.current, autoId.current);
        }, 2000);
    };

    const clear = () => {
        clearInterval(autoId.current)
        clearInterval(id.current);
    };

    const moveForward = () => {
        if (currentImg < count - 1) {
            setImg(images[currentImg + 1]);
            setCurrentImg(currentImg + 1);
        } else {
            setImg(images[0]);
            setCurrentImg(0);
        }
    };

    const handleNext = () => {
        clear();
        moveForward();
        setPlay(false);
    };

    const handlePrev = () => {
        clear();
        if (currentImg === 0) {
            setImg(images[count - 1]);
            setCurrentImg(count - 1);
        } else {
            setImg(images[currentImg - 1]);
            setCurrentImg(currentImg - 1);
        }
        setPlay(false);
    };

    const handleButton = (val: any) => () => {
        clear();
        setImg(images[val]);
        setCurrentImg(val);
        setPlay(false);
    };

    useEffect(() => {
        if (play) {
            clearInterval(autoId.current)
            carousel();
        } else {
            autoId.current = setInterval(() => {
                setPlay(true)
            }, 5000)
        }

        return () => clear();
    }, [currentImg, play]);
    return (
        <>
            <div className={styles.screen}>
                <div className={styles.main}>
                    <h1>Menu</h1>
                    <div className={styles.sections}>
                        <div className={styles.carousel}>
                            <img className={styles.foodImg} src={img} alt="" />
                            <button onClick={handlePrev}>prev</button>
                            {images.map((val, index) => {
                                return (
                                    <button
                                        key={index}
                                        className={
                                            currentImg === index ? styles.active : styles.inactive
                                        }
                                        onClick={handleButton(index)}
                                    >
                                        .
                                    </button>
                                );
                            })}

                            <button onClick={handleNext}>next</button>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.left}>
                            <h1>drinks</h1>
                            <h3>Coke</h3>
                            <h3>Diet Coke</h3>
                            <h3>Sprite</h3>
                            <h3>Fanta</h3>
                        </div>
                        <div className={styles.right}>
                            <h2>snacks</h2>
                            <h3>Pringles</h3>
                            <h3>M&M</h3>
                            <h3>Snickers</h3>
                            <h3>MilkyWay</h3>
                            <h3>Oreo</h3>
                        </div>
                    </div>
                    <div className={styles.foodSection}>
                        <div className={styles.aa}>
                            <h1>Popcorn</h1>
                            <h2>Combos:</h2>
                        </div>
                        <div className={styles.aa}>
                            <h1>Hotdogs</h1>
                            <h2>Combos:</h2>
                        </div>
                        <div className={styles.aa}>
                            <h1>Nachos</h1>
                            <h2>Combos:</h2>
                        </div>
                        <div className={styles.aa}>
                            <h1>Desserts</h1>
                            <h2>Combos:</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TheaterPrices;
