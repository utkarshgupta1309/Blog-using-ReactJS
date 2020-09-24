import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
import Posts from './components/Posts'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* Switch tag matches only one component */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/:post_id" component = {Posts}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
