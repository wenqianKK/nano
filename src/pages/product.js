import * as React from 'react';
import Layout from '../components/layout';
import { productData } from '../constant'
import BannerBox from "../components/banner-box";

const ProductPage = () => {
  return (
    <Layout>

      <BannerBox 
       {
         ...productData.fpga
       }
       wrapperBackgroud = "#F5F9FC"
       boxBackgroud = "#FFFFFF"
       color = " #304659"
       imgWidth= "56px"
       imgHeight = "56px"
      />
      <BannerBox 
       {
         ...productData.allLink
       }
       wrapperBackgroud = "#FFFFFF"
       imgWidth= "56px"
       imgHeight= "56px"
      />

    </Layout>
  )
}

export default ProductPage