import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';

function App() {
  return (
    <Router>
      <main className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Courses} />
          <Route exact path='/courses/create' component={CreateCourse} />
          <Route exact path='/courses/:id' component={CourseDetail} />
          <Route exact path='/courses/:id/update' component={UpdateCourse} />
          <Route path='/signin' component={UserSignIn} />
          <Route path='/signup' component={UserSignUp} />
          <Route path='/signout' component={UserSignOut} />
        </Switch>
      </main>
    </Router>

  );
}

export default App;
