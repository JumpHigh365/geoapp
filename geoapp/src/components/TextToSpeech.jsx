import React, { useState, useEffect } from "react";

const TextToSpeech = ({ text }) => {
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const baseText = "Du befindest dich in unmittelbarer Nähe des Geocache";
    const fullText = baseText + text;

    const u = new SpeechSynthesisUtterance(fullText);
    setUtterance(u);

    synth.speak(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  return (
    <div></div>
  );
};

export default TextToSpeech;
