import * as React from 'react'
import Header from '../header/index'

const Layout = ({children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout