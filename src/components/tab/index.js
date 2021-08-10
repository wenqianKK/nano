import * as React from 'react'
import {
  tabWrapper,
  tabContainer,
  tabItem,
  tabIcon,
  tabContent,
  borderBottom
} from './index.module.css'

const Tab = ({ dataSource,active ,onChange}) => {

  const activeTabStyle = {
    borderBottom:"3px solid #00B996",
    color:"#00B996"
  }

  return (
    <div className={tabWrapper}>
      <div className={tabContainer}>
        {
          dataSource && dataSource.length>0 && dataSource.map ((item,index) => 
          <div className={tabItem} style={active ===  index ?activeTabStyle:{}} onClick={()=>{onChange(index)}}>
            {item.icon && <img src={active === index ? item.activeIcon: item.icon} alt="icon" className={tabIcon}/>}
            <span className={tabContent}>{item.content}</span>
          </div>)
        }
      </div>
      <div className={borderBottom}></div>
    </div>
  )
}

export default Tab