import "./cards.css";
import { useState } from "react";
import Card from "./card";

function Cards() {
  const [counter, setCounter] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([
    {
      name: "Josh Allen",
      number: "17",
      key: 1,
      clicked: false,
    },
    {
      name: "Tre White",
      number: "27",
      key: 2,
      clicked: false,
    },
    {
      name: "Stefon Diggs",
      number: "14",
      key: 3,
      clicked: false,
    },
    {
      name: "Von Miller",
      number: "40",
      key: 4,
      clicked: false,
    },
    {
      name: "Matt Milano",
      number: "58",
      key: 5,
      clicked: false,
    },
    {
      name: "Dalton Kincaid",
      number: "86",
      key: 6,
      clicked: false,
    },
    {
      name: "Greg Rousseau",
      number: "50",
      key: 7,
      clicked: false,
    },
    {
      name: "Dawson Knox",
      number: "88",
      key: 8,
      clicked: false,
    },
    {
      name: "Christian Benford",
      number: "47",
      key: 9,
      clicked: false,
    },
    {
      name: "Dane Jackson",
      number: "30",
      key: 10,
      clicked: false,
    },
    {
      name: "Gabriel Davis",
      number: "13",
      key: 11,
      clicked: false,
    },
    {
      name: "Tyler Bass",
      number: "2",
      key: 12,
      clicked: false,
    },
  ]);

  function reset() {
    const resetClicks = cards.map((prevCard) => {
      prevCard.clicked = false;
    });

    setCards(resetClicks);

    let randoCards = cards.sort(() => Math.random() - 0.5);
    setCards(randoCards);
    setCounter(0);
  }

  function handleClick(event) {
    //this function can match the clicked element via map with the key
    const update = cards.map((prevCard) => {
      console.log(event.target.name);

      if (prevCard.name === event.target.name) {
        if (prevCard.clicked === true) {
          console.log("its clicked");
          reset();
        } else {
          prevCard.clicked = true;
          setCounter((count) => count + 1);
          if (counter >= highScore) {
            setHighScore((count) => count + 1);
          }
        }
      }
    });
    setCards(update);

    console.log(cards);

    let randoCards = cards.sort(() => Math.random() - 0.5);
    setCards(randoCards);
  }

  return (
    <>
      <div className="content">
        <div className="scoreboard">
          <div>High Score:{highScore}</div>
          <div>Score:{counter}</div>
        </div>
        <div className="cardHolder">
          {cards.map((card) => {
            return (
              <Card
                key={card.key}
                name={card.name}
                number={card.number}
                clicked={card.clicked}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cards;
