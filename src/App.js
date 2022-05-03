import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Background from './Components/Background/Background';

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
      <Background />
      <div className='apagar'>
        <p>Só para se notar a navbar a mudar de cor 😃</p>
      </div>
      {/*<Footer />*/}
    </>
  );
}

export default App;
