import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import spinner from '../images/spinner.svg';

const Advice = () => {
  const [advices, setAdvices] = useState();
  const [loading, setLoading] = useState(true);

  const fetchAdvice = async () => {
    setLoading(true);
    const res = await Axios.get('https://api.adviceslip.com/advice');
    console.log('RESPONSE: ', res.data.slip.advice);

    const ad = res.data.slip.advice;
    setLoading(false);
    setAdvices(ad);
  };
  // load before hitting button
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className='app'>
      <div className='container-fluid '>
        <div className='card p-4'>
          {loading ? <img src={spinner} alt='loading' /> : <h1>{advices} </h1>}

          <button className='btn btn-primary mt-3 button' onClick={fetchAdvice}>
            GIVE ME MORE ADVICE!!
          </button>
        </div>
      </div>
      <div className='footer-credits'></div>
    </div>
  );
};

export default Advice;
