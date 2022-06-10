import './Contacts.css';
import Form from '../../Components/Form/Form';
import Background from '../../Components/Background/Background';
import DarkFooter from '../../Components/Footer/DarkFooter/DarkFooter';
import Animation from '../../Components/Animation/Animation';

function Contacts() {
  return (
    <Animation>
      <Background class='background' title='Contactos' desc=''/>
      <Form />
      <DarkFooter />
    </Animation>
  );
}

export default Contacts;