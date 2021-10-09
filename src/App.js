import './css/App.scss';

import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function App() {
  useEffect(()=>{
    window.$crisp=[];
    window.CRISP_WEBSITE_ID="3277f6f6-edc3-43d5-b11c-7240b39628c7";
    
    (function(){
      const d=document;
      const s=d.createElement("script");
    s.src="https://client.crisp.chat/l.js";s.async=1;
    d.getElementsByTagName("head")[0].appendChild(s);})();
  },[])


  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/About' component={About}/>
        <Route exact path='/Services' component={Services}/>
        <Route exact path='/Portfolio' component={Portfolio}/>
        <Route exact path='/Contact' component={Contact}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
