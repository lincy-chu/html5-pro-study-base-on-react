import React, {Component} from "react";
import "../css/UnderstandCSS.css";

class UnderstandCSS extends Component {
    handleCheckbox(event){
        if(event.target.checked){
            console.log("选中");
            return;
        }
        console.log("未选中");
    };
    handleRadio(event){
        if(event.target.checked){
            console.log("选中");
            return;
        }
        console.log("未选中");
    }
    render(){
        return (
            <div>
                <h2>使用CSS选择器</h2>
                <h3>1.使用类选择器匹配单一元素</h3>
                <a href="http://www.mi.com" className="class1 class2">小米官网</a>
                <br/>
                I like <span className="class2">apple</span> and orange.
                <br/>
                <a href="http://www.baidu.com">百度一下</a>
                <h3>2.根据属性选择元素</h3>
                <table>
                    <caption>元素属性选择器的条件</caption>
                    <thead>
                        <tr>
                            <th>条件</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>[attr]</td>
                            <td>选择定义attr属性的元素，忽略其属性值</td>
                        </tr>
                        <tr>
                            <td>[attr='val']</td>
                            <td>选择定义attr属性的元素，且属性值为val的元素</td>
                        </tr>
                        <tr>
                            <td>[attr^='val']</td>
                            <td>选择定义attr属性的元素，且属性值以字符串val打头的元素</td>
                        </tr>
                        <tr>
                            <td>[attr$='val']</td>
                            <td>选择定义attr属性的元素，且属性值以字符串val结尾的元素</td>
                        </tr>
                        <tr>
                            <td>[attr*='val']</td>
                            <td>选择定义attr属性的元素，且属性值包含字符串val的元素</td>
                        </tr>
                        <tr>
                            <td>[attr~='val']</td>
                            <td>选择定义attr属性的元素，其属性值具有多个值，其中一个为字符串val的元素</td>
                        </tr>
                        <tr>
                            <td>[attr|='val']</td>
                            <td>选择定义attr属性的元素，且属性值为连字符分隔的多个值，其中第一个为字符串val的元素</td>
                        </tr>
                    </tbody>
                </table>
                <p id="demo_1" style={{margin: '10px'}}>
                    <a href="http://www.mi.com">小米官网</a>
                    <span style={{display: 'block'}}>I like apple and orange.</span>
                </p>
                <p id="demo_2">
                    <a href="http://www.mi.com">小米官网</a>
                    <span style={{display: 'block'}}>I like apple and orange.</span>
                    <a href="http://www.qq.com">腾讯官网</a>
                </p>
                <p id="demo_3">
                    <a href="http://www.mi.com">小米官网</a>
                    <a href="demo.html">demo</a>
                </p>
                <p id="demo_4">
                    <a href="http://www.mi.com" className="a1 a2 a3">小米</a>
                    <a href="demo.html" className="a2 a3">demo</a>
                    <a href="http://www.qq.com" className="a1 a3">腾讯</a>
                </p>
                <p id="demo_5">
                    <a href="http://www.mi.com" lang="en-us">小米</a>
                    <br/>
                    <span>I like apple and orange.</span>
                    <br/>
                    <a href="http://www.baidu.com" lang="en">百度</a>
                </p>
                <h3>3.复合选择器</h3>
                <p>组合使用不同的选择器可以匹配更特定的元素，有的复合选择器能够将目标样式应用到更多元素，有的复合选择器则会锁定更少元素，总之会让你的选择非常具体。</p>
                <h4>3.1 并集选择器</h4>
                <p id="demo_6">
                    <a href="http://www.mi.com">小米</a>
                    <span lang="en">I like apple and orange.</span>
                </p>
                <h4>3.2 子元素选择器</h4>
                <p id="demo_7">
                    <span>
                        <a href="http://www.mi.com">
                            <strong>小米</strong>
                        </a>
                        <a href="http://www.qq.com">腾讯</a>
                    </span>
                </p>
                <h4>3.3 相邻兄弟选择器</h4>
                <p>相邻兄弟选择器是目标元素紧跟第一个选择器的元素且匹配第二个选择器。</p>
                <div id="demo_8">
                    <a href="http://www.baidu.com">百度</a>
                    <span>I like cherry.</span>
                    <p>I like apple and orange.</p>
                    <span>I also like apple.</span>
                    <span>I also like orange.</span>
                </div>
                <h4>3.4 普通兄弟选择器</h4>
                <p>普通兄弟选择器选择范围会稍微宽松一些，它匹配的元素在指定元素之后，但不一定相邻。</p>
                <div id="demo_9">
                    <a href="http://www.baidu.com">百度</a>
                    <span>I like cherry.</span>
                    <p>I like apple and orange.</p>
                    <span>I also like apple.</span>
                    <span>I also like orange.</span>
                </div>
                <h3>4 使用伪元素选择器</h3>
                <p>CSS中定义了伪选择器（pseudo-selector），它们提供了更复杂的功能，但并非直接对应HTML文档定义的元素。伪选择器分两种：伪元素和伪类。</p>
                <h4>4.1 使用::first-line选择器</h4>
                <p>::first-line选择器匹配文本块儿的首行。</p>
                <div id="demo_10">
                    <p>Fourscore and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.</p>
                </div>
                <h4>4.2 使用::first-letter选择器</h4>
                <p>::first-letter选择器匹配文本块的首字母或首个字儿。</p>
                <div id="demo_11">
                    <p>I like apple and oranges.</p>
                    <p>我喜欢苹果和橙子。</p>
                </div>
                <h4>4.3 使用:before和:after选择器</h4>
                <p>这两个选择器跟之前的选择器都不大一样，因为它们会生成内容，并将其插入文档。:before选择器将内容插入到元素的前面，:after选择器将内容插入到元素的后面。</p>
                <div id="demo_12">
                    <a href="http://www.baidu.com">百度</a>
                    <p>I like apple and orange</p>
                </div>
                <h3>5. 使用CSS计数器</h3>
                <p>:before和:after选择器经常跟CSS计数器特性一起使用，结合二者可生成数值内容。</p>
                <div id="demo_13">
                    <p>I like <span>apple</span> and orange.</p>
                    <p>I also like apple and orange.</p>
                </div>
                <h3>6. 使用结构性伪类选择器</h3>
                <p>使用结构性伪类选择器能够根据元素在文档中的位置选择元素。这类选择器都有一个冒号字符前缀，例如:empty。它们可以单独使用，也可以与其他选择器组合使用，例如p:empty。</p>
                <h4>5.1 使用:root选择器</h4>
                <p>:root选择器总是返回html元素。</p>
                <div id="demo_14">
                    <p>I like appl and orange.</p>
                </div>
                <h4>5.2 使用子元素选择器</h4>
                <table>
                    <caption>子元素选择器</caption>
                    <thead>
                        <tr>
                            <th>选择器</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>:first-child</td>
                            <td>选择元素的第一个子元素</td>
                        </tr>
                        <tr>
                            <td>:last-child</td>
                            <td>选择元素的最后一个元素</td>
                        </tr>
                        <tr>
                            <td>:only-child</td>
                            <td>选择元素的唯一子元素</td>
                        </tr>
                        <tr>
                            <td>:only-of-type</td>
                            <td>选择元素指定类型的唯一子元素</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_15">
                    <p>I like apple and orange.</p>
                    <p>I also like apple and orange.</p>
                </div>
                <div id="demo_16">
                    <p>I like apple and orange.</p>
                    <p>I also like apple and orange.</p>
                </div>
                <div id="demo_17">
                    <p>
                        <span>I like apple.</span><br/>
                        <span>I like orange.</span>
                    </p>
                    <p><span>I like cherry.</span></p>
                </div>
                <div id="demo_18">
                    <p>
                        <span>I like apple.</span><br/>
                        <span>I like orange.</span>
                    </p>
                    <p><span>I like cherry.</span></p>
                </div>
                <h4>5.3 使用:nth-child选择器</h4>
                <table>
                    <caption>:nth-child选择器</caption>
                    <thead>
                        <tr>
                            <th>选择器</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>:nth-child(n)</td>
                            <td>选择父元素的第n个子元素</td>
                        </tr>
                        <tr>
                            <td>:nth-last-child(n)</td>
                            <td>选择父元素的倒数第n个子元素</td>
                        </tr>
                        <tr>
                            <td>:nth-of-child(n)</td>
                            <td>选择父元素定义类型的第n个子元素</td>
                        </tr>
                        <tr>
                            <td>:nth-last-of-type(n)</td>
                            <td>选择父元素定义类型的倒数第n个子元素</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_19">
                    <p>I like apple and orange.</p>
                    <p>I like apple.</p>
                    <p>I like orange.</p>
                </div>
                <hr/>
                <div id="demo_20">
                    <p>I like apple and orange.</p>
                    <p>I like apple.</p>
                    <p>I like orange.</p>
                </div>
                <hr/>
                <div id="demo_21">
                    <p>I like apple and orange.</p>
                    <p>I like apple.</p>
                    <p>I like orange.</p>
                </div>
                <hr/>
                <div id="demo_22">
                    <p>I like apple and orange.</p>
                    <p>I like apple.</p>
                    <p>I like orange.</p>
                </div>
                <h3>6. 使用UI伪类选择器</h3>
                <table>
                    <caption>UI选择器</caption>
                    <thead>
                        <tr>
                            <th>选择器</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>:enabled</td>
                            <td>选择启用状态的元素</td>
                        </tr>
                        <tr>
                            <td>:disabled</td>
                            <td>选择禁用状态的元素</td>
                        </tr>
                        <tr>
                            <td>:checked</td>
                            <td>选择被选中的input元素(仅用于单选按钮和复选框)</td>
                        </tr>
                        <tr>
                            <td>:default</td>
                            <td>选择默认元素</td>
                        </tr>
                        <tr>
                            <td>:valid 、:invalid</td>
                            <td>根据输入验证选择有效或者无效的input元素</td>
                        </tr>
                        <tr>
                            <td>:in-range、:out-of-range</td>
                            <td>根据在指定范围之内或者之外受限的input元素</td>
                        </tr>
                        <tr>
                            <td>:required 、:optional</td>
                            <td>根据是否允许:required属性选择input元素</td>
                        </tr>
                    </tbody>
                </table>
                <h4>6.1 使用:enabled选择器和:disabled选择器</h4>
                <div id="demo_23">
                    <textarea disabled defaultValue="我是禁用的文本框"></textarea>
                    <textarea defaultValue="我是可用的文本框"></textarea>
                </div>
                <h4>6.2 使用:checked选择器可以选中由checked属性或者用户勾选的单选按钮或者复选框</h4>
                <div id="demo_24">
                    <input type="checkbox" id="apple" onChange={this.handleCheckbox}/>
                    <label htmlFor="apple">
                        Apple
                    </label>
                    <fieldset>
                        <legend>选择性别</legend>
                        <input type="radio" id="female" name="sex" onChange={this.handleRadio}/>
                        <label htmlFor="female">女</label>
                        <input type="radio" id="male" name="sex" onChange={this.handleRadio}/>
                        <label htmlFor="male">男</label>
                    </fieldset>
                </div>
                <h4>6.3 使用默认元素</h4>
                <p>:default选择器从一组类似的元素中选择默认元素。例如：提交按钮总是表单的默认按钮。</p>
                <div id="demo_25">
                    <form onSubmit={function(event){event.preventDefault();}}>
                        <label htmlFor="name">
                            Name: <input type="text" id="name"/>
                        </label>
                        <input type="submit" defaultValue="提交"/>
                        <input type="reset" defaultValue="重置"/>
                    </form>
                </div>
                <h4>6.4 使用:valid和:invalid选择器</h4>
                <p>:valid和:invalid选择器分别匹配符合和不符合它们输入验证要求的input元素。</p>
                <div id="demo_26">
                    <label htmlFor="name">
                        Name: <input type="text" id="name" required name="name" />
                    </label>
                    <label htmlFor="age">
                        age: <input type="text" id="age" name="age"/>
                    </label>
                </div>
                <h4>6.5 选择限定范围的input元素</h4>
                <p>关于输入验证的一种具体程度更高的变体是选择值限于指定范围的input元素。:in-range选择器匹配指定范围内的input元素，:out-range选择器匹配位于指定范围之外的input元素。</p>
                <div id="demo_27">
                    <label htmlFor="price">
                        $ per unit in your area: <input type="range" step="1" min="0" max="100" default="0"/>
                    </label>
                    <p>I like apple and orange.</p>
                </div>
                <h4>6.6 选择必选和可选的input元素</h4>
                <p>:required选择器匹配具有required属性的input元素，这里能够确保用户必需输入与input元素相关的值才能提交表单。:optional选择器匹配没有required属性的input元素。</p>
                <div id="demo_28">
                    <label htmlFor="name">
                        Name: <input type="text" required placeholder="请输入姓名" id="name"/>
                    </label>
                    <br/>
                    <label htmlFor="age">
                        age: <input type="number" id="age"/>
                    </label>
                </div>
                <h3>7. 使用动态伪类选择器</h3>
                <p>之所以称为动态伪类选择器，是因为它们根据条件的改变匹配元素，是相对于文档的固定状态而言的。</p>
                <h4>7.1 使用:link和:visited选择器</h4>
                <p>:link选择器匹配超链接，:visited选择器匹配用户已经访问的超链接。</p>
                <div id="demo_29">
                    <a href="http://www.mi.com">小米</a>
                    <a href="http://www.qq.com">腾讯</a>
                    <a href="http://www.sina.com">新浪</a>
                </div>
                <h4>7.2 使用:hover选择器</h4>
                <p>:hover选择器匹配用户鼠标悬停在其上的任意元素，鼠标在HTML页面上移动时，选中的元素样式会发生变化。</p>
                <div id="demo_30">
                    <p>I like apple and orange.</p>
                    <p>I also like apple and orange.</p>
                </div>
                <h4>7.3 使用:focus选择器</h4>
                <p>:focus选择器，匹配当前获取焦点的元素。</p>
                <div id="demo_31">
                    <form>
                        Name: <input type="text"/>
                        <br/>
                        City: <input type="text"/>
                        <br/>
                        <input type="submit" defaultValue="提交"/>
                    </form>
                </div>
                <h3>8. 其他伪类选择器</h3>
                <h4>8.1 使用否定选择器</h4>
                <p>:not否定选择器可以对任意选择取反。</p>
                <div id="demo_32">
                    <a href="http://www.mi.com">小米</a>
                    <p>I like apple and orange.</p>
                    <a href="http://w3c.org">W3C</a>
                </div>
                <h4>8.2 使用:empty选择器</h4>
                <p>:empty选择器匹配没有定义任何子元素的元素。</p>
                <div id="demo_33">
                    <p><span>I like apple and </span>orange!</p>
                    <p>I like apple.</p>
                </div>





            </div>
        );
    }
}

export default UnderstandCSS;

