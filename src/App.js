import { Route, Switch } from "react-router-dom";
import Posts from "./components/Posts";
import NotFound from "./components/NotFound";
import React, { useEffect } from "react";

import Index from "./components/Posts/DetailPost/index";
import { handlerGetPosts } from "./store/actions/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handlerGetPosts());
  }, [dispatch]);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/:id" component={Index} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
