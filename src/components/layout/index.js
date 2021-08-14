import * as React from 'react'
import Header from '../header/index'
import Footer from '../footer/index'
const Layout = (props) => {

  const isHome = props.isHome ? props.isHome : false
  return (
    <div>
      <Header isHome={isHome}/>
      <main>
        {props.children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout