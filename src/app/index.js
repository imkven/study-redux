import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import todoApp from './reducers'

// components
import App from './components/App'
import Bar from './components/Bar'
import Foo from './components/Foo'

let store = createStore(todoApp)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Bar}/>
          <Route path="foo" component={Foo}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
