import React from 'react';
import './App.css';
import FeedPage from './features/feedPage/FeedPage';
import SignUpContainer from './features/signUp/SignUpContainer';

function App() {
  return (
    <div className="App">
      <SignUpContainer />
      {/* <FeedPage /> */}
    </div>
  );
}

export default App;
