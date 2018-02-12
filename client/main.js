import React from 'react';
import ReactDOM from 'react-dom';


const render = () => {
  ReactDOM.render(
    <div>Hello React</div>,
    document.getElementById('root')
  );
}

// Dev tool
if (__DEV__) {
  if (module.hot) {
    module.hot.accept();
  }
}

// Go!
render()
