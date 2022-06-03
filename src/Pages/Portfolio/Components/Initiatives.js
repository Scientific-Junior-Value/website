import "./Initiatives.css";
import brainload from "./brainload.png";

const Initiatives = () => {
  return (
    <div className="initiatives">
        <div className="logo-text-wrapper">
            <div className="initiatives-image">
                <img src={brainload}></img>
            </div>
            <div className="initiatives-desc">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
                accusantium nemo autem.
                </p>
            </div>
        </div>
        <div className="initiative-video"></div>
    </div>
  );
};

export default Initiatives;
