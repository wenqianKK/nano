import React, { useState ,useEffect} from 'react';

import {
  detailWrapper,
  detailMain,
  caseWrapper,
  caseImgWrapper,
  caseImg,
  caseContent,
  contentWrapper,
  contentSideRight,
  contentSideTitle,
  contentCenter,
  contentSideDesc,
  contentSideSubTitle,
  contentSideLittleText,
  contentSideSubDesc
} from './index.module.css'
import TextTab from '../../components/text-tab'
//   marketQuicken: {
//     topCaseImg: tabfAct1,
//     topCaseContent: "nano行情是基于FPGA的纳秒级行情加速系统，提供快速，精准的行情通道。为期货、证券、投资机构及专业人士的量化高频交易提供专属定制化的技术支撑产品。",
//     sideTab: [{
//       label: "上期所急速行情",
//       value: "shfe"
//     }, {
//       label: "大商所极速行情",
//       value: "dce"
//     }, {
//       label: "中金所极速行情",
//       value: "cicc"
//     }, {
//       label: "郑商所极速行情",
//       value: "zce"
//     }],
//     sideContent: {
//       zce: {
//         title: "郑商所极速行情",
//         desc: "NANO行情系统以FPGA硬件技术处理，来处理交易所行情。以快速稳定的效果为用户提供了纳秒级的低延时交易体验。同时保证高并发及优选的性能，为专业量化投资者提供了高成单率及良好竞争体现。",
//         otherDesc: [{
//           subTitle: "特点优势",
//           subContent: [{
//             littleText: "",
//             subDesc: ["基于FPGA技术设计，软硬件双层优化互备，极速体验；", "支持交易所全档行情；", "150纳秒穿透延迟，性能0抖动，100万秒消息吞吐量；", "多路优选机制，多通道并行组播发送；"]
//           }]
//         }, {
//           subTitle: "两种实际部署",
//           subContent: [{
//             littleText: "网络版行情服务器 ",
//             subDesc: ["网络版行情服务器", "网络延时大", "行情膨胀推挤递延严重，网络超载", "订阅不灵活，全局订阅，券商配置", "全局选优, 无法实现逐个合约选优", "价格相对优惠"]
//           },{
//             subDesc: ["网络延时小，通常只经过L1", "只订阅本策略机需要的合约","盘前和盘中随时更改订阅标的","本地选优，A B 路可混合输出","增量恢复全量直接送到CPU cache"]
//           }]
//         }]
//       }
//     }
//   }
const ProductDetail = ({detailData = {sideTab:[{}]}}) => {
  const [active, setActive] = useState(detailData.sideTab[0]["value"]);
  const { sideContent={} } = detailData
  console.log('detailData',detailData)
  console.log('sideContent',sideContent)
  console.log('active',active)
  console.log('sideContent[active]',sideContent[active])

  const sideContentItem = sideContent[active] ? sideContent[active] :{}
  console.log('actisideContentItemve',sideContentItem)
console.log('sideContent["otherDesc"]',sideContent["otherDesc"])
  useEffect(() => {
    setActive(detailData.sideTab[0]["value"])
  }, [detailData])
  return (<div className={detailWrapper}> 
    <div className={detailMain}>

      <div className={caseWrapper}>
        <div className={caseImgWrapper}>
          <img src={detailData.topCaseImg} alt="Logo" className={caseImg}/>
        </div>
        <div className={caseContent}>
          <span>
            {detailData.topCaseContent}
          </span>
        </div>
      </div>

      <div className={contentWrapper}>

        <TextTab
          dataSource={detailData.sideTab}
          style={{flex:1,paddingTop:54}}
          active={active}
          onChange={(active)=>{setActive(active)}}
        />
        <div className={contentCenter}></div>

        <div className={contentSideRight}>
          <div className={contentSideTitle}>
            {sideContentItem["title"]}
          </div>
          <div className={contentSideDesc}>
            {sideContentItem["desc"]}
          </div>
          { sideContentItem["otherDesc"] && sideContentItem["otherDesc"].length >0 && sideContentItem["otherDesc"].map(item =><div>
            <div className={contentSideSubTitle}>
              {item.subTitle}
            </div>
            {
              item.subContent && item.subContent.length>0 && item.subContent.map(itemIn => <>
                {
                  itemIn.littleText && <div className={contentSideLittleText}> {itemIn.littleText} </div>
                }
                {
                  itemIn.subDesc && itemIn.subDesc.length>0 && itemIn.subDesc.map(subDesc => <div className={contentSideSubDesc}>
                    {subDesc}
                  </div>)
                }
              </>)
            }
          </div>) 
          }
        </div>

      </div>
    </div>
  </div>
    
  )
}

export default ProductDetail