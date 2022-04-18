import Input from '../Input/Input';
import TextBox from '../TextBox/Textbox';
import './Form.css';

function Form() {
    return (
        <div className='form'>
            <div className='form-wrapper'>
                <Input placeholder='Nome'/>
                <Input placeholder='Email'/>
                <Input placeholder='Assunto'/>
                <TextBox placeholder='Mensagem'/>
            </div>
            <span className='fill-fields'>* (campo de preenchimento obrigatório)</span>
        </div>
    );
}

export default Form;