import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

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
      <Footer />
    </>
  );
}

export default App;
