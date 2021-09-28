import Styles from "./phrase-box.module.scss";
import React, { useState } from "react";

interface Props {}

interface Phrase {
  word: string;
  id: string;
}

const phrases: Phrase[] = [
  {
    word: "word1",
    id: "1",
  },
  {
    word: "word1",
    id: "2",
  },
  {
    word: "word1",
    id: "3",
  },
  {
    word: "word1",
    id: "4",
  },
  {
    word: "word1",
    id: "5",
  },
  {
    word: "word1",
    id: "6",
  },
  {
    word: "word1",
    id: "7",
  },
  {
    word: "word1",
    id: "8",
  },
  {
    word: "word1",
    id: "9",
  },
  {
    word: "word1",
    id: "10",
  },
  {
    word: "word1",
    id: "11",
  },
  {
    word: "word1",
    id: "12",
  },
];

const PhraseBox: React.FC<Props> = (props) => {
  const [isSeedPhraseDisplayed, setIsSeedPhraseDisplayed] = useState(false);

  const showSeedPhrase = () => {
    setIsSeedPhraseDisplayed(true);
  };

  const renderWords = () => {
    return phrases.map(({ word, id }) => <li key={id}>{word}</li>);
  };

  return (
    <div className={Styles.box}>
      <div
        className={Styles.box__overlay}
        style={{ display: `${isSeedPhraseDisplayed ? "none" : "block"}` }}
      >
        <button className={Styles.box__btn} onClick={showSeedPhrase}>
          Reveal Seed Phrase
        </button>
      </div>
      <ol className={Styles.box__words}>{renderWords()}</ol>
    </div>
  );
};

export default PhraseBox;
