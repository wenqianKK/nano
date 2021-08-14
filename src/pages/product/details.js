import React, { useState } from 'react';
import Layout from '../../components/layout';
import {
} from '../../styles/solution-detail.module.css';
import Tab from '../../components/tab';
import ProductDetail from '../../components/product-detail'
import { productDetailsData } from '../../constant';

const getUrlParam = (name)=>{
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  //匹配目标参数
  var r = window.location.search.substr(1).match(reg);
  //返回参数
  if (r != null) {
      return unescape(r[2]);
  } else {
      return "";
  }
}

const FinacePage = () => {
  console.log("tab:",getUrlParam("tab"))
  const [active, setActive] = useState(getUrlParam("tab")?getUrlParam("tab"):"dealDesks");
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