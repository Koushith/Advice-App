// import React from 'react';
// import axios from 'axios';
// import './App.css';

// class App extends React.Component {
//   state = { advice: '' };

//   componentDidMount() {
//     this.fetchAdvice();
//   }
//   fetchAdvice = () => {
//     axios
//       .get('https://api.adviceslip.com/advice')
//       .then((response) => {
//         // destructure the data
//         const { advice } = response.data.slip;
//         // console.log(advice);
//         // put this into state , to access in render. i.e render out
//         this.setState({ advice: advice });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   render() {
//     const { advice } = this.state;
//     return (
//       <div className='app'>
//         <div className='card'>
//           <h1 className='heading'>{advice}</h1>
//           <button className='button' onClick={this.fetchAdvice}>
//             <span>GIVE ME ADVICE</span>
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;

import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    advice: '',
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='container-fluid  app'>
        <div className='card p-4'>
          <h1 className='heading'>{this.state.advice}</h1>
          <button
            className='btn btn-primary mt-3 button'
            onClick={this.fetchAdvice}
          >
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
