import React from 'react';
import Posts from './Components/Posts/Posts';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostDetail from './Components/PostDetail/PostDetail';
import NoMatch from './Components/NoMatch/NoMatch';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <Container maxWidth="sm">
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Posts/>
          </Route>
          <Route path="/home">
            <Posts/>
          </Route>
          <Route path="/post/:postId">
            <PostDetail/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
