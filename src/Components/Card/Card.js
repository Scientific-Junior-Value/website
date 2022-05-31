import './Card.css';
import logo from './dominos.png';

const Card = () => {
    return (
        <div className='card'>
                <div className='card-image'>
                    <img src={logo}></img>
                </div>
        </div>
    );
}

export default Card;