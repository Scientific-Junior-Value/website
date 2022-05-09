import './ListHeader.css';

function ListHeader(props) {
  return (
        <div className="list-header">
          <span className={props.class}>{props.department}</span>
        </div>
  );
}

export default ListHeader;
