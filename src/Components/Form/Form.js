import Button from '../Button/Button';
import Input from '../Input/Input';
import TextBox from '../TextBox/Textbox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import './Form.css';

const Form = () => {
    const notify = (e) => toast(e);
    const [email, setEmail] = useState(""); 
    const [name, setName] = useState(''); 
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState("");
    const [showNameError, setShowNameError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showSubjectError, setShowSubjectError] = useState(false);
    const [showMessageError, setShowMessageError] = useState(false);

    const checkEmail = () => {
        const testEmail =    /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
        return (testEmail.test(email));
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setShowEmailError(false);
        console.log(email);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
        setShowNameError(false);
        console.log(name);
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
        setShowSubjectError(false);
        console.log(subject);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setShowMessageError(false);
        console.log(message);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || name === "null" || name.length < 3){
            console.log("Please provide a valid name!");
            setShowNameError(true);
            return;
        }

        if (!email || !checkEmail() || email === "null") {
            console.log("Please provide a valid email!");
            setShowEmailError(true);
            return;
        }

        if (!subject || subject === "null" || subject.length < 6) {
            console.log("Please provide a valid subject!");
            setShowSubjectError(true);
            return;
        }
        if (!message || message === "null" || message.length < 20) {
            console.log("Please provide a valid message!");
            setShowMessageError(true);
            return;
        }

        console.log("nome: ", name);
        console.log("email: ", email);
        console.log("assunto: ", subject);
        console.log("mensagem: ", message);
        toast("Mensagem Enviada!");
        setTimeout(() => {
            setEmail("");
            setMessage("");
            setName("");
            setSubject("");
        }, 500);
  }

    return (
        <>
            <div className='form'>
                <form className='form-wrapper'>
                    <Input placeholder='Nome' value={name} onInput={handleNameChange} />
                    {showNameError && <span className='error-message'>Por favor insere um nome válido.</span>}
                    <Input placeholder='Email' value={email} onInput={handleEmailChange} />
                    {showEmailError && <span className='error-message'>Por favor insere um email válido</span>}
                    <Input placeholder='Assunto' value={subject} onInput={handleSubjectChange} />
                    {showSubjectError && <span className='error-message'>Assunto Inválido.</span>}
                    <TextBox placeholder='Mensagem' value={message} onInput={handleMessageChange} />
                    {showMessageError && <span className='error-message block'>Mensagem Inválida.</span>}
                    <span className='fill-fields'>* (campo de preenchimento obrigatório)</span>
                    <Button type='submit' onClick={handleSubmit} />
                </form>
                    <ToastContainer autoClose={3000}></ToastContainer>
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