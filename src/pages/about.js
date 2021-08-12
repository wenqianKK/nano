import * as React from 'react'
import Layout from '../components/layout'
import {
  containLeft,
  containWapper,
  containDesc,
  containTitle,
  containServerT,
  containServerN,
  containEmail,
  mapImgWrapper,
  imgMap
} from '../styles/about.module.css';
import map from "../images/map.png";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className={containLeft}>
        <div className={containWapper}>
            <div className={containTitle}>
                联系我们
            </div>
            <div className={containDesc}>
            团队在金融交易领域拥有软件及硬件全方位的完整高频解决方案，已经为全球多个国家提供解决方案，协助用户提升效率，达到更好的获利效果及竞争优势。
            </div>
            <div className={containServerT}>
              技术服务
            </div>
            <div className={containServerN}>
              +86 13889459845
            </div>
            <div className={containServerT}>
              商务服务
            </div>
            <div className={containServerN}>
               +86 15566960531
            </div>
            <div className = {containEmail}>
            hello@http://www.nano-express.cn
            </div>
        </div>
      </div>
      <div className={mapImgWrapper}>
        <img src={map} alt="map" className={imgMap}/>
      </div>
    </Layout>
  )
}

export default AboutPage