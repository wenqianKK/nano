import * as React from 'react';
import Layout from '../../components/layout';
import {
  cooperWrapper,
  cooperImg
} from '../../styles/solution-detail.module.css';
import SolutionDetailBanner from '../../components/solution-detail-banner';
import SolutionDetailContent from '../../components/solution-detail-content'
import { solutionData } from '../../constant';

const data = solutionData.filter(item=>item.type==="fpga")[0]||{}
const {partTitle,partContent,cooperData} = data

const FpgaPage = () => {
  return (
    <Layout>
     <SolutionDetailBanner bannerData={data}/>
     <SolutionDetailContent contentData={data}/>
     <div style={{background:"#FFFFFF"}}> 
     <SolutionDetailContent contentData={{descTitle:partTitle,descContent:partContent}}/>
      <div className={cooperWrapper}>
        {
          cooperData?.map(item=>(
            <img src={item} alt="Logo" className={cooperImg}/>
          ))
        }
      </div>
     </div>
     
    </Layout>
  )
}

export default FpgaPage
