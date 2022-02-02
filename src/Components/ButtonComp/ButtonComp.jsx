import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const ButtonComp = (props) =>{
return(
    <Button variant={props.variantInfo} onClick={() => props.onClickReset(false)}>
        {" "}
        Click to reset!
      </Button>
)
}
export default ButtonComp;