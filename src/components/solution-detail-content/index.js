import * as React from 'react'
import {
  descWrapper,
  descContent,
  descTitle
} from './index.module.css'

const SolutionDetailContent = ({contentData}) => {
  return (
    <div className={descWrapper}>
      <div className={descTitle}>
        {contentData.descTitle}
      </div>
      <p className={descContent}>
        {contentData.descContent}
      </p>
     </div>
  )
}

export default SolutionDetailContent