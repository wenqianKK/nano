import * as React from 'react'
import { Link } from 'gatsby'
import {
  logo,
  navLinks,
  header,
  nav,
  navActive,
  imgLogo

} from './index.module.css'
// import { StaticImage } from 'gatsby-plugin-image'
import logoImg from "../../images/logo.png"

const Header = ({ pageTitle, children }) => {
  return (
    <header className={header}>
      <div className={logo}>
      <img src={logoImg} alt="Logo" className={imgLogo}/>
        {/* <StaticImage
          alt="nano express"
          src="../../images/logo.png"
        /> */}
        {/* <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        /> */}
      </div>
      <nav className={nav}>
        <ul className={navLinks}>
          <li><Link to="/" activeClassName={navActive}>首页</Link></li>
          <li><Link to="/solution" activeClassName={navActive}>解决方案</Link></li>
          <li><Link  activeClassName={navActive}>产品方案</Link></li>
          <li><Link to="/about" activeClassName={navActive}>联系我们</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header