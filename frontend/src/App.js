import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import FeedPage from './features/feedPage/FeedPage';
import NavBar from './features/navBar/NavBar';
import SignUpContainer from './features/signUp/SignUpContainer';
import AuthProvider from './providers/AuthContext';
import { AuthRoute } from './util/routesUtil';

// Get Login working
// Style everything so far

function App() {
  return (
    <AuthProvider>
    <NavBar />
    <div className="App">
    <Switch>
      <Route exact path="/">
        Hello
      </Route>

      <AuthRoute path="/signup">
        <SignUpContainer />
      </AuthRoute>

      <Route path="/games">
        <FeedPage />
      </Route>
    </Switch>
    </div>
    </AuthProvider>
  );
}

export default App;
