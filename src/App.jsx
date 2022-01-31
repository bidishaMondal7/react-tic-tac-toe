import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Board from "./Components/Board/Board";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [withComp, setWithComp] = useState(false);

  return (
    <div className="App">
      <h1>TIC-TAC-TOE</h1>
      <div className="player-selection-div">
        <p>Multiplayer</p>
        <Form.Check
          type="switch"
          id="custom-switch"
          onChange={() => setWithComp(!withComp)}
        />
        <p>With computer</p>
      </div>
      <Board withComp={withComp} />

      <Button variant="info" onClick={() => window.location.reload(false)}>
        {" "}
        Click to reset!
      </Button>
    </div>
  );
}

export default App;
