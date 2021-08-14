import React, { useState, } from 'react'
import Layout from '../components/layout'
import "../styles/global.css"
import {
  bannerWrapper,
  bannerTitle,
  banerImgWrapper,
  bannerImgItem,
  bannerSubtitle,
  bannerSubDesc,
  bannerSubDescWrap,
  bannerMore,
  aboutWrapper,
  aboutTitleC,
  aboutDescC,
  industryTitleWrapper,
  industryTitleI,
  cooperWrapper,
  cooperImg,
  cooperImgItem
} from '../styles/index.module.css';
import { homeData } from '../constant'
// aboutTitle:"关于NANO",
//   aboutDesc:"自成立之初一直专注于异构计算平台的研发，设计打造高效异构加速平台，推动软硬件协同发展。主营业务为网络数据处理加速卡、光网络传输系列平台等产品的研发、生产、和销售，及为用户提供相关专业全系列技术服务。在期货金融领域有较为广泛的应用",
//   industryTitle1:"国内FPGA技术顶尖团队\n金融硬件产品国产化先驱者",
//   industryTitle2:"金融交易解决方案服务商\n全链路信息处理专家",
const IndexPage = () => {
  const { 
    bannerData,
    aboutTitle,
    aboutDesc,
    industryTitle1,
    industryTitle2,
    cooperationTitle,
    cooperationDesc,
    cooperationData
  } = homeData
  const { 
    content,
  } = bannerData
  const [activeBanner, setActiveBanner] = useState('')

  return (
    <Layout pageTitle="Home Page" isHome={true}>
      <div className={bannerWrapper}>
        <div className={bannerTitle}>
         {bannerData.title}
        </div>
        <div className= {banerImgWrapper} >
        {content?.map((item) => (
          <div 
            className={bannerImgItem}
            style={{
              backgroundImage: `url(${
                item?.key === activeBanner ? 
                  item?.imgUrlHover : 
                    item?.imgUrl
              })`,
            }}
            onMouseOver={() => setActiveBanner(item?.key)}
            onMouseLeave={() => setActiveBanner('')}
          >
            <div className={bannerSubtitle}>
              {item.subTitle}
            </div>
            <div className={bannerSubDescWrap}>
              {item?.subDesc?.length>0 && 
                item?.subDesc?.map((itemIn) => (
                  <div className={bannerSubDesc}>
                    {itemIn}
                  </div>
                ))
              }
            </div>
            <div 
              className={bannerMore}
              style={{
                color: item?.key === activeBanner ? '#fff' : '#00C58E'
              }}
            >
              {item.more}
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className={aboutWrapper}>
        <div className={aboutTitleC}>
          {aboutTitle}
        </div>
        <div className={aboutDescC}>
          {aboutDesc}
        </div>
      </div>
      <div className={industryTitleWrapper}>
        <div className={industryTitleI}>
          {industryTitle1}
        </div>
        <div className={industryTitleI}>
          {industryTitle2}
        </div>
      </div>
      <div className={aboutWrapper}>
        <div className={aboutTitleC}>
          {cooperationTitle}
        </div>
        <div className={aboutDescC}>
          {cooperationDesc}
        </div>
        <div className={cooperWrapper}>
        {
          cooperationData?.map(item=>(
            <div className={cooperImgItem}>
              <img src={item} alt="img" className={cooperImg}/>
            </div>
          ))
        }
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage