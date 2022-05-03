import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Background from './Components/Background/Background';
import Contacts from './Pages/Contacts/Contacts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/'component=""/>
            <Route path='/services' component="" />
            <Route path='/contacts' component={Contacts} />
            <Route path='/sign-up' component="" />
          </Routes>
      </BrowserRouter>
      <Contacts />
      {/*<Footer />*/}
    </>
  );
}

export default App;
