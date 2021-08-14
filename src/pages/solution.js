import * as React from 'react';
import Layout from '../components/layout';
import {
  
} from '../styles/solution.module.css';
import { solutionData } from '../constant'
import BannerBox from "../components/banner-box";


const SolutionPage = () => {
  return (
    <Layout>
      <BannerBox 
        data={solutionData} 
        title={"专业服务 极速响应"} 
        subtitle="解决方案"
      />
    </Layout>
  )
}

export default SolutionPage
