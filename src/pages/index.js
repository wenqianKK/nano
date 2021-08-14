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
  cooperImgItem,
  bannerImgItemPicture
} from '../styles/index.module.css';
import { homeData } from '../constant'

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
            // style={{
            //   backgroundImage: `url(${
            //     item?.key === activeBanner ? 
            //       item?.imgUrlHover : 
            //         item?.imgUrl
            //   })`,
            // }}
            onMouseOver={() => setActiveBanner(item?.key)}
            onMouseLeave={() => setActiveBanner('')}
          >
           <img 
           src={item?.key === activeBanner ? 
                  item?.imgUrlHover : 
                    item?.imgUrl}
            className={bannerImgItemPicture}
            />
            <div className={bannerSubtitle}>
              {item.subTitle}
            </div>
            <div className={bannerSubDescWrap}>
              {item?.subDesc?.length>0 && 
                item?.subDesc?.map((itemIn) => (
                  <div className={bannerSubDesc}>
                    <a href={itemIn.goUrl} >{itemIn.text}</a>
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
              <a 
                href={item.moreUrl} 
                style={{
                color: item?.key === activeBanner ? '#fff' : '#00C58E'
               }}
              >
                {item.more}
              </a>
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
