import React from 'react'
import { Link, browserHistory } from 'react-router'

const Header = () => (
  <div>
    <p>&nbsp;</p>
    <ul className="nav nav-tabs">
      <li className="active"><Link to="/">Home</Link></li>
      <li><Link to="foo">Foo</Link></li>
    </ul>
    <p>&nbsp;</p>
  </div>
)

export default Header
