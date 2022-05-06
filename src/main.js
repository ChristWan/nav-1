const hash = localStorage.getItem('hash')
const hashObject = JSON.parse(hash)
const $siteList = $('.siteList')

const hashMap = hashObject || [{
    logo: "G", siteName: 'Github', url: "https://github.com"
}, {
    logo: "V", siteName: 'Vue', url: "https://cn.vuejs.org/"
}, {
    logo: "R", siteName: 'React', url: "https://reactjs.org/"
}, {
    logo: "J", siteName: '掘金', url: "https://juejin.cn"
}, {
    logo: "Y", siteName: '印记中文', url: "https://docschina.org/"
}]

const simplifyUrl = (url) => {
    return url.replace('https://', '')
        .replace('http://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace('.com', '')
        .replace(/\/.*/, '')
}

const render = () => {
    $siteList.find('li:not(.lastLi)').remove()
    hashMap.forEach((node, index) => {
        const $li = $(`<li>
                          <div class="site">
                              <div class="logo">
                                  ${node.logo[0]}
                              </div>
                              <div class="siteName">${simplifyUrl(node.siteName)}</div>
                              <div class="close">
                                <svg class="icon">
                                    <use xlink:href="#icon-closefill"></use>
                                </svg>
                              </div>                          
                          </div>                      
                       </li>`).insertBefore($('.lastLi'))
        $li.on('click', () => {
            window.open(node.url)
        })
        $li.on('click', '.close', (e) => {
            e.stopPropagation()
            hashMap.splice(index, 1)
            render()
        })
    })
}
render()

$('.addButton')
    .on('click', () => {
        let url = window.prompt('请输入网址')
        if (url.indexOf('http') !== 0) {
            url = 'https://' + url
        }
        hashMap.push({
            logo: simplifyUrl(url)[0], siteName: url, url: url
        })
        render()
    })

window.onbeforeunload = () => {
    const string = JSON.stringify(hashMap)
    localStorage.setItem('hash', string)
}