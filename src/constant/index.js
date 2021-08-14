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
import tabf2 from "../images/tabf2.png";
import tabf3 from "../images/tabf3.png";
import tabf4 from "../images/tabf4.png";
import tabf5 from "../images/tabf5.png";
import tabfAct1 from "../images/tabfAct1.png";
import tabfAct2 from "../images/tabfAct2.png";
import tabfAct3 from "../images/tabfAct3.png";
import tabfAct4 from "../images/tabfAct4.png";
import tabfAct5 from "../images/tabfAct5.png";
import sikeNexus7000 from "../images/sikeNexus7000.png";
import solarflareX252225GPlus from "../images/solarflareX252225GPlus.png";
import exablazeExaNICX10 from "../images/exablazeExaNICX10.png";
import cisco from "../images/cisco.png";
import finisar from "../images/finisar.png";
import H3CLS1048 from "../images/H3CLS1048.png";
import homeBanner0 from "../images/homeBanner0.png";
import homeBanner00 from "../images/homeBanner00.png";
import homeBanner1 from "../images/homeBanner1.png";
import homeBanner01 from "../images/homeBanner01.png";
import homeBanner2 from "../images/homeBanner2.png";
import homeBanner02 from "../images/homeBanner02.png";
import parter0 from "../images/parter0.png";
import parter1 from "../images/parter1.png";
import parter2 from "../images/parter2.png";
import parter3 from "../images/parter3.png";
import parter4 from "../images/parter4.png";
import parter5 from "../images/parter5.png";
import erweima from "../images/erweima.png";
import footerIcon1 from "../images/footerIcon1.png";
import footerIcon2 from "../images/footerIcon2.png";
import footerIcon3 from "../images/footerIcon3.png";
import fpgaCooper1 from "../images/fpgaCooper1.png";
import fpgaCooper2 from "../images/fpgaCooper2.png";
import fpgaCooper3 from "../images/fpgaCooper3.png";
import fpgaCooper4 from "../images/fpgaCooper4.png";
import fpgaCooper5 from "../images/fpgaCooper5.png";
import fpgaCooper6 from "../images/fpgaCooper6.png";
import ACEtrade from "../images/ACEtrade.jpg";
import HPEProLiantDL580Gen10 from "../images/HPEProLiantDL580Gen10.jpg";
import H3CUniServerR5300G3 from "../images/H3CUniServerR5300G3.jpg";
import FusionServerPro2288V5 from "../images/FusionServerPro2288V5.jpg";

export const languageTypeData = [{
  label: "中文",
  value: "cn"
}, {
  label: "英语",
  value: "en"
}, {
  label: "日语",
  value: "jp"
}]

//首页文案数据
export const homeData = {
  bannerData: {
    title: "为快而生 稳定 极速 定制",
    content: [{
      key: '0',
      imgUrl: homeBanner00,
      imgUrlHover: homeBanner0,
      subTitle: "物理层急速支撑",
      subDesc: [{
        text: "提供极速稳定的硬件产品 ",
        goUrl: "/product/details?tab=netEquip"
      }, {
        text: "服务器 交换机 网卡",
        goUrl: "/product/details?tab=netEquip"
      }],
      more: "了解更多 >",
      moreUrl: "/product/details?tab=netEquip",
      className: "bannerImgItem0"
    }, {
      key: '1',
      imgUrl: homeBanner01,
      imgUrlHover: homeBanner1,
      subTitle: "急速处理引擎",
      subDesc: [{
        text: "FRGA定制化开发 极速柜台",
        goUrl: "/product/details?tab=dealDesks"
      }, {
        text: "极速行情",
        goUrl: "/product/details?tab=marketQuicken"
      }],
      more: "了解更多 >",
      moreUrl: "/product/details",
      className: "bannerImgItem1"
    }, {
      key: '2',
      imgUrl: homeBanner02,
      imgUrlHover: homeBanner2,
      subTitle: "极速响应全链路运维",
      subDesc: [{
        text: "极速运维服务 硬件服务 软件服务",
        goUrl: "/product/details"
      }, {
        text: "现场服务 远程服务",
        goUrl: "/product/details"
      }],
      more: "了解更多 >",
      moreUrl: "/product/details",
      className: "bannerImgItem2"

    }]
  },
  aboutTitle: "关于NANO",
  aboutDesc: "自成立之初一直专注于异构计算平台的研发，设计打造高效异构加速平台，推动软硬件协同发展。主营业务为网络数据处理加速卡、光网络传输系列平台等产品的研发、生产、和销售，及为用户提供相关专业全系列技术服务。在期货金融领域有较为广泛的应用",
  industryTitle1: "国内FPGA技术顶尖团队\n金融硬件产品国产化先驱者",
  industryTitle2: "金融交易解决方案服务商\n全链路信息处理专家",
  cooperationTitle: "合作伙伴",
  cooperationDesc: "20+的全球合作伙伴 NANO给予您最好的服务",
  cooperationData: [parter0, parter1, parter2, parter3, parter4, parter5]
}

