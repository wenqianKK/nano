import financeImg from "../images/finance.png";
import fpgaImg from "../images/fpga.png";
import securitieImg from "../images/securitie.png";
import securitieAbility0 from "../images/securitieAbility0.png";
import securitieAbility1 from "../images/securitieAbility1.png";
import securitieAbility2 from "../images/securitieAbility2.png";
import financeAbility0 from "../images/financeAbility0.png";
import financeAbility1 from "../images/financeAbility1.png";
import financeAbility2 from "../images/financeAbility2.png";
import fpgaAbility0 from "../images/fpgaAbility0.png";
import fpgaAbility1 from "../images/fpgaAbility1.png";

export const solutionData = [{
    imgUrl: securitieImg,
    name: "期货/证券公司",
    desc: ["全链路加速", "快速稳定", "极速响应活动"],
    moreUrl: "/solution/securitie",
    type: "securitie",
    bannerDesc: "期货公司、证券公司存在多元化交易需求。尤其面向高频交易客户需要更稳定、更快速的产品支撑客户实现交易。",
    bannerAbility: [
      {
        iconUrl: securitieAbility0,
        content:"纳秒级响应"
      },{
        iconUrl: securitieAbility1,
        content:"稳定性升级"
      },{
        iconUrl: securitieAbility2,
        content:"极速响应服务"
      }
    ]
  },
  {
    imgUrl: financeImg,
    name: "个人/金融机构",
    type: "finance",
    desc: ["交易定制方案", "竞争/收益提升", "风险全方位保护"],
    moreUrl: "/solution/finance",
    bannerDesc: "投资者是交易需求最终把控方，为及时响应私募、个人、私募机构需求，我们推出基于硬件芯片及的交易加速产品，及技术资讯服务。",
    bannerAbility: [
      {
        iconUrl: financeAbility0,
        content:"交易定制方案"
      },{
        iconUrl: financeAbility1,
        content:"竞争收益提升"
      },{
        iconUrl: financeAbility2,
        content:"风险全方位保护"
      }
    ]

  },
  {
    imgUrl: fpgaImg,
    name: "FPGA定制需求",
    type: "fpga",
    desc: ["FPGA定制开发", "专业团队服务"],
    moreUrl: "/solution/fpga",
    bannerDesc: "FPGA是一种可以重构电路的芯片，是一种硬件可重构的体系结构。它的英文全称是Field Programmable Gate Array，中文名是现场可编程门阵列。",
    bannerAbility: [
      {
        iconUrl: fpgaAbility0,
        content:"交易定制方案"
      },{
        iconUrl: fpgaAbility1,
        content:"竞争收益提升"
      }
    ]
  },
]