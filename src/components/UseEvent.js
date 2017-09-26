import React, {Component} from 'react';

class UseEvent extends Component{
    render(){
        return (
            <div>
                <h2>使用事件</h2>
                <h3>1. 内联事件</h3>
                <div id="demo_1_5">
                    <p id="demo_1_5_p" onMouseOver={this.onMouseOverHandle}>
                        There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    </p>
                </div>
                <table>
                    <caption>Event对象的函数和属性</caption>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>说明</th>
                            <th>返回</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>type</td>
                            <td>事件的名称</td>
                            <td>字符串</td>
                        </tr>
                        <tr>
                            <td>target</td>
                            <td>事件指向的元素</td>
                            <td>HTMLElement</td>
                        </tr>
                        <tr>
                            <td>currentTarget</td>
                            <td>带有当前被处罚事件监听器的元素</td>
                            <td>HTMLElement</td>
                        </tr>
                        <tr>
                            <td>eventPhase</td>
                            <td>事件生命周期的阶段</td>
                            <td>数值</td>
                        </tr>
                        <tr>
                            <td>bubbles</td>
                            <td>如果事件会在文档里冒泡则返回true，否则返回false</td>
                            <td>布尔值</td>
                        </tr>
                        <tr>
                            <td>cancelable</td>
                            <td>如果事件带有可撤销的默认行为则返回true，否则返回false</td>
                            <td>布尔值</td>
                        </tr>
                        <tr>
                            <td>timeStamp</td>
                            <td>事件的创建时间，如果时间不可用则为0</td>
                            <td>字符串</td>
                        </tr>
                        <tr>
                            <td>stopPropagation()</td>
                            <td>在当前元素的事件监听器被触发后终止事件在元素树种的流动</td>
                            <td>void</td>
                        </tr>
                        <tr>
                            <td>stopImmediatePropagation()</td>
                            <td>立即终止事件在元素树种的流动。当前元素上未被触发的事件监听器会被忽略</td>
                            <td>void</td>
                        </tr>
                        <tr>
                            <td>preventDefault()</td>
                            <td>防止浏览器执行与事件相关的默认操作</td>
                            <td>void</td>
                        </tr>
                        <tr>
                            <td>defaultPrevented</td>
                            <td>如果调用过preventDefault()返回true</td>
                            <td>布尔值</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };
    onMouseOverHandle(){
        var obj = document.getElementById('demo_1_5_p');
        obj.style.background = "orangered";
        obj.style.color = "white";
    };
}

export default UseEvent;