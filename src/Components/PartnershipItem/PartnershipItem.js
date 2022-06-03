import './PartnershipItem.css';

const PartnershipItem = (props) => {
    return (
        <div className='partnership-item'>
                <div className='partnership-item-image'>
                    <img src={props.image}></img>
                </div>
                <div className='partnership-item-legend'>
                    <p>{props.name}</p>
                </div>
        </div>
    );
}

export default PartnershipItem;