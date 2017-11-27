import React from 'react';
import { Router, Route } from 'dva/router';
import Users from "./routes/Users.js";
import Login from "./routes/Login.js";
import Register from "./routes/register.js";
import Top from "./routes/Top"
import Home from './routes/Home'
import Demo from './routes/Demo'
import Search from "./routes/Search.js";
import CreateArticle from "./routes/CreateArticle.js";
import PageContent from "./routes/PageContent.js";
import LoadArticle from "./routes/LoadArticle.js";
import App from './routes/App'

function RouterConfig({ history }) {
  console.log(history);
  return (
    <Router history={history}>
      <Route component={App}>
          <Route path="/" component={Login} />
          {/* <Route path="/users" component={Users} /> */}
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/home" component= {Home}/>
          <Route path="/Search" component={CreateArticle} />
          <Route path="/Demo" component={Demo} />
          <Route path="/Add" component={CreateArticle} />
          <Route  path="/users" component={Users} >
              <Route path="/users/loadArticle" component={LoadArticle} />
              <Route  path="/users/pageContent/:id" component={PageContent} />
          </Route>
          <Route path="/createArticle" component={CreateArticle} />
          {/* <Route path="/users/pageContent/:id" component={PageContent} /> */}
          {/* <Route path="/users/:id" component={LoadArticle} /> */}
      </Route>
    </Router>
  );
}

export default RouterConfig;
