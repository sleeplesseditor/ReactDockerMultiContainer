import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Fib from './components/Fib/Fib';
import OtherPage from './components/OtherPage/OtherPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;
