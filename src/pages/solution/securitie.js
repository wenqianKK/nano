import React, { useState } from 'react';
import Layout from '../../components/layout';
import {
  
} from '../../styles/solution-detail.module.css';
import SolutionDetailBanner from '../../components/solution-detail-banner';
import SolutionDetailContent from '../../components/solution-detail-content';
import Tab from '../../components/tab';
import { solutionData } from '../../constant';

const data = solutionData.filter(item=>item.type==="securitie")[0]||{}

const SecuritiePage = () => {
  const [active, setActive] = useState(0);

  return (
    <Layout>
      <SolutionDetailBanner 
        bannerData={data}
      />
      <SolutionDetailContent 
        contentData={data}
      />
      <Tab 
        dataSource = {data.financeTab} 
        active={active} 
        onChange={(active)=>{setActive(active)}}
      />
    </Layout>
  )
}

export default SecuritiePage
