import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import FeedPage from './features/feedPage/FeedPage';
import Header from './features/header/Header';
import SignIn from './features/signIn/SignIn';
import SignUpContainer from './features/signUp/SignUpContainer';
import AuthProvider from './providers/AuthContext';
import { AuthRoute } from './util/routesUtil';

// Style everything so far

function App() {
  return (
    <AuthProvider>
    <Header />
    <div className="App">
    <Switch>
      <AuthRoute exact path="/">
        Hello
      </AuthRoute>

      <AuthRoute path="/signup">
        <SignUpContainer />
      </AuthRoute>

      <AuthRoute path="/login">
        <SignIn />
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
