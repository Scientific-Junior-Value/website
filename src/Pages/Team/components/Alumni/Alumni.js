import AlumniCard from "../../../../Components/AlumniCard/AlumniCard";
import { data } from "./data";

const Alumni = () => {
  return (
    <div className="team-content-wrapper">
      <div className="team-content-alumni">
        {data.map((item) => {
          return (<AlumniCard key={item.id} image={item.image} name={item.name} text={item.text} />);
        })}
      </div>
    </div>
  );
};

export default Alumni;
