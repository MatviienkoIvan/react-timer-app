var React = require("react");
var ReactDOM = require("react-dom");
var { Router, Route, IndexRoute, hasHistory } = require("react-router");
var Main = require("Main");
var Countdown = require("Countdown");
var Timer = require("Timer");

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hasHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById("rootApp")
);
