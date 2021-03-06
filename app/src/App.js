import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AllJobs from './pages/AllJobs';
import HowItWorks from './pages/HowItWorks';
import NotFound from './pages/NotFound';

import './app.css';

function App() {
  return (
    <BrowserRouter>
      <div id='view-content'>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/jobs" component={AllJobs} />
          <Route exact path="/faq" component={HowItWorks} />
          <Route component={NotFound} />
        </Switch>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
