import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  logo,
  navLinks,
  header,
  nav,
  navActive,
  imgLogo,
  navbarToggle,
  iconBar
} from './index.module.css';
import logoImg from "../../images/logo.png";
import { languageTypeData }  from '../../constant';
import { langData , getCookie }  from '../../constant/language';

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);
 

  const setCookie = (name,value) => {
    document.cookie = name + "="+ value ;
  }

  // const getCookie = (cookieName)=>{
  //   let start = document.cookie.indexOf(cookieName+'=');
  //   if (start == -1) return "";
  //   start = start+cookieName.length+1;
  //   let end = document.cookie.indexOf(';', start);
  //   if (end == -1) end=document.cookie.length;
  //   return document.cookie.substring(start, end);
  // }
  // console.log('getCookie["langtype"]',getCookie("langtype"))
  // const lang = langData[ getCookie("langtype") || "en" ]

  return (
    <header className={header}>
      <div className={logo}>
        <img src={logoImg} alt="Logo" className={imgLogo}/>
      </div>
      <button 
        type="button" 
        data-toggle="collapse"  
        className={navbarToggle}
        onClick={()=>{setNavVisible(!navVisible)}}
      >
        <span className={iconBar}></span>
        <span className={iconBar}></span>
        <span className={iconBar}></span>
      </button>
      <nav className={nav} style={navVisible ? {display:"flex"}:{}}>
        <ul className={navLinks}>
          <li><Link to="/" activeClassName={navActive}>首页</Link></li>
          <li><Link to="/solution" activeClassName={navActive}>解决方案</Link></li>
          <li><Link to="/product"activeClassName={navActive}>产品方案</Link></li>
          <li><Link to="/about" activeClassName={navActive}>联系我们</Link></li>
        </ul>
      </nav>
      <div>
        {/* {
          languageTypeData.length>0 && languageTypeData.map(item =>
            <div onClick={()=>{
              setCookie("langtype",item.value)
              window.location.reload()
            }} >{item.label}</div>
          )
        } */}
        
      </div>
    </header>
  )
}

export default Header