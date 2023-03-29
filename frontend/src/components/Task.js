import { useState } from "react";
import { useInterval } from "../utils/useInterval";
import api from "../utils/api";

function Task(props) {
  const [isClicked, setIsClicked] = useState(false);
  const buttonStr = {
    backgroundColor: isClicked ? "#333538" : "#57A0E5",
    width: "100px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: isClicked ? "#57A0E5" : "#333538",
    cursor: "pointer",
    borderRadius: "6px",
    margin: "0 10px 0 0",
  };

  const onClick = () => setIsClicked(!isClicked);
  useInterval(() => {
    if (isClicked) api.post("", { core: props.core, task: props.task });
  }, 1000);

  return (
    <div onClick={onClick} style={buttonStr}>
      TASK NO.{props.task}
    </div>
  );
}

export { Task };
