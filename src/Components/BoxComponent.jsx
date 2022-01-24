import "./BoxStyle.css";
export const BoxComponent = (props) => {
  return (
    <button
      className="box-div"
      disabled={props.isDisabled}
     style={{"background-color": props.btnColor}}
      onClick={() => props.onHandleClick(props.btnKey, props.currPlayer)}
    >
      {props.displayValue}
    </button>
  );
};
