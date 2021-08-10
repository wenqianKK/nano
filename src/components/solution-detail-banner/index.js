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
// {
//   icon: securitieImg,
//   name: "期货/证券公司",
//   desc: ["全链路加速", "快速稳定", "极速响应活动"],
//   moreUrl:"/solution/securitie",
//   type:"securitie",
//   banerDesc:"期货公司、证券公司存在多元化交易需求。尤其面向高频交易客户需要更稳定、更快速的产品支撑客户实现交易。"
// },
const SolutionDetailBanner = ({bannerData}) => {
  console.log('bannerData',bannerData)
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