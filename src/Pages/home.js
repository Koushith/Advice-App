import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import JokePage from '../Pages/jokePage';
import advicePage from '../Pages/advicePage';
const Home = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/Joke'>Joke</Link>
          </li>
          <li>
            <Link to='/Advice'>Advice</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path='/Joke' component={JokePage}></Route>
          <Route path='/Advice' component={advicePage}></Route>
        </Switch>
      </div>
    </Router>
  );
};
export default Home;
