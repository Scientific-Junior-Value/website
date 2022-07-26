import './Button.css';

const Button = (props) => {
  return (
    <div className='button-wrapper'>
        <button type={props.type} className='button' onClick={props.onClick}>
            Enviar
        </button>
    </div>
  );
}

export default Button;
