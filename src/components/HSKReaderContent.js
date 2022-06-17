import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import HoverableWord from "./HoverableWord";

const HSKReaderContent = () => {
  const [segmented, setSegmented] = useState([]);

  useEffect(() => {
    const segmentText = async () => {
      const baseURL = "https://chinese-segmentor.herokuapp.com/segmentor";
      const { data } = await axios.get(baseURL, {
        params: {},
      });

      setSegmented(data);
      // console.log("Data", data);
    };

    segmentText();
  }, []);

  const renderedSentences = segmented.map((sentence, index) => {
    const renderedSentence = sentence.map((word, wordIndex) => {
      if (typeof word === "string") {
        // No HSK word, just plain word
        return <span key={`word-${wordIndex}`}>{word}</span>;
      } else {
        // HSK word
        return <HoverableWord key={`word-${wordIndex}`} word={word} />;
      }
    });

    return (
      <div className="mb-1" key={`sentence-${index}`}>
        {renderedSentence}
      </div>
    );
  });
  return <>{renderedSentences.length > 0 ? renderedSentences : <Loading />}</>;
};

export default HSKReaderContent;
