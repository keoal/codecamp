import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo(){
  return (
  <div>
  <h1>Alan</h1>
  <p>I want to learn React</p>
  <ol>
  <li>Antwerp</li>
  <li>Munich</li>
  <li>Sweden</li>
  </ol>
  </div>
  );
};

ReactDOM.render(<MyInfo />, document.getElementById('root'));
