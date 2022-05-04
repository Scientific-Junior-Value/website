import Input from '../Input/Input';
import TextBox from '../TextBox/Textbox';
import './Form.css';

function Form() {
    return (
        <>
            <div className='form'>
                <div className='form-wrapper'>
                    <Input placeholder='Nome'/>
                    <Input placeholder='Email'/>
                    <Input placeholder='Assunto'/>
                    <TextBox placeholder='Mensagem'/>
                    <span className='fill-fields'>* (campo de preenchimento obrigatório)</span>
                </div>
                <div className='labels'>
                    <ul className='labels-list'>
                        <li>
                            <span>Email:</span>
                            <span>geral@scientific.pt</span>
                            <span>scientificjuniorvalue@gmail.com</span>
                        </li>
                        <li>
                            <span>Morada:</span>
                        </li>
                        <li>
                            <span>Linkedin:</span>
                            <span>www.linkedin.com/in/scientificjuniorvalue/</span>
                        </li>
                        <li>
                            <span>Facebook:</span>
                            <span>www.facebook.com/ScientificJuniorValue/</span>
                        </li>
                        <li>
                            <span>Instagram:</span>
                            <span>www.instagram.com/scientificjuniorvalue/</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Form;