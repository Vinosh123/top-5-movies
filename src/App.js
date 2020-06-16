import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/store'
import DisplayMovies from './Components/DisplayMovies';

export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route exact path="/" component={DisplayMovies} />
        </Router>
      </div>
    </Provider>
  );
}
export default App;
