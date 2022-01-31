import { useState, useEffect } from "react";
import BoxComponent from "../BoxComponent/BoxComponent";
import "./Board.css";

const Board = (props) => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => ({
    id: value,
    value: "",
    btnColor: "#AB82FF",
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
  const [compId, setCompId] = useState(99);
  const [randArray, setRandArray] = useState([]);

  // const getCompData = () =>{
  //  const getRand = getRandomIntInclusive(0, 8);
  //   console.log(getRand);
  //   await setCompId(parseInt(getRand));
  //   console.log(compId);
  //   handleOperation(compId, currPlayer);
  // }

  const handleOperation = (boxId, cPlayer) => {
    // console.log(withComp,"with compp");
    setCount((precount) => precount + 1);
    console.log(count, "county");
    console.log(boxId, cPlayer, "from comp");
    const arrBoxes = [...boxes];
    arrBoxes[boxId].value = currPlayer;

    if (currPlayer === "X") {
      arrBoxes[boxId].btnColor = "crimson";
      setPlayer1([...player1, boxId]);
      setCurrPlayer("O");
      //with comp
      // if (withComp) {
      //   setRandArray([...randArray], boxId);

      //   console.log("inside X");
      //   const getRand = getRandomIntInclusive(0, 8);
      //   setCompId(getRand);
      // }
    } else {
      console.log("test");
      arrBoxes[boxId].btnColor = "yellowgreen";
      setPlayer2([...player2, boxId]);
      setCurrPlayer("X");
    }
    setBoxes(arrBoxes);
    // setCurrPlayer(currPlayer==='X'?'O':'X')
  };
  useEffect(() => {
    if (compId !== 99) {
      console.log(compId, currPlayer, "compID, hhiiii playe");
      handleOperation(compId, currPlayer);
    }
  }, [compId]);

  useEffect(() => {
    if (count === 9) setWinner("Draw!!!!Try again");
    console.log("countedddd");
  }, [count]);

  useEffect(() => {
    console.log("from useeffect 1");
    console.log(player1, player2, "playerssss");
    winningComb.map((element) => {
      const checkPlayer1 = element.every((i) => player1.includes(i));
      // console.log(checkPlayer1,"checkPlayer1");
      if (checkPlayer1) setWinner("Player1 wins!!");
    });
    winningComb.map((element) => {
      const checkPlayer2 = element.every((i) => player2.includes(i));
      // console.log(checkPlayer2,"checkPlayer2");
      if (checkPlayer2) setWinner("Player2 wins!!");
    });
  }, [player1, player2]);

  const printBox = () => {
    return (
      <div className="box-container">
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
              // btnKey={withComp?getRandomIntInclusive(0, 8):(element.id)}
              btnKey={element.id}
            />
          );
        })}
      </div>
    );
  };
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = parseInt(Math.floor(Math.random() * (max - min + 1) + min));
    if (randArray.includes(result) === true) {
      console.log(result, "result");
      getRandomIntInclusive(0, 8);
    } else {
      setRandArray([...randArray], result);
      return result;
    }
    //The maximum is inclusive and the minimum is inclusive
  }
  return (
    <div className="board-container">
      {winner ? (
        <div>{winner}</div>
      ) : (
        <div
          style={{ display: "flex", justifyContent: "center" }}
        >
          {printBox()}
          {/* {console.log(getRandomIntInclusive(0, 8),"RANDOM")} */}
        </div>
      )}
    </div>
  );
};

export default Board;
