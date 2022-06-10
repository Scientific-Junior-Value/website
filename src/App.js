import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Contacts from './Pages/Contacts/Contacts';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Team from './Pages/Team/Team';
import QuemSomos from './Pages/QuemSomos/QuemSomos';
import Recrutamento from './Pages/Recrutamento/Recrutamento';
import Portfolio from './Pages/Portfolio/Portfolio';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <BrowserRouter>
      <AnimatePresence>
        <Navbar />
        <ScrollToTop>
          <Switch>
            <Route path='/website' exact component={Home}/>
            <Route path='/website/quem-somos' component={QuemSomos}/>
            <Route path='/website/equipa' component={Team} />
            <Route path='/website/portfolio' component={Portfolio} />
            <Route path='/website/recrutamento' component={Recrutamento} />
            <Route path='/website/contactos' component={Contacts} />
            <Route path='/website/blog' component={Blog} />
          </Switch>
        </ScrollToTop>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;