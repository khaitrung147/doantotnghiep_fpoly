import React, { Component } from "react";
import Component_list from "../../component";
import { Switch, Route, Link } from "react-router-dom";

class Index extends Component {
  state = {};
  render() {
    return (
      <>
        <Switch>
          <Route path="/admin" exact component={Component_list.Dashboard} />
        </Switch>
      </>
    );
  }
}

export default Index;
