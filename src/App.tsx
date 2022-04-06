import React from 'react';
import './App.css';
import Footer from './components/organisms/Footer/Footer';
import Header from './components/organisms/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Library from './pages/Library';
import Entrepreneurship from './pages/Entrepreneurship';
import BeyondEntrepreneurship from './pages/BeyondEntrepreneurship';

function App() {
  return (

    <Router>
      <Header />
      <div className="content">
        <Switch>
          <Route exact path='/' component={Library} />
          <Route exact path='/Entrepreneurship' component={Entrepreneurship} />
          <Route exact path='/BeyondEntrepreneurship' component={BeyondEntrepreneurship} />
        </Switch>
      </div>
      <div className='footer'>
        <Footer />
      </div>

    </Router>



  );
}

export default App;

