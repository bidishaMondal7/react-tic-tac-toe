import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Board from "./Components/Board/Board";
// import ButtonComp from "./Components/ButtonComp/ButtonComp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  
  const [withComp, setWithComp] = useState(false);
  const [handleRefresh, setHandleRefresh] = useState(false);
  let val = true;
  // const onRefreshPage = (flagValue) =>{
  //   console.log(flagValue);
  //   setHandleRefresh(flagValue);
  // }
  // const onHandleReset = (val) =>{
  //   console.log(val,"value received");
  //   setHandleRefresh(val);
  // }
  
  
  return (
    <div className="App">
      <h1>TIC-TAC-TOE</h1>
      <div className="player-selection-div">
        <p>Multiplayer</p>
        <Form.Check
          type="switch"
       
          onChange={() => setWithComp(!withComp)}
        />
        <p>With computer</p>
      </div>
      {/* <Board withComp={withComp} refreshPage={handleRefresh} onResetToPrev={(handleRefresh) => onRefreshPage(handleRefresh)}  /> */}
      <Board withComp={withComp} refreshPage={handleRefresh} />

      {/* <ButtonComp variantInfo="info" onClickReset={(val) => onHandleReset(val)} />
       */}
       <Button variant="info" onClick={() => setHandleRefresh(true)}>
        {" "}
        Click to reset!
      </Button>  
    </div>
  );
}

export default App;
