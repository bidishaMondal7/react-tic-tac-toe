import "./App.css";
import "./Components/BoxStyle.css";

import { BoxComponent } from "./Components/BoxComponent";
import { useState, useEffect } from "react";

function App() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => ({
    id: value,
    value: "",
    btnColor:"blueviolet"
  }));
  const [boxes, setBoxes] = useState(arr);
  const [currPlayer, setCurrPlayer] = useState("X");
  const winningComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [winner, setWinner] = useState("");
  const [count, setCount] = useState(0);


  const handleOperation = (boxId, cPlayer) => {
    setCount(precount => precount + 1);
    console.log(count,"county");
    console.log(boxId, cPlayer, "from comp");
    const arrBoxes = [...boxes];
    arrBoxes[boxId].value = currPlayer;
    
    if (currPlayer === "X") {
      arrBoxes[boxId].btnColor = "crimson";
      setPlayer1([...player1, boxId]);
      setCurrPlayer("O");
    } else {
      arrBoxes[boxId].btnColor = "yellowgreen";
      setPlayer2([...player2, boxId]);
      setCurrPlayer("X");
    }
    setBoxes(arrBoxes);
    // setCurrPlayer(currPlayer==='X'?'O':'X')
  };
  useEffect(() =>{
    if(count === 8)
      setWinner("Draw!!!!Try again");
      console.log("countedddd")
  },[count]);
  useEffect(() => {
    console.log("from useeffect 1");
    console.log(player1, player2, "playerssss");
    winningComb.map((element) => {
      const checkPlayer1 = element.every((i) => player1.includes(i));
      // console.log(checkPlayer1,"checkPlayer1");
      if (checkPlayer1) 
      setWinner("Player1 wins!!");
      
    });
    winningComb.map((element) => {
      const checkPlayer2 = element.every((i) => player2.includes(i));
      // console.log(checkPlayer2,"checkPlayer2");
      if (checkPlayer2) 
      setWinner("Player2 wins!!");

    });
    
  }, [player1, player2]);
  // useEffect(() => {
  //   console.log("from useeffect 2");
  // }, []);

  const printBox = () => {
    return (
      <div className="container">
        {boxes.map((element, index) => {
          return (
            <BoxComponent
              key={index}
              btnColor={element.btnColor}
              isDisabled={element.value !== ""}
              displayValue={element.value}
              currPlayer={currPlayer}
              onHandleClick={(boxId, cPlayer) =>
                handleOperation(boxId, cPlayer)
              }
              btnKey={element.id}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>TIC-TAC-TOE</h1>
      {winner?<div>{winner}</div>:<div
        className="super-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {printBox()}
      </div>}
    </div>
  );
}

export default App;
