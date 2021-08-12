export function getCookie (cookieName) {
  console.log("name",cookieName)
  console.log("document.cookie",document.cookie)
  // const start = document.cookie.indexOf(cookieName+'=');
  // if (start == -1) return "";
  // start = start+cookieName.length+1;
  // var end = document.cookie.indexOf(';', start);
  // if (end == -1) end=document.cookie.length;
  // return document.cookie.substring(start, end);
  return cookieName
}

export const langData =  {
  cn:{
    home:"首页",
    solution:"解决方案"
  },
  en:{
    home:"Home",
    solution:"Solution"
  },
  jp:{
    home:"トップページ",
    solution:"ソリューション"
  }
}

// export const lang = ()=>{
//   return  langData[getCookie("langtype")||"en"]
// }