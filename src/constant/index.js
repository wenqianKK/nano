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
      label: "交易柜台",
      value: "dealDesks"
    }, {
      icon: tabf1,
      activeIcon: tabfAct2,
      label: "行情加速",
      value: "marketQuicken"
    }, {
      icon: tabf1,
      activeIcon: tabfAct3,
      label: "回报加速",
      value: "returnQuicken"
    }, {
      icon: tabf1,
      activeIcon: tabfAct4,
      label: "服务器",
      value: "server"
    }, {
      icon: tabf1,
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
      icon: tabf1,
      activeIcon: tabfAct2,
      label: "行情加速",
      value: "marketQuicken"
    }, {
      icon: tabf1,
      activeIcon: tabfAct3,
      label: "回报加速",
      value: "returnQuicken"
    }, {
      icon: tabf1,
      activeIcon: tabfAct4,
      label: "服务器",
      value: "server"
    }, {
      icon: tabf1,
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

export const productDetailsData = {
  tabData: [{
    icon: tabf1,
    activeIcon: tabfAct1,
    label: "交易柜台",
    value: "dealDesks"
  }, {
    icon: tabf1,
    activeIcon: tabfAct2,
    label: "行情加速",
    value: "marketQuicken"
  }, {
    icon: tabf1,
    activeIcon: tabfAct3,
    label: "回报加速",
    value: "returnQuicken"
  }, {
    icon: tabf1,
    activeIcon: tabfAct4,
    label: "服务器",
    value: "server"
  }, {
    icon: tabf1,
    activeIcon: tabfAct5,
    label: "网络设备",
    value: "netEquip"
  }],
  detailsData: {
    dealDesks: {
      topCaseImg: tabfAct1,
      topCaseContent: "基于FPGA技术的纳秒级相应的交易系统，符合各大交易所及期货公司风控及检测要求。为期货公司、金融机构、交易团队提供高性能，极速处理的交易柜台产品。",
      sideTab: [{
        label: "高频交易柜台",
        value: "highFrequency"
      }],
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
    marketQuicken: {
      topCaseImg: tabfAct1,
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
              littleText: "网络版行情服务器 ",
              subDesc: ["网络延时大", "行情膨胀推挤递延严重，网络超载", "订阅不灵活，全局订阅，券商配置", "全局选优, 无法实现逐个合约选优", "价格相对优惠"]
            }, {
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
              littleText: "网络版行情服务器",
              subDesc: ["网络延时大", "行情膨胀推挤递延严重，网络超载", "订阅不灵活，全局订阅，券商配置", "全局选优, 无法实现逐个合约选优", "价格相对优惠"]
            }, {
              littleText: "",
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
            subTitle: "网络版行情服务器",
            subContent: [{
              littleText: "",
              subDesc: ["网络延时大", "行情膨胀推挤递延严重，网络超载", "订阅不灵活，全局订阅，券商配置", "全局选优, 无法实现逐个合约选优", "价格相对优惠"]
            }, {
              littleText: "",
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
              littleText: "网络版行情服务器",
              subDesc: ["网络延时大", "行情膨胀推挤递延严重，网络超载", "订阅不灵活，全局订阅，券商配置", "全局选优, 无法实现逐个合约选优", "价格相对优惠"]
            }, {
              littleText: "",
              subDesc: ["网络延时小，通常只经过L1", "只订阅本策略机需要的合约", "盘前和盘中随时更改订阅标的", "本地选优，A B 路可混合输出", "增量恢复全量直接送到CPU cache"]
            }]
          }]
        },
      }
    }
  }
}