import './TextBox.css';

const TextBox = (props) => {
    return (
        <div className='textbox-wrapper'>
            <textarea key={props.placeholder} value={props.value} onInput={props.onInput} placeholder={props.placeholder + '*'}></textarea>
        </div>
    );
}

export default TextBox;