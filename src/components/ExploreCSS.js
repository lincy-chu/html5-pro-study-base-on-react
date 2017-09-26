import React, {Component} from 'react';

class ExploreCSS extends Component{
    render(){
        return (
            <div>
                <h2>初探CSS</h2>
                <h3>继承</h3>
                <p>如果浏览器在直接相关的样式中找不到某个属性的值，就会求助于继承机制，使得父元素的这个样式属性值。</p>
                <p style={{color: "orangered", border: "1px solid #000"}}>
                    <span style={{color: "deepskyblue"}}>哈哈哈</span>
                    <span style={{border: 'inherit'}}>继承</span>
                </p>
                <h3>CSS中的颜色</h3>
                <ol>
                    <li>1.rba(r, g, b) 用RGB模型表示颜色</li>
                    <li>2.rgba(r, g, b, a) 用RGB模型表示颜色，外加一个用于表示透明度的a值（0表示全透明，1代表完全不透明）。</li>
                    <li>3.hsl(h, s, l) 用HSL模型（色相[hue]、饱和度[saturation]和明度[lightness]）表示颜色</li>
                    <li>4.hsla(h, s, l, a) 与HSL模型类似，只不过增加了一个表示透明度的a值。</li>
                </ol>
                <p><span style={{color: "rgb(192, 192, 192)"}}>rba(r, g, b)</span><span style={{color: 'rgba(328, 168, 128, 0.6)'}}>rgba(r, g, b, a)</span><span style={{color: 'hsl(120, 100%, 22%)'}}>hsl(h, s, l)</span><span style={{color: "hsla(120, 100%, 22%, 0.5)"}}>hsla(h, s, l, a)</span></p>
                <h3>绝对长度</h3>
                <p>CSS中的绝对长度是现实世界的度量单位。CSS支持五种绝对单位。1.in 英寸 2.cm 厘米 3.mm 毫米 4.pt 磅(1pt = 1/ 72英寸) 5.pc pica(1pica = 12磅)</p>
                <p>一条样式中可以混合使用多种单位，包括混合使用决定单位和相对单位。如果能预先知道内容的呈现方式，那么绝对单位很有用处。</p>
                <h3>相对长度</h3>
                <p>相对长度的规定和实现逗比绝对长度更复杂，需要以严密、精确的语言明确定义。相对单位的测量需要依托其他类型的单位。</p>
                <p>CSS中的一些相对单位：1.em 与元素字号挂钩 2.ex与元素字体的'x高度'挂钩 3.rem 与根元素的字号挂钩 4.px CSS像素（假定显示设备的分辨率为96dpi） 5.% 另一个属性的值的百分比</p>
                <h3>使用CSS角度</h3>
                <p>1.deg 度（取值范围: 0deg ~ 360deg） 2.gra 百分度（取值范围: 0grad ~ 400grad） 3.rad 弧度(取值范围：0rad ~ 6.28rad) 4.turn 圆周（1turn等于360deg）</p>
            </div>
        );
    };
}

export default ExploreCSS;