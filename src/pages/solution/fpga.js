import * as React from 'react';
import Layout from '../../components/layout';
import {
  
} from '../../styles/solution-detail.module.css';
import SolutionDetailBanner from '../../components/solution-detail-banner'
import { solutionData } from '../../constant'


const FpgaPage = () => {
  return (
    <Layout>
     <SolutionDetailBanner bannerData={solutionData.filter(item=>item.type==="fpga")[0]||{}}/>
     
    </Layout>
  )
}

export default FpgaPage