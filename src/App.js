import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Contacts from './Pages/Contacts/Contacts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route path='/' exact={true} component=""/>
            <Route path='/services' component="" />
            <Route path='/contacts/' component={Contacts} />
            <Route path='/sign-up' component="" />
          </Switch>
      </BrowserRouter>
      <Contacts />
    </>
  );
}

export default App;
