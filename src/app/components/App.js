import React from 'react'

// @TODO: Try put route in this file

import Header from './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({ children }) => (
  <div>
    <Header />
    <AddTodo />
    <VisibleTodoList />
    {children}
    <Footer />
  </div>
)

export default App
