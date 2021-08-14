import React, { useState } from 'react';
import Layout from '../../components/layout';
import {
} from '../../styles/solution-detail.module.css';
import Tab from '../../components/tab';
import ProductDetail from '../../components/product-detail'
import { productDetailsData } from '../../constant';

const getUrlParam = (location,name)=>{
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  //匹配目标参数
  var r = location.search.substr(1).match(reg);
  //返回参数
  if (r != null) {
      return unescape(r[2]);
  } else {
      return "";
  }
}

const FinacePage = (props) => {
  console.log("props",props)
  const tab = getUrlParam(props.location,"tab")
  const [active, setActive] = useState(tab ? tab :"dealDesks");
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
