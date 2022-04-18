import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from './Components/Form/Form';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' exact={true} component=""/>
            <Route path='/services' component="" />
            <Route path='/products' component="" />
            <Route path='/sign-up' component="" />
          </Routes>
      </BrowserRouter>
      <Form />
      <Footer />
    </>
  );
}

export default App;
