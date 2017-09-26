import React, {Component} from 'react';

class InsertContent extends Component {
    handleRange(event){
        document.getElementById("myProcess").setAttribute("value", event.target.value);
    };
    handleMeter(event){
        document.getElementById("myMeter").setAttribute("value", event.target.value);
    }
    render(){
        return (
            <div>
                <h2>嵌入内容</h2>
                <h3>1.使用map元素在img上创建客户端分区响应图</h3>
                <p>area元素的属性可以分为两类：第一类处理是area所代表的图像区域被用户点击后浏览器会导航到URL; 第二类则包含了更有意思的属性：shape和coords属性，可以用这些属性来表明用户可以点击的各个图像区域。shape和coords属性是共同起作用的，coords属性的意思根据shape属性的值而定。</p>
                <table>
                    <caption>shape和coords属性的值</caption>
                    <thead>
                        <tr>
                            <th>shape值</th>
                            <th>coords值的性质和意思</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>rect</td>
                            <td>代表一个矩形区域。coords属性必须由4个用逗号分隔的4个参数(例如：x1, y1, x2, y2)组成，分别为左上角顶点左边(x1, y1)和右下角顶点坐标(x2, y2)</td>
                        </tr>
                        <tr>
                            <td>circle</td>
                            <td>代表一个圆形区域。coords属性必须由三个逗号分隔参数(x1, y1, r)组成, 分别为圆心的坐标(例如：x1, y1)和圆的半径r。</td>
                        </tr>
                        <tr>
                            <td>polygon</td>
                            <td>代表一个多边形，coords属性必须为该n边形所有顶点坐标组成的n对数字(例如：x<sub>1</sub>, y<sub>1</sub>, x<sub>2</sub>, y<sub>2</sub>, ..., x<sub>n</sub>, y<sub>n</sub>), 多变形各顶点的坐标依次为(x<sub>1</sub>, y<sub>1</sub>)、(x<sub>2</sub>, y<sub>2</sub>)...(x<sub>n</sub>, y<sub>n</sub>)</td>
                        </tr>
                        <tr>
                            <td>代表默认区域</td>
                            <td>即覆盖整张图片。此时不需要提供coords值</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    正方形&圆形: <img src={require('../img/demo.jpg')} alt="样例图片" width="300" height="100" useMap="#imgMap1" />
                </p>
                <map name="imgMap1">
                    <area shape="rect" coords="0, 0, 99.5, 99.5" href="http://www.baidu.com" alt="百度链接"/>
                    <area shape="rect" coords="100, 0, 200, 100" href="http://www.qq.com" alt="腾讯链接"/>
                    <area shape="circle" coords="250, 50, 50" href="http://www.mi.com" alt="小米链接"/>
                </map>
                <p>
                    多边形: <img src={require('../img/demo.jpg')} alt="样例图片" width="300" height="100" useMap="#imgMap2" />
                </p>
                <map name="imgMap2">
                    <area shape="polygon" coords="0, 100, 150, 0, 300, 100" href="http://www.baidu.com" alt="百度链接"/>
                </map>
                <h3>2.通过插件嵌入内容</h3>
                <p>object和enbed元素最初都是作为扩展浏览器能力的一种方式，用于添加插件支持，而插件能够处理浏览器不直接支持的内容。</p>
                <p>object元素实现的效果和embed元素一样，但它的工作方式稍有不同，并带有一些额外的功能。object元素的一大优点是可以包含备用内容，在指定内容不可用时显示出来。</p>
                <p>embed:
                    <embed src="http://www.mi.com" type="applicaption/x-shockwave-flash" width="300" height="150"/>
                </p>
                <p>object:
                    <object data="http://www.mi.com" type="applicaption/x-shockwave-flash">
                        <param name="allowFullScreen" value="true"/>
                        <b>对不起, 当前插件不被支持!</b>
                    </object>
                </p>
                <h3>3.使用object元素嵌入图像</h3>
                <p>
                    使用object元素嵌入图像:
                    <object data={require('../img/demo.jpg')} type="image/jpg" width="300">123</object>
                </p>
                <h3>4.使用object元素创建分区响应图</h3>
                <p>同样可以用object元素来创建客户端分区响应图。usemap属性可以用于关联map元素和object元素。</p>
                <map name="objectMap">
                    <area shape="rect" coords="0, 0, 100, 100" href="http://www.mi.com" alt="小米官网"/>
                </map>
                <object data={require('../img/demo.jpg')} type="image/jpg" width="100" height="100" useMap="#objectMap">800</object>
                <h3>5.嵌入数字表示形式</h3>
                <p>HTML5有两个新元素允许我们在文档中嵌入数值的表现形式。progress元素可以用来表现某项任务逐渐完成的过程, 局部属性有：value、max、min。value属性定义了当前的进度，位于0和max属性的值构成的范围之间，当amx属性被省略是范围为0到1，用浮点数表示进度。</p>
                <progress id="myProcess" value="10" max="100"></progress>
                <br/>
                <input type="range" step="1" min="0" defaultValue="10" max="100" onChange={this.handleRange}/>
                <p>meter元素显示了某个范围内所有可能可能值中的一个。min和max属性设定了可能值所处范围的边界，它们可以用浮点数来表示。meter元素的显示可能分为三个部分：过低、过高和最佳。low属性设置了一个值，在它之下所有值被认为是过低；hight属性设置了一个值，在它只上的所有值被认为是过高；optimum属性则指定了“最佳”的值。</p>
                <meter id="myMeter" defaultValue="10" min="10" max="100" low="40" height="70" optimum="100" width="100"></meter>
                <br/>
                <input type="range" step="1" min="0" defaultValue="10" max="100" onChange={this.handleMeter}/>
            </div>
        );
    }
}

export default InsertContent;