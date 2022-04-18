import './Input.css';

function Input(props) {
    return (
        <div className='input-wrapper'>
            <input type='text' placeholder={props.placeholder + '*'}/>  
        </div>
    );
}

export default Input;