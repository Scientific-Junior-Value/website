import brainload from "./brainload.png";
import './InitiativesItem.css';
import Video from "./Video";

const InitiativesItem = (props) => {
    return (
        <div className="initiatives-item-wrapper">
            <div className="logo-text-wrapper">
                <div className={`initiatives-image ${props.imageClass}`}>
                    <img src={props.image}></img>
                </div>
                <div className="initiatives-desc">
                    <p>
                        {props.text}
                    </p>
                </div>
            </div>
            <div className="video-wrapper">
                <div className="initiative-video">
                    <Video video={props.video} />
                </div>
            </div>
        </div>
    );
}

export default InitiativesItem;