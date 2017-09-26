import React, {Component} from 'react';

var cookieCount = 0;
class UnderstandDOM extends Component{
    render(){
        return (
            <div>
                <h2>使用Document对象</h2>
                <h3>1. 使用document对象</h3>
                <div id="demo_1_2">
                    <p>
                        There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    </p>
                </div>
                <input type="button" defaultValue="document" onClick={this.handleDocument1}/>
                <div id="demo_2_2" style={{border: '1px solid orangered'}}>

                </div>
                <button onClick={this.handleCookie}>Add Cookie</button>
                <button onClick={this.handleCookie}>Update Cookie</button>
                <h4>3.1 理解就绪状态</h4>
                <table>
                    <caption>readyState属性返回的值</caption>
                    <thead>
                        <tr>
                            <th>值</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>loading</td>
                            <td>浏览器正在加载和处理次文档</td>
                        </tr>
                        <tr>
                            <td>interactive</td>
                            <td>文档已被解析，但浏览器还在加载其中的链接的资源（图像和媒体文件等）</td>
                        </tr>
                        <tr>
                            <td>complete</td>
                            <td>文档已被解析，所有的资源也已加载完毕</td>
                        </tr>
                    </tbody>
                </table>
                <h4>3.2 使用CSS选择器获取元素对象</h4>
                <div id="demo_3_2">
                    <p>
                        I like apple and orange.
                    </p>
                    <span style={{display: 'flex'}}>I like apple and orange.</span>
                    <div id="demo">
                        I like apple and orange.
                    </div>
                </div>
                <button id="btn_1" onClick={this.handleClick}>使用CSS选择器获取元素对象</button>
                <h4>3.3 在DOM树里导航</h4>
                <table>
                    <caption>navigation属性和方法</caption>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>childNodes</td>
                            <td>返回子元素组</td>
                        </tr>
                        <tr>
                            <td>firstChild</td>
                            <td>返回第一个子元素</td>
                        </tr>
                        <tr>
                            <td>hasChildNodes()</td>
                            <td>如果当前元素有子元素就返回true</td>
                        </tr>
                        <tr>
                            <td>lastChild</td>
                            <td>返回倒数第一个子元素</td>
                        </tr>
                        <tr>
                            <td>nextSibling</td>
                            <td>返回定义在当前元素之后的兄弟元素</td>
                        </tr>
                        <tr>
                            <td>parentNode</td>
                            <td>返回父元素</td>
                        </tr>
                        <tr>
                            <td>previousSibling</td>
                            <td>返回定义在当前之前的兄弟元素</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_4_2">
                    <pre id="results"></pre>
                    <p>
                        <button id="parent" onClick={this.handleNodes}>Parent</button>
                        <button id="child" onClick={this.handleNodes}>First Child</button>
                        <button id="prev" onClick={this.handleNodes}>Prev Sibling</button>
                        <button id="next" onClick={this.handleNodes}>Next Sibling</button>
                    </p>
                </div>
                <h4>3.4 使用document.defaultView获取window对象</h4>
                <table>
                    <tbody>
                    <tr>
                        <th>outerWidth</th>
                        <th>outerHeight</th>
                    </tr>
                    <tr>
                        <td id="oWidth"></td>
                        <td id="oHeight"></td>
                    </tr>
                    </tbody>
                </table>
                <button onClick={this.getWindows}>使用document.defaultView获取window对象</button>
                <h4>3.5 获取窗口信息</h4>
                <p>window对象的基本功能涉及当前文档所显示的窗口。</p>
                <table>
                    <caption>窗口相关成员</caption>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                            <th>返回</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>innerWidth</td>
                            <td>获取窗口内容区的宽度</td>
                            <td rowSpan="6">数值</td>
                        </tr>
                        <tr>
                            <td>innerHeight</td>
                            <td>获取窗口内容区的高度</td>
                        </tr>
                        <tr>
                            <td>outerWidth</td>
                            <td>获取窗口的宽度，包括边框和菜单栏等</td>
                        </tr>
                        <tr>
                            <td>outerHeight</td>
                            <td>获取窗口的高度，包括边框和菜单栏等</td>
                        </tr>
                        <tr>
                            <td>pageXOffset</td>
                            <td>获取窗口从左上角算起水平滚动过的像素点</td>
                        </tr>
                        <tr>
                            <td>pageYOffset</td>
                            <td>获取窗口从左上角算起垂直滚动的像素点</td>
                        </tr>
                        <tr>
                            <td>screen</td>
                            <td>返回一个描述屏幕的Screen对象</td>
                            <td>Screen</td>
                        </tr>
                        <tr>
                            <td>screenLeft、screenX</td>
                            <td>获取从窗口左边缘到屏幕左边缘的像素点（不是所有浏览器都同时实现了这两个属性，或是以同样的方法来计算这个值）</td>
                            <td rowSpan="2">数值</td>
                        </tr>
                        <tr>
                            <td>screenTop、screenY</td>
                            <td>获取从窗口上边缘到屏幕上边缘的像素点（不是所有浏览器都同时实现了这两个属性，或是以同样的方法来计算这个值）</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <caption>Screen对象的属性</caption>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                            <th>返回</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>avaiWidth</td>
                            <td>屏幕上可供显示窗口部分的宽度（排除工具栏和菜单栏之类）</td>
                            <td rowSpan="5">数值</td>
                        </tr>
                        <tr>
                            <td>avaiHeight</td>
                            <td>屏幕上可供显示窗口部分的高度（排除工具栏和菜单栏之类）</td>
                        </tr>
                        <tr>
                            <td>colorDepth</td>
                            <td>屏幕颜色深度</td>
                        </tr>
                        <tr>
                            <td>width</td>
                            <td>屏幕的宽度</td>
                        </tr>
                        <tr>
                            <td>height</td>
                            <td>屏幕的高度</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_5_2">
                    <table>
                        <thead>
                            <tr>
                                <th>outerWidth</th>
                                <th>outerHeight</th>
                                <th>innerWidth</th>
                                <th>innerHeight</th>
                                <th>screen.width</th>
                                <th>screen.height</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="res"></td>
                                <td className="res"></td>
                                <td className="res"></td>
                                <td className="res"></td>
                                <td className="res"></td>
                                <td className="res"></td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="button" defaultValue="获取window信息" onClick={this.windowInfo}/>
                </div>
                <h4>3.6 与窗口进行交互</h4>
                <table>
                    <caption>window的交互功能</caption>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                            <th>返回</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>blur()</td>
                            <td>让窗口失去键盘焦点</td>
                            <td rowSpan="7">void</td>
                        </tr>
                        <tr>
                            <td>close()</td>
                            <td>关闭窗口（不是所有浏览器都允许脚本关闭窗口）</td>
                        </tr>
                        <tr>
                            <td>focus()</td>
                            <td>让窗口获得键盘焦点</td>
                        </tr>
                        <tr>
                            <td>print()</td>
                            <td>提示用户打印页面</td>
                        </tr>
                        <tr>
                            <td>scrollBy(x, y)</td>
                            <td>让文档相对于当前位置进行滚动</td>
                        </tr>
                        <tr>
                            <td>scrollTo(x, y)</td>
                            <td>滚动到指定的位置</td>
                        </tr>
                        <tr>
                            <td>stop()</td>
                            <td>停止载入文档</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_6_2">
                    <p>
                        There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    </p>
                    <p>
                        There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    </p>
                    <p>
                        <button id="scrollBy" onClick={this.windowFunc}>ScrollBy</button>
                        <button id="print" onClick={this.windowFunc}>Print</button>
                        <button id="close" onClick={this.windowFunc}>Close</button>
                        <button id="scrollTo" onClick={this.windowFunc}>ScrollTo</button>
                    </p>
                </div>
                <h4>3.7 对用户进行提示</h4>
                <div id="demo_7_2">
                    <button id="alert" onClick={this.alertUser}>alert</button>
                    <button id="confirm" onClick={this.alertUser}>confirm</button>
                    <button id="prompt" onClick={this.alertUser}>prompt</button>
                    <button id="showModalDialog" onClick={this.alertUser}>showModalDialog(chrome不再支持)</button>
                </div>
                <h4>3.8 使用浏览器历史</h4>
                <table>
                    <caption>history对象的属性和方法</caption>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                            <th>返回</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>back()</td>
                            <td>在浏览器历史中后退一步</td>
                            <td rowSpan="5">void</td>
                        </tr>
                        <tr>
                            <td>forward()</td>
                            <td>在浏览器历史中前进一步</td>
                        </tr>
                        <tr>
                            <td>go(index)</td>
                            <td>转到相对于当前文档的某个浏览历史位置。正值是前进，负值是后退</td>
                        </tr>
                        <tr>
                            <td>pushState(state, title, url)</td>
                            <td>向浏览器历史添加一个条目</td>
                        </tr>
                        <tr>
                            <td>replaceState(state, title, url)</td>
                            <td>替换浏览器历史中的当前条目</td>
                        </tr>
                        <tr>
                            <td>length</td>
                            <td>返回浏览器历史中的项目数目</td>
                            <td>数值</td>
                        </tr>
                        <tr>
                            <td>state</td>
                            <td>返回浏览器历史中关联当前文档的状态数据</td>
                            <td>对象</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_8_2">
                    <button id="back" onClick={this.handleHistory}>Back</button>
                    <button id="forward" onClick={this.handleHistory}>Forward</button>
                    <button id="go" onClick={this.handleHistory}>Go</button>
                    <button id="length">history.length</button>
                </div>
            </div>
        );
    };
    handleDocument1(){
        console.log("document.URL: " + document.URL);
        console.log("document.cookie: " + document.cookie);
        console.log("document.domain: " + document.domain);
        console.log("文档的最后修改时间: " + document.lastModified);
        console.log("获取或设置文档URL的端口部分：" + document.location.port);
        console.log("获取或设置文档URL的查询（问号串）部分：" + document.location.search);
        console.log("获取或设置文档URL的锚（井号串）部分：" + document.location.hash);
        console.log("导航到指定的URL上: document.location.assign(URL)");
        console.log("清除当前文档病导航到URL所指定的那个文档：document.location.replace(URL)");
        document.location.replace('http://www.mi.com');
    };
    handleCookie(event){
        console.log(event.target.innerText);
        const obj = document.getElementById("demo_2_2");
        readCookie();
        function readCookie(){
            obj.innerHTML = document.cookie;
        }
        if(event.target.innerText.match(/Add/g)){
            cookieCount++;
            document.cookie = "Cookie_" + cookieCount + "=Value_" + cookieCount + ";max-age=10";
            readCookie();
            return;
        }
        document.cookie = "Cookie_" + cookieCount + "=Updated_" + cookieCount + ";max-age=10";
        readCookie();
    };
    handleClick(){
        var elems = document.querySelectorAll("#demo_3_2 p, #demo_3_2 div#demo");
        console.log(elems.length);
    };
    handleNodes(e){
        var results = document.getElementById("results");
        var element = document.body;
        if(e.target.id === "parent" && element !== document.body){
            element = element.parentNode;
        }
        else if(e.target.id === "child" && element.hasChildNodes()){
            element = element.firstChild;
        }
        else if(e.target.id === 'prev' && element.previousSibling){
            element = element.previousSibling;
        }
        else if(e.target.id === "next" && element.nextSibling){
            element = element.nextSibling;
        }
        results.innerHTML = element;
    };
    getWindows(){
        document.getElementById("oWidth").innerText = document.defaultView.outerWidth;
        document.getElementById("oHeight").innerText = document.defaultView.outerHeight;
    };
    windowInfo(){
        var elements = document.getElementsByClassName("res");
        elements[0].innerText = window.outerWidth;
        elements[1].innerText = window.outerHeight;
        elements[2].innerText = window.innerWidth;
        elements[3].innerText = window.innerHeight;
        elements[4].innerText = window.screen.width;
        elements[5].innerText = window.screen.height;
    };
    windowFunc(event){
        var currentId = event.target.id;
        if(currentId === 'scrollBy'){
            window.scrollBy(0, 100);
        }
        else if(currentId === 'print'){
            window.print();
        }
        else if(currentId === 'close'){
            window.close();
        }
        else if(currentId === 'scrollTo'){
            window.scrollTo(0, 0);
        }
    };
    alertUser(event){
        var theId = event.target.id;
        if(theId === "alert"){
            window.alert("向用户显示一个对话框窗口并等待其被关闭");
        }
        else if(theId === 'confirm'){
            window.confirm("显示一个带有确认和取消提示的对话框窗口");
        }
        else if(theId === 'prompt'){
            window.prompt('显示对话框提示用户输入一个值', "hello");
        }
        else if(theId === 'showModalDialog'){
            window.showModalDialog('http://www.mi.com');
        }
    };
    handleHistory(event){
        var thisId = event.target.id;
        if(thisId === 'back'){
            window.history.back();
        }
        else if(thisId === 'forward'){
            window.history.forward();
        }
        else if(thisId === 'go'){
            window.history.go(-1);
        }
        else if(thisId === 'length'){
            console.log(window.history.length);
        }
    }
}

export default UnderstandDOM;