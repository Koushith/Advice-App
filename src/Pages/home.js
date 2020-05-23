import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import JokePage from '../Pages/jokePage';
import advicePage from '../Pages/advicePage';
const Home = () => {
  return (
    <Router>
      <div>
        <div className='row'>
          <div className='col'>
            <div class='card' style={{ width: '18rem' }}>
              <div class='card-body'>
                <Link to='/Advice'>Advice</Link>
              </div>
            </div>
          </div>
          <div className='col'>
            <div class='card' style={{ width: '18rem' }}>
              <div class='card-body'>
                <Link to='/Joke'>Joke</Link>
              </div>
            </div>
          </div>
        </div>

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
