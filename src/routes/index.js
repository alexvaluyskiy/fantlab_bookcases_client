import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'layouts/CoreLayout';

import HomeView from 'views/HomeView';
import AboutView from 'views/AboutView';
import BookcaseView from 'views/BookcaseView';
import BookcaseWorkView from 'views/BookcaseWorkView';

export default (
  <Route component={CoreLayout} path="/">
    <IndexRoute component={HomeView} />
    <Route component={AboutView} path="/about" />
    <Route path="bookcases" component={BookcaseView} />
    <Route path="bookcases/:bookcaseId" component={BookcaseWorkView} />
  </Route>
);
