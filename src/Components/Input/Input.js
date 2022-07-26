import './Input.css';

function Input(props) {
    return (
        <div className='input-wrapper'>
            <input key={props.placeholder} type='text' value={props.value} placeholder={props.placeholder + '*'} onInput={props.onInput} />  
        </div>
    );
}

export default Input;