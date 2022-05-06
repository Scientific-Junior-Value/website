import './DepartmentsName.css';

function DepartmentsName(props) {
  return (
        <div className="departments-name">
          <span className={props.class}>{props.department}</span>
        </div>
  );
}

export default DepartmentsName;
