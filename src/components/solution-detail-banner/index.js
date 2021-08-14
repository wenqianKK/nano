import * as React from 'react'
import {
  bannerWrapper,
  bannerContainer,
  bannerLeft,
  bannerLeftTitle,
  bannerRight,
  bannerLeftDesc,
  bannerLeftAbility,
  bannerLeftAbilityItem
} from './index.module.css'

const SolutionDetailBanner = ({bannerData}) => {
  // console.log('bannerData',bannerData)
  return (
    <div className={bannerWrapper}> 
      <div className={bannerContainer}>
        <div className={bannerLeft}>
          <div className={bannerLeftTitle}>
            {bannerData.name}
          </div>
          <div className={bannerLeftDesc}>
            {bannerData.bannerDesc}
          </div>
          <div className={bannerLeftAbility}>
            {
              bannerData.bannerAbility && bannerData.bannerAbility.length>0 &&  
              bannerData.bannerAbility.map(item => <div className={bannerLeftAbilityItem}>
                <img src={item.iconUrl} alt={bannerData.name}/>
                <div>
                  {item.content}
                </div>

              </div>)
            }
          </div>
        </div>
        <div className={bannerRight}>
          <img src={bannerData.imgUrl} alt={bannerData.type}/>
        </div>
      </div>

    </div>
  )
}
export default SolutionDetailBanner
