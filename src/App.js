import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Contacts from './Pages/Contacts/Contacts';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route path='/website' exact component={Home}/>
            <Route path='/website/portfolio' component={Home} />
            <Route path='/website/recrutamento' component={Home} />
            <Route path='/website/contactos' component={Contacts} />
            <Route path='/website/blog' component={Home} />
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
