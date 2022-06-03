import './ListImgItem.css';
import logo from './yellow.png';

function ListImgItem(props) {
  return (
      <div className='img-item-wrapper'>
          <img src={props.image} alt='Member'></img>
          <span className='member-name'>{props.name}</span>
      </div>
  );
}

export default ListImgItem;