//footer文案数据
export const footerData = {
  contentData: [{
    title: "解决方案",
    text: "期货/证券公司\n个人/金融机构\nFPGA定制服务"
  }, {
    title: "产品方案",
    text: "行情加速\n高频交易柜台\n回报加速\n服务器\n网络设备"
  }],
  erweimaImg: erweima,
  footerIcon: [footerIcon1, footerIcon2, footerIcon3],
  footerText: "Copyright © 2019 NANOEXPRESS 版权所有 |  粤ICP备17016401号 | "
}
//解决方案文案数据，解决方案详情文案数据，
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
      label: "交易柜台",
      value: "dealDesks"
    }, {
      icon: tabf2,
      activeIcon: tabfAct2,
      label: "行情加速",
      value: "marketQuicken"
    }, {
      icon: tabf3,
      activeIcon: tabfAct3,
      label: "回报加速",
      value: "returnQuicken"
    }, {
      icon: tabf4,
      activeIcon: tabfAct4,
      label: "服务器",
      value: "server"
    }, {
      icon: tabf5,
      activeIcon: tabfAct5,
      label: "网络设备",
      value: "netEquip"
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
      label: "交易柜台",
      value: "dealDesks"
    }, {
      icon: tabf2,
      activeIcon: tabfAct2,
      label: "行情加速",
      value: "marketQuicken"
    }, {
      icon: tabf3,
      activeIcon: tabfAct3,
      label: "回报加速",
      value: "returnQuicken"
    }, {
      icon: tabf4,
      activeIcon: tabfAct4,
      label: "服务器",
      value: "server"
    }, {
      icon: tabf5,
      activeIcon: tabfAct5,
      label: "网络设备",
      value: "netEquip"
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
    descContent: "NANO团队专注于技术研发工作，同时联合多所高校研发FPGA定制产品。目前已经在多个领域协助客户解决问题：\n通信领域。通信领域需要高速的通信协议处理方式，另一方面通信协议随时都在修改，不适合做成专门的芯片，所以能够灵活改变的功能的FPGA就成了首选 \n算法领域。FPGA对于复杂信号的处理性很强，可以处理多维信号。\n嵌入式领域。利用FPGA构建一个嵌入式的底层环境，然后在此之上编写一些嵌入式软件，事务性的操作更加繁杂一些，对FPGA的操作较少。",
    partTitle:"合作单位",
    partContent:"国内顶级FPGA专家团队服务\n如果您有相关需求，请与我们联系。",
    cooperData:[fpgaCooper1,fpgaCooper2,fpgaCooper3,fpgaCooper4,fpgaCooper5,fpgaCooper6]
  },
]

