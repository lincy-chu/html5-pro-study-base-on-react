import React, {Component} from "react";
import "../css/UseBorderAndBackground.css";

class UseBorderAndBackground extends Component{
    render(){
        return (
            <div className="current">
                <h2>使用边框和背景</h2>
                <h3>1.设置背景图像的尺寸</h3>
                <table>
                    <caption>background-size属性的值</caption>
                    <thead>
                        <tr>
                            <th>值</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>contain</td>
                            <td>等比例缩放图像，使其宽度、高度中较大者与容器横向或纵向重合，背景图像始终被包含在容器中</td>
                        </tr>
                        <tr>
                            <td>cover</td>
                            <td>等比例缩放图像，使图像至少覆盖容器，有可能超出容器</td>
                        </tr>
                        <tr>
                            <td>auto</td>
                            <td>默认值，图像以本身尺寸完全显示</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_1">
                    <span></span>
                    <span></span>
                </div>
                <h3>2. 设置元素的背景附着方式</h3>
                <p>使用background-attachment属性可以控制背景的附着方式。</p>
                <p>fixed: 背景固定到视窗上，即内容滚动时背景不动。local: 背景附着到内容上，即背景随内容一起滚动。 scroll: 背景固定到元素上，不会随内容一起滚动。</p>
                <div id="demo_2"></div>
                <h3>3.认识插入元素</h3>
                <p>display属性设置为run-in值会创建一个这样的元素：其盒子类型取决于周围元素。通常，浏览器必须评估以下三种情况，以确定插入框的特性。</p>
                <ol>
                    <li>如果插入元素包含了一个display属性值为block的元素，那么插入的元素就是块级元素。</li>
                    <li>如果插入元素的相邻兄弟元素是块级元素，那么插入元素就是兄弟元素中的第一个行内元素。</li>
                    <li>其他情况下，插入元素均为块级元素对待。</li>
                </ol>
                <div id="demo_3">
                    <span>
                        There are lots of different kinds of fruit - there are over 500 varieties of banana alone.
                    </span>
                    <p>
                        By the time we add the countless types of apple.
                    </p>
                </div>
                <hr/>
                <div id="demo_4">
                    <span>
                        There are lots of different kinds of fruit - there are over 500 varieties of banana alone.
                    </span>
                    <p>
                        By the time we add the countless types of apple.
                    </p>
                </div>
                <h3>4.创建多列布局</h3>
                <p>多列特性允许在多个垂直列中布局内容，跟报纸的排版方式类似。</p>
                <table>
                    <caption>多列属性</caption>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>column-count</td>
                            <td>指定列数</td>
                            <td>&lt;数值&gt;</td>
                        </tr>
                        <tr>
                            <td>column-fill</td>
                            <td>指定内容在列与列之间的分布方式，balance指浏览器确保不同列之间的长度差异可能小。如果取auto，则按照顺序填充列</td>
                            <td>balance、auto</td>
                        </tr>
                        <tr>
                            <td>column-gap</td>
                            <td>指定列之间的距离</td>
                            <td>&lt;长度值&gt;</td>
                        </tr>
                        <tr>
                            <td>column-rule</td>
                            <td>在一条声明中设置column-rule-*的简写属性</td>
                            <td>&lt;宽度值&gt;&lt;样式&gt;&lt;颜色&gt;</td>
                        </tr>
                        <tr>
                            <td>column-rule-color</td>
                            <td>设置列之间的颜色规则</td>
                            <td>&lt;颜色&gt;</td>
                        </tr>
                        <tr>
                            <td>column-rule-style</td>
                            <td>设置列之间的样式规则</td>
                            <td>跟border-style的属性的值相同</td>
                        </tr>
                        <tr>
                            <td>column-rule-width</td>
                            <td>设置列之间的宽度</td>
                            <td>&lt;长度值&gt;</td>
                        </tr>
                        <tr>
                            <td>columns</td>
                            <td>设置column-span和column-width的简写属性</td>
                            <td>&lt;长度值&gt;&lt;数值&gt;</td>
                        </tr>
                        <tr>
                            <td>column-span</td>
                            <td>指定元素横向能跨多少列</td>
                            <td>none、all</td>
                        </tr>
                        <tr>
                            <td>column-width</td>
                            <td>指定列宽</td>
                            <td>&lt;长度值&gt;</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_5">
                    <p>使用多列布局:</p>
                    <p>
                        There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices. One of the most interesting aspects of fruit is the variety available in each country. I live near London, in an area which is known for its apples.
                    </p>
                </div>
                <div id="demo_6">
                    <p>设置列宽度:</p>
                    <p>
                        There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices. One of the most interesting aspects of fruit is the variety available in each country. I live near London, in an area which is known for its apples.
                    </p>
                </div>
                <h3>5.创建弹性盒布局</h3>
                <p>弹性盒布局（也称为伸缩盒）在CSS3中得到进一步增强，为display属性添加一个新值(flexbox)，并定义了其他几个属性。使用弹性布局可以创建对浏览器窗口调整响应良好的流动界面。这是通过在包含元素之间容器块中未使用的空间来实现的。规范为弹性布局定义了如下新属性：</p>
                <ul>
                    <li>flex-align</li>
                    <li>flex-direction</li>
                    <li>flex-order</li>
                    <li>flex-pack</li>
                </ul>
                <div id="demo_7">
                    <p>创建简单的弹性盒</p>
                    <p>
                        There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    </p>
                    <p>
                        One of the most interesting aspects of fruit is the variety available in each country. I live near London, in an area which is known for its apples.
                    </p>
                    <p>
                        When travelling in Asia, I was struck by how many different kinds of banana were available - many of which had unique flavours and which were only available within a small region.
                    </p>
                </div>
                <div id="demo_8">
                    <p>创建多个可伸缩元素</p>
                    <p>
                        There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    </p>
                    <p>
                        One of the most interesting aspects of fruit is the variety available in each country. I live near London, in an area which is known for its apples.
                    </p>
                    <p>
                        When travelling in Asia, I was struck by how many different kinds of banana were available - many of which had unique flavours and which were only available within a small region.
                    </p>
                </div>
                <h3>6. 处理空白</h3>
                <p>空白在HTML文档中通常是被压缩或者直接忽略掉。这允许将HTML文档的布局跟也没的外观分离。whitespace属性指定空百字符的处理方式。</p>
                <table>
                    <caption>whitespace属性的值</caption>
                    <thead>
                        <tr>
                            <th>值</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>normal</td>
                            <td>默认值，空白符被压缩，文本行自动换行</td>
                        </tr>
                        <tr>
                            <td>nowrap</td>
                            <td>空白符被压缩，文本行不换行</td>
                        </tr>
                        <tr>
                            <td>pre</td>
                            <td>空白符被保留，文本只在遇到换行符的时候换行。</td>
                        </tr>
                        <tr>
                            <td>pre-line</td>
                            <td>空白符被压缩，文本会在一行排满或遇到换行符是时换行</td>
                        </tr>
                        <tr>
                            <td>pre-wrap</td>
                            <td>空白符被保留，文本会在一行排满或遇到换行符时换行</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_9">
                    <p>
                        There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of       choices.
                    </p>
                </div>
                <h3>7.指定单词、字母、行之间的间距</h3>
                <table>
                    <caption>间距属性</caption>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>letter-spacing</td>
                            <td>设置字母之间的间距</td>
                            <td>normal、&lt;长度值&gt;</td>
                        </tr>
                        <tr>
                            <td>word-spacing</td>
                            <td>设置单词之间的间距</td>
                            <td>normal、&lt;长度值&gt;</td>
                        </tr>
                        <tr>
                            <td>line-height</td>
                            <td>设置行高</td>
                            <td>normal、&lt;数值&gt;&lt;长度值&gt;&lt;%&gt;</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_10">
                    There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                </div>
                <h3>8.文本装饰与大小写转换</h3>
                <p>text-decoration和text-transform两个属性分别允许我们装饰文本和转换文本大小写。</p>
                <table>
                    <caption>文本装饰和大小写转换属性</caption>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>text-decoration</td>
                            <td>为文本应用装饰效果</td>
                            <td>none、underline、overline、line-through、blink</td>
                        </tr>
                        <tr>
                            <td>text-transform</td>
                            <td>为文本块转换大小写</td>
                            <td>none、capitalize、uppercase、lowercase</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_11">
                    <p>
                        There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    </p>
                    <p>
                        There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    </p>
                </div>

            </div>
        );
    };
}

export default UseBorderAndBackground;