import React, { useState, useEffect } from "react";
import "./Loading.scss";

const Loading = ({ display }) => {
    const [loadingText, setLoadingText] = useState([
        "d",
        "s",
        "p",
        "l",
        "a",
        "c",
        "e",
        "d",
        ".",
        "⇞",
        "𓇚",
        "⁂",
        "⠷",
        "𝄢",
        "♖",
        "Φ",
        "✽",
        "○",
    ]);

    const shuffleArray = (arr) => {
        let newArr = [...arr];
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * arr.length);
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    };

    useEffect(() => {
        let timeout = setTimeout(() => {
            setLoadingText(shuffleArray(loadingText));
        }, 150);
        return () => {
            clearTimeout(timeout);
        };
    }, [loadingText]);

    return (
        display && (
            <>
                <div className="loading loading__container">
                    <div className="loading loading__element">{`${loadingText[0]}`}</div>
                    <div className="loading loading__element">{`${loadingText[1]} ${loadingText[2]}`}</div>
                    <div className="loading loading__element">{`${loadingText[3]}`}</div>
                </div>
            </>
        )
    );
};

export default Loading;
