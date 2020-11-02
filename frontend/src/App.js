import { Modal } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import FeedPage from './features/feedPage/FeedPage';
import { add_multiple_lists } from './features/gameCard/listsSlice';
import CreateListForm from './features/general/CreateListForm';
import Header from './features/header/Header';
import ListDisplay from './features/listDisplay/ListDisplay';
import SearchPage from './features/searchPage/SearchPage';
import { close_modal } from './features/sideBar/createListSlice';
import SideBar from './features/sideBar/SideBar';
import SignIn from './features/signIn/SignIn';
import SignUpContainer from './features/signUp/SignUpContainer';
import { AuthContext } from './providers/AuthContext';
import { AuthRoute } from './util/routesUtil';

function App() {
  const lists = useSelector(state => state.lists);
  const createList = useSelector(state => state.createList);
  const { currentUser } = useContext(AuthContext);

  const dispatch = useDispatch();

  const setUserLists = () => {
    try {
      if(currentUser && !lists.length) {
        dispatch(add_multiple_lists(currentUser.lists));
      }
    } catch ( error ) {
      console.log(error);
    }
}

  useEffect(() => {
    setUserLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
  
  return (
    <div className="App">
    <Header />
    <SideBar />

    <Modal
      open={createList.openModal}
      onClose={() => dispatch(close_modal())}
    >
      <CreateListForm />
    </Modal>

    <Switch>
      <AuthRoute path="/signup">
        <SignUpContainer />
      </AuthRoute>

      <AuthRoute path="/login">
        <SignIn />
      </AuthRoute>

      <Route exact path="/">
        <FeedPage />
      </Route>

      <Route path="/list/:id">
        <ListDisplay />
      </Route>

      <Route path="/search">
        <SearchPage />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
