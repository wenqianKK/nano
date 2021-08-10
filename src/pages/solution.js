import * as React from 'react';
import Layout from '../components/layout';
import {
  containTitle,
  modularWrap,
  modularItem,
  modularItemIcon,
  modularItemName,
  modularItemDesc,
  modularItemMore
} from '../styles/solution.module.css';
import { solutionData } from '../constant'


const SolutionPage = () => {
  return (
    <Layout>
      <div>
        <div className={containTitle}>专业服务  急速响应</div>
      </div>
      <div className={modularWrap}>
        {solutionData.map(item => {
          return <div className={modularItem}>
            <div className={modularItemIcon}>
              <img src={item.imgUrl} alt={"icon"}></img>
            </div>
            <div className={modularItemName}>
              {item.name}
            </div>
            <div className={modularItemDesc}>
              {
                item.desc.map(itemDesc => <p>{itemDesc}</p>)
              }
            </div>
            <div className={modularItemMore}>
              <a href={item.moreUrl}>{"了解更多>"}</a>
            </div>
          </div>
        })}
      </div>

    </Layout>
  )
}

export default SolutionPage