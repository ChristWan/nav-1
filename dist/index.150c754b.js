const hash=localStorage.getItem("hash"),hashObject=JSON.parse(hash),$siteList=$(".siteList"),hashMap=hashObject||[{logo:"G",siteName:"Github",url:"https://github.com"},{logo:"V",siteName:"Vue",url:"https://cn.vuejs.org/"},{logo:"R",siteName:"React",url:"https://reactjs.org/"},{logo:"J",siteName:"掘金",url:"https://juejin.cn"},{logo:"Y",siteName:"印记中文",url:"https://docschina.org/"}],simplifyUrl=e=>e.replace("https://","").replace("http://","").replace("http://","").replace("www.","").replace(".com","").replace(/\/.*/,""),render=()=>{$siteList.find("li:not(.lastLi)").remove(),hashMap.forEach(((e,s)=>{const t=$(`<li>\n                          <div class="site">\n                              <div class="logo">\n                                  ${e.logo[0]}\n                              </div>\n                              <div class="siteName">${simplifyUrl(e.siteName)}</div>\n                              <div class="close">\n                                <svg class="icon">\n                                    <use xlink:href="#icon-closefill"></use>\n                                </svg>\n                              </div>                          \n                          </div>                      \n                       </li>`).insertBefore($(".lastLi"));t.on("click",(()=>{window.open(e.url)})),t.on("click",".close",(e=>{e.stopPropagation(),hashMap.splice(s,1),render()}))}))};render(),$(".addButton").on("click",(()=>{let e=window.prompt("请输入网址");0!==e.indexOf("http")&&(e="https://"+e),hashMap.push({logo:simplifyUrl(e)[0],siteName:e,url:e}),render()})),window.onbeforeunload=()=>{const e=JSON.stringify(hashMap);localStorage.setItem("hash",e)};
//# sourceMappingURL=index.150c754b.js.map