import * as React from 'react'
import {
  tabWrapper,
  tabContainer,
  tabItem,
  tabContent,
} from './index.module.css'

const TextTab = ({ dataSource,active ,onChange,style={}}) => {

  const activeTabStyle = {
    color:"#00B996"
  }

  return (
    <div className={tabWrapper} style={style}>
      <div className={tabContainer}>
        {
          dataSource && dataSource.length>0 && dataSource.map (item => 
          <div className={tabItem} style={active ===  item.value ? activeTabStyle:{}} onClick={()=>{onChange(item.value)}}>
            <span className={tabContent}>{item.label}</span>
          </div>)
        }
      </div>
    </div>
  )
}

export default TextTab