import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Contacts from './Pages/Contacts/Contacts';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Recrutamento from './Pages/Recrutamento/Recrutamento';
import Portfolio from './Pages/Portfolio/Portfolio';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route path='/website' exact component={Home}/>
            <Route path='/website/portfolio' component={Portfolio} />
            <Route path='/website/recrutamento' component={Recrutamento} />
            <Route path='/website/contactos' component={Contacts} />
            <Route path='/website/blog' component={Blog} />
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
