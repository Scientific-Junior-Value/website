import "./AlumniCard.css";
import AlumniImage from "./components/AlumniImage";

const AlumniCard = (props) => {
  return (
    <div className="alumni-card">
      <div className="alumni-text">
        {props.text}
      </div>
      <div className="alumni-info">
        <AlumniImage img={props.image} />
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default AlumniCard;
