import './TextBox.css';

function TextBox(props) {
    return (
        <div className='textbox-wrapper'>
            <textarea placeholder={props.placeholder + '*'}></textarea>
        </div>
    );
}

export default TextBox;