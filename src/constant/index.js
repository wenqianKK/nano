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
import tabf1 from "../images/tabf1.png";
import tabfAct1 from "../images/tabfAct1.png";
import tabfAct2 from "../images/tabfAct2.png";
import tabfAct3 from "../images/tabfAct3.png";
import tabfAct4 from "../images/tabfAct4.png";
import tabfAct5 from "../images/tabfAct5.png";

export const solutionData = [{
    imgUrl: securitieImg,
    name: "期货/证券公司",
    desc: ["全链路加速", "快速稳定", "极速响应活动"],
    moreUrl: "/solution/securitie",
    type: "securitie",
    bannerDesc: "期货公司、证券公司存在多元化交易需求。尤其面向高频交易客户需要更稳定、更快速的产品支撑客户实现交易。",
    bannerAbility: [{
      iconUrl: securitieAbility0,
      content: "纳秒级响应"
    }, {
      iconUrl: securitieAbility1,
      content: "稳定性升级"
    }, {
      iconUrl: securitieAbility2,
      content: "极速响应服务"
    }],
    descTitle: "产品体系", //解决方案详情里的title
    descContent: "针对如期货公司、证券公司等机构用户，我公司提供“全链路”、“稳定”硬件支撑产品，同时在合规的基础上，推出“高频交易柜台”及基于硬件芯片的帮助用户更快交易的产品。帮助经纪商提升期货和股票交易体验，获得巨大交易量。\nNANO团队专注于技术研发，为机构用户提供完整的、高效的、专业的整体解决方案。并部署了专业技术咨询及及时响应的售后服务。",
    securitieTab: [{
      icon: tabf1,
      activeIcon: tabfAct1,
      content: "交易柜台"
    }, {
      icon: tabf1,
      activeIcon: tabfAct2,
      content: "行情加速"
    }, {
      icon: tabf1,
      activeIcon: tabfAct3,
      content: "回报加速"
    }, {
      icon: tabf1,
      activeIcon: tabfAct4,
      content: "服务器"
    }, {
      icon: tabf1,
      activeIcon: tabfAct5,
      content: "网络设备"
    }]
  },
  {
    imgUrl: financeImg,
    name: "个人/金融机构",
    type: "finance",
    desc: ["交易定制方案", "竞争/收益提升", "风险全方位保护"],
    moreUrl: "/solution/finance",
    bannerDesc: "投资者是交易需求最终把控方，为及时响应私募、个人、私募机构需求，我们推出基于硬件芯片及的交易加速产品，及技术资讯服务。",
    bannerAbility: [{
      iconUrl: financeAbility0,
      content: "交易定制方案"
    }, {
      iconUrl: financeAbility1,
      content: "竞争收益提升"
    }, {
      iconUrl: financeAbility2,
      content: "风险全方位保护"
    }],
    descTitle: "产品体系", //解决方案详情里的title
    descContent: "针对终端交易用户，NANO提供专业技术咨询服务协助用户完善交易系统。同时提供网络版和本地版的硬件加速产品，帮助用户提高成交率，获得更好的活力与竞争环境.",
    financeTab: [{
      icon: tabf1,
      activeIcon: tabfAct1,
      content: "交易柜台"
    }, {
      icon: tabf1,
      activeIcon: tabfAct2,
      content: "行情加速"
    }, {
      icon: tabf1,
      activeIcon: tabfAct3,
      content: "回报加速"
    }, {
      icon: tabf1,
      activeIcon: tabfAct4,
      content: "服务器"
    }, {
      icon: tabf1,
      activeIcon: tabfAct5,
      content: "网络设备"
    }]
  },
  {
    imgUrl: fpgaImg,
    name: "FPGA定制需求",
    type: "fpga",
    desc: ["FPGA定制开发", "专业团队服务"],
    moreUrl: "/solution/fpga",
    bannerDesc: "FPGA是一种可以重构电路的芯片，是一种硬件可重构的体系结构。它的英文全称是Field Programmable Gate Array，中文名是现场可编程门阵列。",
    bannerAbility: [{
      iconUrl: fpgaAbility0,
      content: "交易定制方案"
    }, {
      iconUrl: fpgaAbility1,
      content: "竞争收益提升"
    }],
    descTitle: "定制产品", //解决方案详情里的title
    descContent: "NANO团队专注于技术研发工作，同时联合多所高校研发FPGA定制产品。目前已经在多个领域协助客户解决问题：\n通信领域。通信领域需要高速的通信协议处理方式，另一方面通信协议随时都在修改，不适合做成专门的芯片，所以能够灵活改变的功能的FPGA就成了首选 \n算法领域。FPGA对于复杂信号的处理性很强，可以处理多维信号。\n嵌入式领域。利用FPGA构建一个嵌入式的底层环境，然后在此之上编写一些嵌入式软件，事务性的操作更加繁杂一些，对FPGA的操作较少。"
  },
]

export const productData = {
  fpga: {
    title: "FPGA产品",
    subtitle: "产品方案",
    data: [{
      name: "行情加速产品",
      desc: ["上期所", "郑商所", "大商所", "中信金所"],
      moreUrl: "",
      imgUrl: tabfAct2
    }, {
      name: "高频交易柜台",
      desc: ["FPGA技术", "低延时", "高并发", "符合监管"],
      moreUrl: "",
      imgUrl: tabfAct1
    }, {
      name: "回报加速产品",
      desc: ["上期所", "郑商所", "大商所", "中信金所"],
      moreUrl: "",
      imgUrl: tabfAct3
    }]
  },
  allLink: {
    title: "全链路硬件产品",
    subtitle: "产品方案",
    data: [{
      name: "服务器",
      desc: ["上期所", "郑商所", "大商所", "中信金所"],
      moreUrl: "",
      imgUrl: tabfAct2
    }, {
      name: "网络设备",
      desc: ["ACETRADE高频交易服务器", "HP服务器", "HUAWEI服务器", "H3C服务器"],
      moreUrl: "",
      imgUrl: tabfAct1
     
    }]
  }
}