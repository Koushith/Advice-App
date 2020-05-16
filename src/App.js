import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Advice from './components/Advice';
import './App.css';

const App = () => {
  const [advices, setAdvices] = useState([]);
  const fetchAdvice = async () => {
    const res = await Axios.get('https://api.adviceslip.com/advice');
    console.log('RESPONSE: ', res.data.slip.advice);

    const ad = res.data.slip.advice;

    setAdvices(ad);
  };
  // load before hitting button
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className='container-fluid app'>
      <div className='card p-4'>
        <Advice advices={advices} />
        <button className='btn btn-primary mt-3 button' onClick={fetchAdvice}>
          GIVE ME MORE ADVICE!!
        </button>
      </div>
    </div>
  );
};

export default App;
