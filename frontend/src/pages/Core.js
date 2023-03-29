import { Task } from "../components/Task";

function Core(props) {
  return (
    <div style={{ backgroundColor: "gray", borderRadius: "10px", padding: "10px", marginTop: "10px" }}>
      <h2 style={{ margin: "0 0 0 4px" }}>CORE NO.{props.core}</h2>
      <div style={{ display: "flex" }}>
        <Task core={props.core} task={1} />
        <Task core={props.core} task={2} />
        <Task core={props.core} task={3} />
        <Task core={props.core} task={4} />
      </div>
    </div>
  );
}

export default Core;
