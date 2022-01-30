import "./BoxStyle.css";
export const BoxComponent = (props) => {
  return (
    <button style={{"height": "50px", "width": "50px"}}
      className="box-div"
      disabled={props.isDisabled}
     style={{"backgroundColor": props.btnColor}}
      onClick={() => props.onHandleClick(props.btnKey, props.currPlayer)}
    >
      {props.displayValue}
    </button>
  );
};
