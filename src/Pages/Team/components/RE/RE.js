import ListImgItem from "../../../../Components/ListView/ListImgItem/ListImgItem";
import { data } from "./data";

const RE = () => {
  return (
    <div className="team-content-wrapper">
      <div className="team-content">
        {data.map((item) => {
          return (<ListImgItem key={item.id} image={item.image} name={item.name} />);
        })}
      </div>
    </div>
  );
};

export default RE;
