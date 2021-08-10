import * as React from 'react'
import {
  containTitle,
  modularWrapper,
  modularItem,
  modularItemIcon,
  modularItemName,
  modularItemDesc,
  modularItemMore,
  containSubtitle,
  titleWrapper
} from './index.module.css'

const BannerBox = ({data,subtitle,title,wrapperBackgroud,boxBackgroud,color,imgWidth,imgHeight}) => {
  return (<div style={{background:wrapperBackgroud}}>
  <div className = {titleWrapper}>
    {subtitle && 
      <div className={containSubtitle}>
        {subtitle}
      </div>
    }
    {title && 
      <div className={containTitle}>
        {title}
      </div>
    }
  </div>
  <div className={modularWrapper}>
    {data.map(item => {
      return <div className={modularItem} style={{background:boxBackgroud,color:color}}>
        <div className={modularItemIcon}>
          <img 
            src={item.imgUrl} 
            alt={"icon"} 
            style={{ width:imgWidth,height:imgHeight}}
          />
        </div>
        <div className={modularItemName}>
          {item.name}
        </div>
        <div className={modularItemDesc}>
          {
            item.desc.map(itemDesc => <p>{itemDesc}</p>)
          }
        </div>
        <div className={modularItemMore}>
          <a href={item.moreUrl}>{"了解更多>"}</a>
        </div>
      </div>
    })}
  </div>
</div>)
}

export default BannerBox