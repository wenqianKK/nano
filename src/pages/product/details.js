import React, { useState } from 'react';
import Layout from '../../components/layout';
import {
 
} from '../../styles/solution-detail.module.css';

import Tab from '../../components/tab';
import ProductDetail from '../../components/product-detail'
import { productDetailsData } from '../../constant';
// const detailsData = {
//   dealDesks: {
//     topCaseImg: tabfAct1,
//     topCaseContent: "基于FPGA技术的纳秒级相应的交易系统，符合各大交易所及期货公司风控及检测要求。为期货公司、金融机构、交易团队提供高性能，极速处理的交易柜台产品。",
//     sideTab: [{
//       label: "高频交易柜台",
//       value: "highFrequency "
//     }],
//     sideContent: {
//       highFrequency: {
//         title: "高频交易柜台",
//         desc: "高频交易中，谁先看到，谁先交易谁就能获利。往往纳秒级别的差距，代表了数亿元的收益差别。NANO平台提供完整，可靠，高效的高频交易柜台系统，协助用户极速完成极速获取，批量下单、改单、撤销等交易环节，保证客户在激烈的交易环境中保持良好的竞争优势。",
//         otherDesc: [{
//           subTitle: "高频",
//           subContent: [{
//             subDesc: ["交易数据传输、接收、处理","交易的风险控制和合规检测","硬件数据库的报单管理","最终超低延迟的交易执行"]
//           }]
//         }, {
//           subTitle: "特点优势",
//           subContent: [{
//             subDesc: ["以符合监管要求为核心准则，完全符合交易所和期货公司的风控要求","随监管要求及规则变化及时更新柜台技术。","以FPGA技术为核心，提供完整保单管理流程及行情处理方案。","支持所有的期货期权品种以及绝大部分常用业务。","以纳秒级的处理为方向，仅面向深度合作用户。"]
//           }]
//         }]
//       }
//     }
//   },
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
// }

const FinacePage = () => {
  const [active, setActive] = useState("dealDesks");
  const {tabData,detailsData} = productDetailsData
  return (
    <Layout>
      
        
      <Tab 
        dataSource = {tabData} 
        active={active} 
        onChange={(active)=>{setActive(active)}}
      />
      <div style={{height:"1px",background:"#D3DCE5",marginTop:"-1px"}}></div>
      <ProductDetail
        detailData={detailsData[active]}
      />
    </Layout>
  )
}

export default FinacePage