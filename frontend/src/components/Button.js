import { useState } from "react";

function Button(props) {
  const [isClicked, setIsClicked] = useState(false);
  const buttonStr = {
    backgroundColor: isClicked ? "#333538" : "#57A0E5",
    width: "100px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: isClicked ? "#57A0E5" : "#333538",
    cursor: "pointer",
    borderRadius: "10px",
    margin: "10px",
  };
  const onMouseDown = () => setIsClicked(true);
  const onMouseUp = () => setIsClicked(false);

  return (
    <div onClick={props.onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp} style={buttonStr}>
      {props.value}
    </div>
  );
}

export { Button };
