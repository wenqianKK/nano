import React, { useState } from 'react';
import {
  footerWrapper,
  footerTop,
  footerTopl,
  footerTopr,
  footerLogo,
  footerImgLogo,
  footerContent,
  footerContentItem,
  footerContentTitle,
  footerContentText,
  footerErwei,
  footerErweiImg,
  footerBot,
  footerBotl,
  footerBotr,
  footerBotrIcon
} from './index.module.css';
import logo2 from "../../images/logo2.jpg";
import { footerData }  from '../../constant';

const Footer = (props) => {
  const { contentData, erweimaImg, footerIcon,footerText,} = footerData
  return (
    <footer className={footerWrapper}>
      <div className={footerTop}>
        <div className={footerTopl}>
          <div className={footerLogo}>
            <img src={logo2} alt="Logo" className={footerImgLogo}/>
          </div>
          <div className={footerContent}>
          {contentData?.map(item=>(
            <div className={footerContentItem}>
              <div className={footerContentTitle}>
                { item.title }
              </div>
              <div className={footerContentText}>
                { item.text }
              </div>
            </div>
          ))}
          </div>
        </div>
        <div className={footerTopr}>
          <div className={footerErwei}>
            <img src={erweimaImg} alt="Logo" className={footerErweiImg}/>
          </div>
        </div>
      </div>
      <div className={footerBot}>
        <div className={footerBotl}>{footerText}</div>
        <div className={footerBotr}>
            {
              footerIcon?.map(item=>(
                <img src={item} alt="footer" className={footerBotrIcon}/>
              ))
            }
        </div>
      </div>
    </footer >
  )
}

export default Footer