import * as React from 'react';
import Layout from '../../components/layout';
import {
  
} from '../../styles/solution-detail.module.css';
import SolutionDetailBanner from '../../components/solution-detail-banner'
import { solutionData } from '../../constant'


const SecuritiePage = () => {
  return (
    <Layout>
     <SolutionDetailBanner bannerData={solutionData.filter(item=>item.type==="securitie")[0]||{}}/>
     
    </Layout>
  )
}

export default SecuritiePage