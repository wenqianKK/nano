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
import finisar from "../images/finisar.png";
import H3CLS1048 from "../images/H3CLS1048.png";


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
    },
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
          title: "sFinisar/cisio 原装万兆光模块",
          otherDesc: [{
            imgUrl: finisar,
            subTitle: "Finisar FTLX8574D3BCL ",
            subContent: [{
              littleText: "",
              subDesc: "万兆多模光模块  10G 850nm\n传输距离 400米"
            }]
          }, {
            imgUrl: sikeNexus7000,
            subTitle: "CISCO SFP-10G-LR",
            subContent: [{
              littleText: "",
              subDesc: "万兆多模光模块  10G 850nm \n传输距离 400米"
            }]
          }]
        },
      }
    }
  }
}
