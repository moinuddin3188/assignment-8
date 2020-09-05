import React from 'react';
import Posts from './Components/Posts/Posts';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Comments from './Components/Comments/Comments';
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
          <Route exact path="/home">
            <Posts/>
          </Route>
          <Route path="/comment/:postId">
            <Comments/>
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
