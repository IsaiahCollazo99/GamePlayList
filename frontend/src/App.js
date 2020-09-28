import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import FeedPage from './features/feedPage/FeedPage';
import { add_multiple_lists } from './features/gameCard/listsSlice';
import Header from './features/header/Header';
import SignIn from './features/signIn/SignIn';
import SignUpContainer from './features/signUp/SignUpContainer';
import { AuthContext } from './providers/AuthContext';
import { getUserLists } from './util/apiCalls/getRequests';
import { AuthRoute } from './util/routesUtil';

function App() {
  const lists = useSelector(state => state.lists);
  const { currentUser } = useContext(AuthContext);

  const dispatch = useDispatch();

  const getUserListsCall = async () => {
    try {
      if(currentUser && !lists.length) {
        const data = await getUserLists(currentUser.id);
        dispatch(add_multiple_lists(data.lists));
      }
    } catch ( error ) {
      console.log(error);
    }
}

  useEffect(() => {
    getUserListsCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
  
  return (
    <div className="App">
    <Header />
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
  );
}

export default App;
