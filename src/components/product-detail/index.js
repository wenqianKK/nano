import React, { useState ,useEffect} from 'react';
import {
  detailWrapper,
  detailMain,
  caseWrapper,
  caseImgWrapper,
  caseImg,
  caseContent,
  contentWrapper,
  contentSideRight,
  contentSideTitle,
  contentCenter,
  contentSideDesc,
  contentSideSubTitle,
  contentSideLittleText,
  contentSideSubDesc,
  contentSideImg,
  contentSideSubDescstr
} from './index.module.css'
import TextTab from '../../components/text-tab'


const ProductDetail = ({detailData = {sideTab:[{}]}}) => {
  const [active, setActive] = useState(detailData.sideTab[0]["value"]);
  const { sideContent={} } = detailData
  console.log('detailData',detailData)
  console.log('sideContent',sideContent)
  console.log('active',active)
  console.log('sideContent[active]',sideContent[active])

  const sideContentItem = sideContent[active] ? sideContent[active] :{}
  console.log('actisideContentItemve',sideContentItem)
  console.log('sideContent["otherDesc"]',sideContent["otherDesc"])
  useEffect(() => {
    setActive(detailData.sideTab[0]["value"])
  }, [detailData])
  return (<div className={detailWrapper}> 
    <div className={detailMain}>

      <div className={caseWrapper}>
        <div className={caseImgWrapper}>
          <img src={detailData.topCaseImg} alt="Logo" className={caseImg}/>
        </div>
        <div className={caseContent}>
          <span>
            {detailData.topCaseContent}
          </span>
        </div>
      </div>

      <div className={contentWrapper}>

        <TextTab
          dataSource={detailData.sideTab}
          style={{flex:1,paddingTop:54}}
          active={active}
          onChange={(active)=>{setActive(active)}}
        />
        <div className={contentCenter}></div>

        <div className={contentSideRight}>
          <div className={contentSideTitle}>
            {sideContentItem["title"]}
          </div>
          {sideContentItem["desc"] && <div className={contentSideDesc}>
            {sideContentItem["desc"]}
          </div>}

          { sideContentItem["imgUrl"] && <div className={contentSideImg}>
            <img src={sideContentItem["imgUrl"]} alt={sideContentItem["title"]} className={caseImg}/>
          </div>}

          { sideContentItem["otherDesc"] && sideContentItem["otherDesc"].length >0 && sideContentItem["otherDesc"].map(item =><div>
            
            { item["imgUrl"] && <div className={contentSideImg}>
            <img src={item["imgUrl"]} alt={item["title"]} className={caseImg}/>
            </div>}

            <div className={contentSideSubTitle}>
              {item.subTitle}
            </div>
            {
              item.subContent && item.subContent.length>0 && item.subContent.map(itemIn => <>
                {
                  itemIn.littleText ? <div className={contentSideLittleText}> {itemIn.littleText} </div>:
                  <div style={{height:"24px"}}>  </div>
                }
                {
                  (Array.isArray(itemIn.subDesc ) && itemIn.subDesc.length>0) ? (itemIn.subDesc.map(subDesc => <div className={contentSideSubDesc}>
                    {subDesc}
                  </div>)) :<div className={contentSideSubDescstr}>{itemIn.subDesc}</div>
                }
              </>)
            }
          </div>) 
          }
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default ProductDetail