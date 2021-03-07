import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Courses from './components/Courses';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Courses} />
          {/* <Courses /> TODO */}

        </Switch>
      </div>
    </Router>

  );
}

export default App;
