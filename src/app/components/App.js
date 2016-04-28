import React from 'react'

// @TODO: Try put route in this file

import Header from './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import GetFakeData from '../containers/GetFakeData'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({ children }) => (
  <div>
    <Header />
    <AddTodo />
    <GetFakeData />
    <VisibleTodoList />
    {children}
    <Footer />
  </div>
)

export default App
