import React, { useState ,useEffect} from 'react';

import {
  tabWrapper,
  tabContainer,
  tabItem,
  tabIcon,
  tabContent,
  borderBottom
} from './index.module.css'

const Tab = ({ dataSource,active ,onChange,style={}}) => {
  const [activeTab, setActive] = useState(active);

  const activeTabStyle = {
    borderBottom:"3px solid #00B996",
    color:"#00B996"
  }
  useEffect(() => {
    setActive(active)
  }, [active])

  return (
    <div className={tabWrapper} style={style}>
      <div className={tabContainer}>
        {
          dataSource && dataSource.length>0 && dataSource.map (item => 
          <div className={tabItem} style={activeTab ===  item.value ? activeTabStyle:{}} onClick={()=>{onChange(item.value)}}>
            {item.icon && <img src={activeTab === item.value ? item.activeIcon: item.icon} alt="icon" className={tabIcon}/>}
            <span className={tabContent}>{item.label}</span>
          </div>)
        }
      </div>
      <div className={borderBottom}></div>
    </div>
  )
}

export default Tab