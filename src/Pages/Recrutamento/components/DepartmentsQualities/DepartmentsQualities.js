import "./DepartmentsQualities.css";
import img from './camera.png';
import { data } from './data';

const DepartmentsQualities = (props) => {
  const department = data[props.department];
  return (
        <div className="department-qualities">
          <p className={"department-qualities-title " + props.department}>
            { department['qualities']['title'] }
          </p>
          <div className='department-qualities-title-items'>
            { department['qualities']['items'].map( item => <p><span className={"init-line init-" + props.department}></span>{ item }</p> ) }
          </div>
          <p className={"department-qualities-functions " + props.department}>Funções</p>
          <div className='department-qualities-functions-items'>
            { department['functions']['items'].map( item => <p><span className={"init-line init-" + props.department}></span>{ item }</p> ) }
          </div>
          <div className='department-image'>
            <img src={img} alt={department}></img>
          </div>
        </div>
  );
}

export default DepartmentsQualities;
