import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import HoverableWord from "./HoverableWord";
import { isPunctuation } from "../helpers";

const HSKReaderContent = ({ text, font }) => {
    const [segmented, setSegmented] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const segmentText = async () => {
            const baseURL =
                "https://chinese-segmentor-pixieindia-yahoocom.vercel.app/segmentor";
            const { data } = await axios.post(baseURL, {
                text,
            });

            setSegmented(data);
            console.log("Data", data);
        };

        if (text.trim().length > 0) {
            segmentText();
        } else {
            // Trying to load the page in a bad state with no text, send user back to home
            navigate("/");
        }
    }, [text, navigate]);

    const renderedSentences = segmented.map((sentence, index) => {
        const renderedSentence = sentence.map((word, wordIndex) => {
            if (typeof word === "string") {
                if (isPunctuation(word)) {
                    // Punctuation
                    return <span key={`word-${wordIndex}`}>{word}</span>;
                }

                // No HSK word, just plain word
                return (
                    <span class="hoverable-non-hsk" key={`word-${wordIndex}`}>
                        {word}
                    </span>
                );
            } else {
                // HSK word
                return <HoverableWord key={`word-${wordIndex}`} word={word} />;
            }
        });

        return (
            <div
                className="mb-1"
                key={`sentence-${index}`}
                style={{ fontFamily: font }}
            >
                {renderedSentence}
            </div>
        );
    });
    return (
        <>{renderedSentences.length > 0 ? renderedSentences : <Loading />}</>
    );
};

export default HSKReaderContent;
