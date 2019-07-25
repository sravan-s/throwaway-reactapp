import React from 'react'
import { Route, Switch } from 'react-router-dom';

const Page1 = () => (<div>page una</div>);
const Page2 = () => (<div>page dos</div>);
const Page3 = () => (<div>page tres</div>);

module.exports = (
  <div>
    <div>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/page" component={Page2} />
        <Route path="*" component={Page3} />
      </Switch>
    </div>
  </div>
)
