import brainload from "./brainload.png";
import './InitiativesItem.css';

const InitiativesItem = (props) => {
    return (
        <div className="initiatives-item-wrapper">
            <div className="logo-text-wrapper">
                <div className="initiatives-image">
                    <img src={brainload}></img>
                </div>
                <div className="initiatives-desc">
                    <p>
                        {props.text}
                    </p>
                </div>
            </div>
            <div className="initiative-video"></div>
        </div>
    );
}

export default InitiativesItem;