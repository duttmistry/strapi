/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { AnErrorOccurred } from "@strapi/helper-plugin";
import pluginId from "../../pluginId";
import HomePage from "../HomePage";
import About from "../About";
import Test from "../Test";
import { Button } from "@mui/material";

const App = () => {
  const history = useHistory();
  return (
    <div>
      <Button onClick={() => history.push(`/plugins/${pluginId}`)}>home</Button>
      <Button onClick={() => history.push(`/plugins/${pluginId}/about`)}>
        About
      </Button>
      <Button onClick={() => history.push(`/plugins/${pluginId}/test`)}>
        Test
      </Button>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route path={`/plugins/${pluginId}/about`} component={About} />
        <Route path={`/plugins/${pluginId}/test`} component={Test} />
        <Route component={AnErrorOccurred} />
      </Switch>
    </div>
  );
};

export default App;