//产品方案文案数据
export const productData = {
  fpga: {
    title: "FPGA产品",
    subtitle: "产品方案",
    data: [{
      name: "行情加速产品",
      desc: ["上期所", "郑商所", "大商所", "中信金所"],
      moreUrl: "/product/details",
      imgUrl: tabfAct2
    }, {
      name: "高频交易柜台",
      desc: ["FPGA技术", "低延时", "高并发", "符合监管"],
      moreUrl: "/product/details",
      imgUrl: tabfAct1
    }, {
      name: "回报加速产品",
      desc: ["上期所", "郑商所", "大商所", "中信金所"],
      moreUrl: "/product/details",
      imgUrl: tabfAct3
    }]
  },
  allLink: {
    title: "全链路硬件产品",
    subtitle: "产品方案",
    data: [{
      name: "服务器",
      desc: ["上期所", "郑商所", "大商所", "中信金所"],
      moreUrl: "/product/details",
      imgUrl: tabfAct2
    }, {
      name: "网络设备",
      desc: ["ACETRADE高频交易服务器", "HP服务器", "HUAWEI服务器", "H3C服务器"],
      moreUrl: "/product/details",
      imgUrl: tabfAct1

    }]
  }
}
//产品方案详情文案数据
export const productDetailsData = {
  tabData: [{
    icon: tabf1,
    activeIcon: tabfAct1,
    label: "交易柜台",
    value: "dealDesks"
  }, {
    icon: tabf2,
    activeIcon: tabfAct2,
    label: "行情加速",
    value: "marketQuicken"
  }, {
    icon: tabf3,
    activeIcon: tabfAct3,
    label: "回报加速",
    value: "returnQuicken"
  }, {
    icon: tabf4,
    activeIcon: tabfAct4,
    label: "服务器",
    value: "server"
  }, {
    icon: tabf5,
    activeIcon: tabfAct5,
    label: "网络设备",
    value: "netEquip"
  }],
  detailsData: {
    //交易柜台文案
    dealDesks: {
      topCaseImg: tabfAct1,
      topCaseContent: "基于FPGA技术的纳秒级相应的交易系统，符合各大交易所及期货公司风控及检测要求。为期货公司、金融机构、交易团队提供高性能，极速处理的交易柜台产品。",
      //左侧tab文案
      sideTab: [{
        label: "高频交易柜台",
        value: "highFrequency"
      }],
      //右侧tabContent文案
      sideContent: {
        highFrequency: {
          title: "高频交易柜台",
          desc: "高频交易中，谁先看到，谁先交易谁就能获利。往往纳秒级别的差距，代表了数亿元的收益差别。NANO平台提供完整，可靠，高效的高频交易柜台系统，协助用户极速完成极速获取，批量下单、改单、撤销等交易环节，保证客户在激烈的交易环境中保持良好的竞争优势。",
          otherDesc: [{
            subTitle: "高频",
            subContent: [{
              subDesc: ["交易数据传输、接收、处理", "交易的风险控制和合规检测", "硬件数据库的报单管理", "最终超低延迟的交易执行"]
            }]
          }, {
            subTitle: "特点优势",
            subContent: [{
              subDesc: ["以符合监管要求为核心准则，完全符合交易所和期货公司的风控要求", "随监管要求及规则变化及时更新柜台技术。", "以FPGA技术为核心，提供完整保单管理流程及行情处理方案。", "支持所有的期货期权品种以及绝大部分常用业务。", "以纳秒级的处理为方向，仅面向深度合作用户。"]
            }]
          }]
        }
      }
    },
    //行情加速文案
    marketQuicken: {
      topCaseImg: tabfAct2,
      topCaseContent: "nano行情是基于FPGA的纳秒级行情加速系统，提供快速，精准的行情通道。为期货、证券、投资机构及专业人士的量化高频交易提供专属定制化的技术支撑产品。",
      sideTab: [{
        label: "上期所急速行情",
        value: "shfe"
      }, {
        label: "大商所极速行情",
        value: "dce"
      }, {
        label: "中金所极速行情",
        value: "cicc"
      }, {
        label: "郑商所极速行情",
        value: "zce"
      }],
      sideContent: {
        zce: {
          title: "郑商所极速行情",
          desc: "NANO行情系统以FPGA硬件技术处理，来处理交易所行情。以快速稳定的效果为用户提供了纳秒级的低延时交易体验。同时保证高并发及优选的性能，为专业量化投资者提供了高成单率及良好竞争体现。",
          otherDesc: [{
            subTitle: "特点优势",
            subContent: [{
              littleText: "",
              subDesc: ["基于FPGA技术设计，软硬件双层优化互备，极速体验；", "支持交易所全档行情；", "150纳秒穿透延迟，性能0抖动，100万秒消息吞吐量；", "多路优选机制，多通道并行组播发送；"]
            }]
          }, {
            subTitle: "两种实际部署",
            subContent: [{
              littleText: "网络版行情",
              subDesc: ["网络延时大", "行情膨胀推挤递延严重，网络超载", "订阅不灵活，全局订阅，券商配置", "全局选优, 无法实现逐个合约选优", "价格相对优惠"]
            }, {
              littleText: "本地版行情",
              subDesc: ["网络延时小，通常只经过L1", "只订阅本策略机需要的合约", "盘前和盘中随时更改订阅标的", "本地选优，A B 路可混合输出", "增量恢复全量直接送到CPU cache"]
            }]
          }]
        },
        dce: {
          title: "大商所极速行情",
          desc: "硬件技术处理，来处理交易所行情。以快速稳定的效果为用户提供了纳秒级的低延时交易体验。同时保证高并发及优选的性能，为专业量化投资者提供了高成单率及良好竞争体现。",
          otherDesc: [{
            subTitle: "特点优势",
            subContent: [{
              littleText: "",
              subDesc: ["基于FPGA技术设计，软硬件双层优化互备，极速体验；", "支持交易所全档行情；", "150纳秒穿透延迟，性能0抖动，100万秒消息吞吐量；", "多路优选机制，多通道并行组播发送；", "随交易所进行优化升级"]
            }]
          }, {
            subTitle: "两种实际部署",
            subContent: [{
              littleText: "网络版行情",
              subDesc: ["网络延时大", "行情膨胀推挤递延严重，网络超载", "订阅不灵活，全局订阅，券商配置", "全局选优, 无法实现逐个合约选优", "价格相对优惠"]
            }, {
              littleText: "本地版行情",
              subDesc: ["网络延时小，通常只经过L1", "只订阅本策略机需要的合约", "盘前和盘中随时更改订阅标的", "本地选优，A B 路可混合输出", "增量恢复全量直接送到CPU cache"]
            }]
          }]
        },
        shfe: {
          title: "上期所极速行情",
          desc: "硬件技术处理，来处理交易所行情。以快速稳定的效果为用户提供了纳秒级的低延时交易体验。同时保证高并发及优选的性能，为专业量化投资者提供了高成单率及良好竞争体现。",
          otherDesc: [{
            subTitle: "特点优势",
            subContent: [{
              littleText: "",
              subDesc: ["基于FPGA技术设计，软硬件双层优化互备，极速体验；", "支持交易所全档行情；", "150纳秒穿透延迟，性能0抖动，100万秒消息吞吐量；", "多路优选机制，多通道并行组播发送；", "随交易所进行优化升级"]
            }]
          }, {
            subTitle: "两种实际部署",
            subContent: [{
              littleText: "网络版行情",
              subDesc: ["网络延时大", "行情膨胀推挤递延严重，网络超载", "订阅不灵活，全局订阅，券商配置", "全局选优, 无法实现逐个合约选优", "价格相对优惠"]
            }, {
              littleText: "本地版行情",
              subDesc: ["网络延时小，通常只经过L1", "只订阅本策略机需要的合约", "盘前和盘中随时更改订阅标的", "本地选优，A B 路可混合输出", "增量恢复全量直接送到CPU cache"]
            }]
          }]
        },
        cicc: {
          title: "中金所极速行情",
          desc: "硬件技术处理，来处理交易所行情。以快速稳定的效果为用户提供了纳秒级的低延时交易体验。同时保证高并发及优选的性能，为专业量化投资者提供了高成单率及良好竞争体现。",
          otherDesc: [{
            subTitle: "特点优势",
            subContent: [{
              littleText: "",
              subDesc: ["基于FPGA技术设计，软硬件双层优化互备，极速体验；", "支持交易所全档行情；", "150纳秒穿透延迟，性能0抖动，100万秒消息吞吐量；", "多路优选机制，多通道并行组播发送；", "随交易所进行优化升级"]
            }]
          }, {
            subTitle: "两种实际部署",
            subContent: [{
              littleText: "网络版行情",
              subDesc: ["网络延时大", "行情膨胀推挤递延严重，网络超载", "订阅不灵活，全局订阅，券商配置", "全局选优, 无法实现逐个合约选优", "价格相对优惠"]
            }, {
              littleText: "本地版行情",
              subDesc: ["网络延时小，通常只经过L1", "只订阅本策略机需要的合约", "盘前和盘中随时更改订阅标的", "本地选优，A B 路可混合输出", "增量恢复全量直接送到CPU cache"]
            }]
          }]
        },
      }
    },
    //回报加速文案
    returnQuicken: {
      topCaseImg: tabfAct3,
      topCaseContent: "nano回报加速是基于FPGA技术提供的纳秒级回报数据加速获取系统，协助期货、证券、投资机构及专业人士快速获取回报行情，提升交易效率。",
      sideTab: [{
        label: "上期所急速行情",
        value: "shfe"
      }, {
        label: "大商所极速行情",
        value: "dce"
      }, {
        label: "中金所极速行情",
        value: "cicc"
      }, {
        label: "郑商所极速行情",
        value: "zce"
      }],
      sideContent: {
        zce: {
          title: "郑商所极速行情",
          desc: "NANO行情系统以FPGA硬件技术处理，来处理交易所行情。以快速稳定的效果为用户提供了纳秒级的低延时交易体验。同时保证高并发及优选的性能，为专业量化投资者提供了高成单率及良好竞争体现。",
          otherDesc: [{
            subTitle: "特点优势",
            subContent: [{
              littleText: "",
              subDesc: ["基于FPGA技术设计，软硬件双层优化互备，极速体验；", "支持交易所全档行情；", "150纳秒穿透延迟，性能0抖动，100万秒消息吞吐量；", "多路优选机制，多通道并行组播发送；"]
            }]
          }]
        },
        dce: {
          title: "大商所极速行情",
          desc: "NANO行情系统以FPGA硬件技术处理，来处理交易所行情。以快速稳定的效果为用户提供了纳秒级的低延时交易体验。同时保证高并发及优选的性能，为专业量化投资者提供了高成单率及良好竞争体现。",
          otherDesc: [{
            subTitle: "特点优势",
            subContent: [{
              littleText: "",
              subDesc: ["基于FPGA技术设计，软硬件双层优化互备，极速体验；", "支持交易所全档行情；", "150纳秒穿透延迟，性能0抖动，100万秒消息吞吐量；", "多路优选机制，多通道并行组播发送；", "随交易所进行优化升级"]
            }]
          }]
        },
        shfe: {
          title: "上期所极速行情",
          desc: "NANO行情系统以FPGA硬件技术处理，来处理交易所行情。以快速稳定的效果为用户提供了纳秒级的低延时交易体验。同时保证高并发及优选的性能，为专业量化投资者提供了高成单率及良好竞争体现。",
          otherDesc: [{
            subTitle: "特点优势",
            subContent: [{
              littleText: "",
              subDesc: ["基于FPGA技术设计，软硬件双层优化互备，极速体验；", "支持交易所全档行情；", "150纳秒穿透延迟，性能0抖动，100万秒消息吞吐量；", "多路优选机制，多通道并行组播发送；", "随交易所进行优化升级"]
            }]
          }]
        },
        cicc: {
          title: "中金所极速行情",
          desc: "NANO行情系统以FPGA硬件技术处理，来处理交易所行情。以快速稳定的效果为用户提供了纳秒级的低延时交易体验。同时保证高并发及优选的性能，为专业量化投资者提供了高成单率及良好竞争体现。",
          otherDesc: [{
            subTitle: "特点优势",
            subContent: [{
              littleText: "",
              subDesc: ["基于FPGA技术设计，软硬件双层优化互备，极速体验；", "支持交易所全档行情；", "150纳秒穿透延迟，性能0抖动，100万秒消息吞吐量；", "多路优选机制，多通道并行组播发送；", "随交易所进行优化升级"]
            }]
          }]
        },
      }
    },
    //网络设备文案
    netEquip: {
      topCaseImg: tabfAct5,
      topCaseContent: "nano回报加速是基于FPGA技术提供的纳秒级回报数据加速获取系统，协助期货、证券、投资机构及专业人士快速获取回报行情，提升交易效率。",
      sideTab: [{
        label: "H3C\nLS-1048\n低延时交换机",
        value: "h3c"
      }, {
        label: "思科 \nNexus 7000\n系列交换机",
        value: "sike"
      }, {
        label: "exablaze\nExaNIC X10\n双口万兆低延迟网卡",
        value: "exablaze"
      }, {
        label: "solarflare\nX2522-25G-Plus\n 双口万兆低延迟网卡",
        value: "solarflare"
      }, {
        label: "Finisar/cisio \n原装万兆光模块",
        value: "finisar"
      }],
      sideContent: {
        h3c: {
          title: "H3C LS-1048 低延时交换机",
          imgUrl: H3CLS1048,
          otherDesc: [{
            subTitle: "特点优势",
            subContent: [{
              littleText: "",
              subDesc: ["符合IEEE802.3、IEEE802.3u和IEEE802.3x标准", "提供48个10/100M自适应以太网端口；", "每个端口都支持Auto-MDI/MDIX功能；", "每个端口都提供Speed和Link/Act指示灯，显示端口的工作状态。"]
            }]
          }, {
            subTitle: "特点优势",
            subContent: [{
              littleText: "",
              subDesc: "属性  S1048\n外形尺寸（宽×深×高）440mm×230mm×44mm\n固定端口  48个10/100Mbps自适应以太网端口\n网线类型  10/100Base-TX：3/4/5类双绞线，支持最大传输距离100m\nMAC  8K\n缓存  2Mbits\n包转发率  7.14Mpps\n交换容量  9.6Gbps\n输入电压  100-240V AC\n功耗  最大24W\n工作环境温度  0℃～40℃ \n工作环境湿度  10%～85%\n存储温度  -10℃～70℃\n存储湿度  10%～90%\n散热方式  自然散热"
            }]
          }]
        },
        sike: {
          title: "思科 Nexus 7000系列交换机",
          imgUrl: sikeNexus7000,
          otherDesc: [{
            subTitle: "高性能",
            subContent: [{
              littleText: "",
              subDesc: "思科 Nexus 7000 系列交换机在 Cisco NX-OS Software 上运行。该软件专为任务关键型企业和服务提供商部署而开发。这些交换机在具有高恢复能力的模块化平台中提供全面的功能集。"
            }]
          }, {
            subTitle: "基础设施可扩展性",
            subContent: [{
              littleText: "",
              subDesc: "通过虚拟化、节能和高效冷却、自动化云扩展、高密度和高性能，为实现高效的数据中心增长提供支持。"
            }]
          }, {
            subTitle: "连续运行能力",
            subContent: [{
              littleText: "",
              subDesc: "在设计上将硬件、NX-OS 软件功能和管理功能集成在一起，为建立零停机时间环境提供支持。"
            }]
          }, {
            subTitle: "传输灵活性",
            subContent: [{
              littleText: "",
              subDesc: "组织可以用具有成本效益的方式循序渐进地采用网络技术，包括思科远程集成式服务引擎 (RISE)、思科动态交换矩阵自动化 (DFA) 和 思科重叠传输虚拟化 (OTV)。 "
            }]
          }, {
            subTitle: "利用开放 NX-OS 的可编程性",
            subContent: [{
              littleText: "",
              subDesc: "7000 系列针对零日和 N 日配置与管理提供可编程自动化工具。标准开放式可编程 API 接口可用于调配控制平面和数据平面。有关资源，请访问 DevNet 社区。 "
            }]
          }]
        },
        exablaze: {
          title: "exablaze ExaNIC X10 \n双口万兆低延迟网卡",
          imgUrl: exablazeExaNICX10,
          otherDesc: [{
            subTitle: "参数",
            subContent: [{
              littleText: "",
              subDesc: "适用网络类型:快速以太网\n传输速率:10000Mbps\n端口类型:其他\n型号:ExaNic X10"
            }]
          }, {
            subTitle: "产品简介",
            subContent: [{
              littleText: "",
              subDesc: "Exablaze的ExaNIC X10是一种超低延迟网络接口卡，可提供业界最低的延迟：对于小型以太网帧（使用本机API），780ns的应用程序到应用程序；对于小型TCP和UDP有效负载（使用透明套接字加速库），低于微秒。ExaNIC X10还具有内置桥接功能，可作为小型交换机使用，避免了某些常见使用情况下交换机的额外延迟。此外，基于硬件的每个数据包的时间戳分辨率为6纳秒，用户可以重新考虑其测量和延迟管理方法。\n该卡具有SMA连接器，可接受PPS输入或驱动PPS输出，以进一步提高整个系统时间戳的准确性。第二个端口可配置为镜像进入端口1的所有流量的副本，和/或所有离开端口1的流量（以及作为正常端口本身运行的流量）。此外，桥接模式允许数据包通过FPGA在两个端口之间快速传递（即，不涉及主机）"
            }]
          }]
        },
        solarflare: {
          title: "solarflare X2522-25G-Plus\n双口万兆低延迟网卡",
          imgUrl: solarflareX252225GPlus,
          otherDesc: [{
            subTitle: "产品简介",
            subContent: [{
              littleText: "",
              subDesc: "PCIe3.0（8GT/s）：两倍的主机带宽，降低PCIe传送延迟\n双端口/四端口10G型号：更灵活的端口配置\n40G型号：更高的数据速率，减少中转延迟\n低时延比现有型号低20％：Solarflare的适配器提供市场领先的延迟，兼容全部TCP，UDP和POSIX。Flareon超级适配器配备高速时钟以实现最低的延迟。\n包复制加速：将报文送到服务器中多个用户的数据流。\n可编程I/O（PIO）模式：以比DMA模式更低的延迟传送小数据包到应用程序。\nH/W开关：灵活，加速数据路径以提高性能。\nH/W TSO：发送大量数据时提高了带宽和CPU效率。\nH/W时间戳：精密时间戳被插入到每个数据包，从而可监控，分析，解决问题，合规所有到服务器的网络流量。\nPTP时间同步：在网络中所有服务器上实现+/-200ns的高精度时间同步，监测，分析，解决问题，合规到服务器的所有网络流量是至关重要的。 Flareon超级适配器包括精密温补晶。\n振振荡器（Stratum 3标准）具有更高的更高的时钟稳定性。"
            }]
          }]
        },
        finisar: {
          title: "Finisar/cisio 原装万兆光模块",
          otherDesc: [{
            imgUrl: finisar,
            subTitle: "Finisar FTLX8574D3BCL ",
            subContent: [{
              littleText: "",
              subDesc: "万兆多模光模块  10G 850nm\n传输距离 400米"
            }]
          }, {
            imgUrl: cisco,
            subTitle: "CISCO SFP-10G-LR",
            subContent: [{
              littleText: "",
              subDesc: "万兆多模光模块  10G 850nm \n传输距离 400米"
            }]
          }]
        },
      }
    },
    server:{
      //左侧tab文案
      topCaseImg: tabfAct5,
      topCaseContent: "nano回报加速是基于FPGA技术提供的纳秒级回报数据加速获取系统，协助期货、证券、投资机构及专业人士快速获取回报行情，提升交易效率。",
      sideTab:[{
        label: "ACEtrade\n高频交易服务器",
        value: "aceTrade"
      }, {
        label: "HPE ProLiant \nDL580 Gen10服务器",
        value: "hpeGen"
      }, {
        label: "H3C UniServer \nR5300 G3服务器",
        value: "h3cG3"
      },{
        label: "FusionServer Pro \n2288 V5机架服务器",
        value: "fusionV5"
      }],
      //右侧tabContent文案
      sideContent:{
        aceTrade:{
          title:"ACEtrade高频交易服务器",
          desc:"为高频交易打造的一款专业的高频服务器。\n采用全新升级的散热系统，搭载优化后设计的机箱风道，使温度较高的机房也可以有效降低系统整体温度，增加系统散热冗余，增强系统稳定性。\n同时更加严苛的CPU挑选过程，更严格的整机测试机制，增加整体设备的系统性能和稳定性。\n优化后的BIOS和LINUX OS，带来更高的性能和耕地的整体延时抖动。",
          imgUrl: ACEtrade,
          otherDesc: [{
            subTitle: "规格",
            subContent: [{
              littleText: "Finisar FTLX8574D3BCL",
              subDesc: "处理器：Intel Core i9-10900fk，5.2G，10 Cores，20 M L3 Cache\n芯片组：Z490\n内存：Up to 128GB，Dual channel，3200Mhz\n存储：4 X SATA 2.5 HDD Support RAID 0/5/10\n网络：1 X IPM，2 X 1GB，2 X 10GB\n扩展系统：1 X PCIe Full height，1 X PCIe Half height\n电源系统：550W\n远程管理：IPMI 2.0 |电源管理|远程桌面|虚拟磁盘|健康管理"
            },{
              littleText: "ATX-218",
              subDesc: "处理器：Intel Core i9-10980XE，5.0G，18 Cores，24.75 M L3 Cache\n芯片组：X299\n内存：Up to 256GB，Four channel，3200Mhz\n存储：4 X SATA 2.5 HDD Support RAID 0/5/10\n网络：1 X IPMI，1 X 1GB\n扩展系统：1 X PCIe Full height，3 X PCIe Half height\n电源系统：1300W\n远程管理：IPMI 2.0 |电源管理|远程桌面|虚拟磁盘|健康管理"
            },{
              littleText: "ATX-228",
              subDesc: "处理器：Intel Xeon W-3175X，4.5G，28 Cores，38.5 M L3 Cache\n芯片组：C621\n内存：Up to 192GB，Six channel，3200Mhz\n存储：4 X SATA 2.5 HDD Support RAID 0/5/10\n网络：1 X IPMI，2 X 1GB\n扩展系统：6 X PCIe Half height\n电源系统：1300W\n远程管理：IPMI 2.0 |电源管理|远程桌面|虚拟磁盘|健康管理"
            }]
          }]

        },
        hpeGen:{
          title:"HPE ProLiant DL580 Gen10服务器",
          imgUrl: HPEProLiantDL580Gen10,
          otherDesc: [{
            subTitle: "介绍",
            subContent: [{
              littleText: "可扩展的4U服务器的可扩展性能",
              subDesc: ["完全重新设计的HPE ProLiant DL580 Gen10服务器具有可扩展的4U外形，提供4P 计算，支持多达四个Intel®Xeon®铂金级和黄金级处理器。与上一代产品相比，该处理器的性能提高达28%1，内核增加达17%3。","多达48个DIMM插槽支持最多6TB的2666MT/s HPE DDR4 SmartMemory。HPE DDR4 SmartMemory在提高工作负载性能和电源效率的同时，通过增强的错误处理能力减少了数据丢失和停机时间。","HPE FlexibleLOM适配器有众多选择,可提供各种网络速度 (1GbE~25GbE) 和结构， 使您能够适应时刻变化和增长的业务需求。","智能系统调优 (Intelligent System Tuning) 带来的惠普企业创新，通过使用自定义配置文件进行内部资源优化，提升了工作负载性能，提高了所有工作负载 (包括延迟敏感型工作负载，例如通过对抖动进行平滑而实现的高频交易) 的吞吐量。"]
            },{
              littleText: "对多个工作负载具有显著的可扩展性和可用性",
              subDesc: ["HPE ProLiant DL580 Gen10服务器有一个灵活的处理器托盘，使服务器可以根据需要从一个处理器扩展到四个，节省了前期成本；它还设计了一个灵活的驱动器托架， 支持多达48个小尺寸 (SFF) SAS/SATA驱动器和多达20个NVMe驱动器。","该服务器支持多达16个PCIe 3.0扩展插槽，包括多达4个全长/全高的图形处理单元(GPU) 以及可提供更高可扩展性的网络卡或存储控制器。","该服务器还支持多达4个能效为96%的HPE 800W或1600W灵活插槽电源，通过2+2 配置和灵活的电压范围，实现了更高的功率冗余。"]
            },{
              littleText: "安全可靠",
              subDesc: ["HPE提供具有其自己设计的BMC (HPE iLO5) 硅片的行业标准服务器。该硅片进行了物理上的改变，以保护大部分服务器基本固件，包括HPE iLO、UEFI、IE、ME和SPLD。对HPE硅片的定位创造了真正具有保护意义的硅信任根 (可信硅根)。","在服务器操作系统启动和运行环境固件验证之前，HPE iLO Advanced Premium Security Edition使数百万行的固件代码开始运行，服务器固件每24小时检查一次， 验证基本系统固件的有效性和可信度。","安全恢复 (Secure Recovery) 允许服务器固件在检测到泄漏的代码后回滚到最后一次已知的良好状态或出厂设置。","可信平台模块 (TPM/TCM) 提供额外的安全选项，以防止未经授权访问服务器；并在移除服务器上盖时触发入侵检测包 (Intrusion Detection Kit) 登录并报警，确保存储在服务器的组件的安全。"]
            },{
              littleText: "加速IT服务交付的敏捷的基础设施管理",
              subDesc: ["HPE ProLiant DL580 Gen10服务器与HPE OneView软件的结合，为跨服务器、存储和网络的自动操作简化管理提供基础设施。","服务器生命周期管理可使用一套嵌入式的、可下载的工具，包括统一可扩展固件接口 (UEFI)、智能资源调配 (Intelligent Provisioning)；用于监控和管理的HPE iLO 5； HPE iLO Amplifier Pack、Smart Update Manager (SUM) 和Service Pack for ProLiant (SPP)。"]
            }]
          }]
        },
        h3cG3:{
          title:"H3C UniServer R5300 G3服务器",
          imgUrl:H3CUniServerR5300G3,
          otherDesc: [{
            subTitle: "介绍",
            subContent: [{
              littleText: "前所未有的性能",
              subDesc: ["H3C UniServer R5300 G3支持8块双宽GPU或20块单宽GPU，提供更强的计算能力。"," H3C UniServer R5300 G3针对CPU/GPU异构计算特点，采用PCIe4.0通信链路设计，可以实现GPU之间高速低延迟的数据通信，为用户带来卓越性能体验。","为主机配置了高速低延迟的网络适配器、NVMe驱动器并对最新的APE内存进行了适配，带来强大的性能。" ]
            },{
              littleText: "灵活支持深度学习和HPC工作负载",
              subDesc: ["H3C UniServer R5300 G3服务器支持多种主流操作系统和虚拟化环境，包括 Microsoft®Windows®和 Linux操作系统，以及VMware和H3C CAS等环境，灵活适应多种业务需求。","支持现有数据中心基础设施标准，在现有基础上加速深度学习和HPC应用。"]
            },{
              littleText: "企业级可靠性、可用性、可维护性降低总体拥有成本",
              subDesc: ["采用易于访问的模块化设计，更易于使用和升级","N+N的冗余电源与N+1热插拔冗余风扇保证系统安全稳定运行。优化的散热设计，降低系统功耗，节约运行成本。","服务器集成了管理监控芯片，提供了功能强大的集中管理软件，可以方便的实现对服务器的远程管理和状态监控，减少维护人员的工作量。"]
            }]
          },{
            subTitle: "规格",
            subContent: [{
              littleText: "H3C UniServer R5300 G3",
              subDesc: ["GPU计算模块：8GPU模块；20GPU模块","机箱高度：4U","芯片组：Intel®C621","处理器：支持2颗英特尔®至强®可扩展处理器：Skylake系列或者Cascade Lake系列CPU，最大支持功率205W","GPU支持：最多支持8张双宽GPU；最多支持20张单宽GPU","内存：支持24条 DDR4 RDIMM或LRDIMM；支持速率DDR4 2400/2666/2933MT/s","存储控制器：可选配高性能RAID控制器, 支持RAID0/1/10/5/6/50/60","PCIe插槽：4张单宽PCIe卡，1张OCP3.0卡和1张板载RAID卡；4张单宽PCIe卡，1张OCP3.0卡和1张板载RAID卡","前部硬盘扩展：（系统SAS/SATA/NVMe硬盘配置） 24x 3.5 SAS/SATA/NVMe（16LFF+8NVME或20LFF+4NVM或24LFF）；12x 3.5 SAS/SATA/NVMe（8LFF+4NVME）","网络：通过OCP3.0扩展支持2×10GE光口或2×25GE光口","风扇：支持8个8056风扇，N+1热插拔冗余风扇","管理软件：HDM & FIST","Front I/O：2x USB2.0位于左挂耳，1x USB3.0 位于右挂耳","Rear I/O：2x USB3.0+1x VGA+1x serial+1xHDM管理网口位于后面板","挂耳：智能挂耳","电源：最多4个2000W白金电源，支持N+N冗余","工作温度：运行环境温度：5℃~35℃；存储环境温度：-40℃~70℃","工作湿度：工作环境相对湿度（非凝露）：8%～90%；存储环境相对湿度（非凝露）：5%～95%","外形/机箱深度：（4U标准机箱：）不含安全面板：174.8mm X 447.0mm X 807mm；含安全面板：174.8mm X 447.0mm X 829mm","重量：8GPU机型满配 （8GPU+24LFF） 65.13kg；16GPU机型满配（16GPU+24LFF） 57.16kg","保修：3年5×9，下一工作日响应"]
            }]
          }]
        },
        fusionV5:{
          title:"FusionServer Pro 2288 V5机架服务器",
          imgUrl:FusionServerPro2288V5,
          desc:"2U2路机架服务器，配置灵活，可广泛适用于云计算虚拟化、数据库、大数据等负载。2288 V5可配置2路处理器、16条DDR4内存扩展插槽与8个PCIe扩展槽及最多16*3.5”或27*2.5”的本地存储资源。",
          otherDesc: [{
            subTitle: "规格",
            subContent: [{
              littleText: "Finisar FTLX8574D3BCL",
              subDesc: ["形态：2U机架服务器","处理器：1/2个处理器，最高125W","内存：16个DDR4内存插槽，最高2933MT/s","本地存储：(支持的硬盘配置)\n可配置8个2.5英寸SAS/SATA/SSD硬盘\n可配置12/16个3.5英寸SAS/SATA硬盘\n可配置27个2.5英寸SAS/SATA/SSD硬盘\n支持的NVMeSSD卡：可配置4个NVMeSSD卡\n支持Flash存储：双M.2SSDs","RAID支持:可选配支持RAID0、1、10、1E、5、50、6、60等，支持Cache超级电容保护，提供RAID级别迁移、磁盘漫游、自诊断、Web远程设置等功能",
              "网络:\n板载网卡：2个GE接口；\n灵活插卡：可选配2*GE或4*GE或2*10GE或1/2个56GFDRIB接口","PCIe扩展：最多8个PCIe3.0扩展槽位，包括1个RAID卡专用的PCIe扩展卡和1个灵活LOM插卡","风扇：4个热拔插风扇，支持N+1冗余","电源：可配置2个冗余热插拔电源，支持1+1冗余，可选规格如下：\n550WAC白金电源\n900WAC白金/钛金电源\n1500WAC白金电源","管理：\n华为iBMC芯片集成1个专用管理GE网口，提供全面的故障诊断、自动化运维、硬件安全加固等管理特性;\niBMC支持Redﬁsh、SNMP、IPMI2.0等标准接口；提供基于HTML5/VNCKVM的远程管理界面；支持免CD部署和Agentless特性简化管理复杂度；\n可选配华为eSight管理软件，提供无状态计算、OS批量部署、固件自动升级等高级管理特性，实现全Th命周期智能化、自动化管理",
              "操作系统：支持MicrosoftWindowsSever、RedHatEnterpriseLinux、SUSELinuxEnterpriseServer、CentOS、CitrixXenServer、VmwareESXi等，详询http://support.huawei.com/onlinetoolsweb/ftca/index?serise=2Fu","安全特性：支持加电密码、管理员密码、TPM、安全面板等安全特性","工作温度：5ºC-40ºC（41°F-104°F）（符合ASHRAEA2和A3标准","产品认证：CCC","安装套件：支持L型滑道、可伸缩滑道、抱轨","尺寸(高x宽x深)：\n3.5英寸硬盘机箱尺寸：86.1mm×447mm×748mm；\n2.5英寸硬盘机箱尺寸：86.1mm×447mm×708mm"]
            }]
          }]
        }
      }
    }
  }
}