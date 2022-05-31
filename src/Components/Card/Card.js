import './Card.css';
import logo from './dominos.png';

const Card = (props) => {
    return (
        <div className='card'>
                <div className='card-image'>
                    <img src={props.image}></img>
                </div>
                <div className='card-legend'>
                    <p>{props.name}</p>
                </div>
        </div>
    );
}

export default Card;