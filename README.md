Code Helpfull for Redux-Thunk Implementation...

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';

// use applyMiddleware to add the thunk middleware to the store
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


For Concat Two array of data

function App() {
  const array1 = ["a", "b", "c"];
  const array2 = ["d", "e", "f"];
  const array3 = [...array1, ...array2];

  const fruit = ["apple", "mango", "banana"];
  const veg = ["lemon", "potato", "tomato"];

  const mix = fruit.concat(veg);

  const startArray = [3, 4, 5];
  const newLength = startArray.unshift(2);
  console.log(newLength);
  console.log(startArray);

  startArray.unshift(-1, 0, 2);
  console.log(startArray);

  console.log(mix);

  console.log(array3);
  return (
    <div>
      {mix.map((item, index) => (
        <div key={index}> {item}</div>
      ))}
    </div>
  );
}

export default App;
