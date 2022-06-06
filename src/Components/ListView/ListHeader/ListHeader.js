import './ListHeader.css';

function ListHeader(props) {
  return (
    <div className="list-header" onClick={props.departmentClicked}>
      <span onClick={props.onClick} className={props.class}>{props.department}</span>
    </div>
  );
}

export default ListHeader;
