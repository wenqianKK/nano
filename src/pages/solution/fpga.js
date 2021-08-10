import * as React from 'react';
import Layout from '../../components/layout';
import {
  
} from '../../styles/solution-detail.module.css';
import SolutionDetailBanner from '../../components/solution-detail-banner';
import SolutionDetailContent from '../../components/solution-detail-content'
import { solutionData } from '../../constant';

const data = solutionData.filter(item=>item.type==="fpga")[0]||{}
const FpgaPage = () => {
  return (
    <Layout>
     <SolutionDetailBanner bannerData={data}/>
     <SolutionDetailContent contentData={data}/>
     
    </Layout>
  )
}

export default FpgaPage