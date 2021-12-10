let html = document.querySelector('#demo')
let css = document.querySelector('#css')
let rella = document.querySelector('#rella')
console.log(rella)
let n = 0
let str1 = `/*
欢迎来访，今天也是新的瑞拉！
瑞拉，原名端午，不知名四川简州猫。出生年月不详，现约一岁半。调皮捣蛋，又聪明敏捷，是一只会魔法的格兰芬多小猫。
*/
`

let str2 = `/*
现在瑞拉要开始表演了
火焰熊熊 Incedio
*/
body{
    color: red;
}
/*
急急现形 Apareciym
*/
#yinyang {
    width: 200px;
    height: 200px;
    border: 1px solid black;
}
/*
速速变圆 Ronducio
*/
#yinyang {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*
八卦现身 Yinyang Revelio
*/
#yinyang{
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);
}
#yinyang::before{
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);
}
#yinyang::after{
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%);
}
/*
谢谢观看瑞拉的表演
*/
`
// str = str.replace(/\n/g, '<br>')
let displayStr = ''
let imgPath = `<img src="./rella.png" alt="rella" width="20%">`


let step = (str) => {
    setTimeout(() => {
        if (n < str.length) {
            if (str[n] === '\n') {
                displayStr += '<br>'
            }
            else if (str[n] === ' ') {
                displayStr += '&nbsp'
            }
            else {
                displayStr += str[n]
            }

            html.innerHTML = displayStr
            css.innerHTML = str.substring(0, n + 1)
            window.scrollTo(0, 999999)
            html.scrollTo(0, 999999)
            n += 1
            step(str)
        }
        else {
            rella.innerHTML = imgPath
            n = 0
        }
    }, 50)
}


step(str1)
// console.log(str1.length)
setTimeout(() => step(str2), 50 * str1.length + 500)

// displayStr = ''
// n = 0
// step(str2)
