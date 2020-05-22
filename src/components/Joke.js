import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import spinner from '../images/spinner.svg';

const Joke = () => {
  const [jokes, setJokes] = useState();
  const [loading, setLoading] = useState(true);
  const fechJokes = async () => {
    setLoading(true);
    const res = await Axios.get(
      'https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general'
    );
    console.log('RESPONSE: ', res.data[0].punchline);

    const joke = `${res.data[0].setup} ${res.data[0].punchline}`;

    setJokes(joke);
    setLoading(false);
  };
  // load before hitting button- if we didnt include [] it will run continuesly
  useEffect(() => {
    fechJokes();
  }, []);
  return (
    <div className='app'>
      <div className='container-fluid '>
        <div className='card p-4'>
          {loading ? <img src={spinner} alt='loading' /> : <h1>{jokes} </h1>}

          <button className='btn btn-primary mt-3 button' onClick={fechJokes}>
            CRACK ANOTHER ONE!!
          </button>
        </div>
      </div>
      <div className='footer-credits'></div>
    </div>
  );
};

export default Joke;

// https://english.api.rakuten.net/KegenGuyll/api/dad-jokes/details#api-calls
//https://codesandbox.io/s/dad-joke-generator-48285?file=/package-lock.json
