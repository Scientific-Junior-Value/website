import "./Initiatives.css";
import brainload from "./brainload.png";

const Initiatives = (props) => {
  return (
    <div className="initiatives">
        {props.children}
    </div>
  );
};

export default Initiatives;
