import "./BoxComponent.css";
export const BoxComponent = (props) => {
  return (
    <button 
      style={{backgroundColor: props.btnColor}}
      className="box-div"
      disabled={props.isDisabled}
      onClick={() => props.onHandleClick(props.btnKey, props.currPlayer)}
    >
      {props.displayValue}
    </button>
  );
};

export default BoxComponent;