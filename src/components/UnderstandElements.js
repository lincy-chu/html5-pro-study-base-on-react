import React, {Component} from 'react';

class UnderstandElements extends Component {
    render(){
        return (
            <div>
                <h2>使用DOM元素</h2>
                <h3>1. 使用元素对象</h3>
                <table>
                    <caption>元素数据属性</caption>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>返回</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>checked</td>
                            <td>获取或设置checked属性是否存在</td>
                            <td>布尔值</td>
                        </tr>
                        <tr>
                            <td>classList</td>
                            <td>获取或设置元素所属的类列表</td>
                            <td>DOMTokenList</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>获取或设置元素所属的类列表</td>
                            <td>字符串</td>
                        </tr>
                        <tr>
                            <td>dir</td>
                            <td>获取或设置元素dir属性的值</td>
                            <td>字符串</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>获取或设置disabled属性是否存在</td>
                            <td>布尔值</td>
                        </tr>
                        <tr>
                            <td>hidden</td>
                            <td>获取或设置hidden属性是否存在</td>
                            <td>布尔值</td>
                        </tr>
                        <tr>
                            <td>spellcheck</td>
                            <td>获取或设置spellcheck属性是否存在</td>
                            <td>布尔值</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_1_3">
                    <p id="textblock" dir="ltr" lang="en-US" disabled>
                        There are lots of different kinds of fruit - there are over 500 varieties of <span id="banana">banana</span> alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    </p>
                    <p id="results"></p>
                    <button onClick={this.getInfoOfElement}>获取元素信息</button>
                </div>
                <table>
                    <caption>DOMTokenList的成员</caption>
                    <thead>
                        <tr>
                            <th>成员</th>
                            <th>说明</th>
                            <th>返回</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>add(class)</td>
                            <td>给元素添加指定的类</td>
                            <td>void</td>
                        </tr>
                        <tr>
                            <td>contains(class)</td>
                            <td>如果元素属于指定的类就返回true</td>
                            <td>布尔值</td>
                        </tr>
                        <tr>
                            <td>length</td>
                            <td>返回元素所属类的数量</td>
                            <td>数值</td>
                        </tr>
                        <tr>
                            <td>remove(class)</td>
                            <td>从元素上移除指定的类</td>
                            <td>void</td>
                        </tr>
                        <tr>
                            <td>toggle(class)</td>
                            <td>如果类不存在就添加它，如果存在就移除它</td>
                            <td>布尔值</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_2_3">
                    <p id="textblock" className="fruit numbers">
                        There are lots of different kinds of fruit - there are over 500 varieties of <span id="banana">banana</span> alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    </p>
                    <p id="results_1"></p>
                    <button id="toggle" onClick={this.handleToggle}>toggle</button>
                </div>
                <h4>1.1 使用元素属性</h4>
                <p>HTMLElement对象既有一些属性来对应重要的HTML全局属性，又支持对单个元素的任意属性进行读取和设置。</p>
                <table>
                    <caption>与HTML属性相关的属性和方法</caption>
                    <thead>
                        <tr>
                            <th>成员</th>
                            <th>说明</th>
                            <th>返回</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>attributes</td>
                            <td>返回应用到元素上的属性</td>
                            <td>Attr[]</td>
                        </tr>
                        <tr>
                            <td>dataset</td>
                            <td>返回以data-开头的属性</td>
                            <td>字符串数组[&lt;name&gt;]</td>
                        </tr>
                        <tr>
                            <td>getAttribute(name)</td>
                            <td>返回指定属性的值</td>
                            <td>字符串</td>
                        </tr>
                        <tr>
                            <td>hasAttribute(name)</td>
                            <td>如果元素带有指定的属性则返回true</td>
                            <td>布尔值</td>
                        </tr>
                        <tr>
                            <td>removeAttribute(name)</td>
                            <td>从元素上移除指定属性</td>
                            <td>void</td>
                        </tr>
                        <tr>
                            <td>setAttribute(name, value)</td>
                            <td>应用一个指定名称和值的属性</td>
                            <td>void</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_3_3">
                    <p id="textblock_2" className="fruit numbers" lang="eb-us" data-index="1">
                        There are lots of different kinds of fruit - there are over 500 varieties of <span id="banana">banana</span> alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    </p>
                    <p id="results_2"></p>
                    <button id="getElementProperty" onClick={this.getElementProperty}>获取元素的属性</button>
                </div>
                <h4>1.2 使用Text对象</h4>
                <p>元素的文本内容是由Text对象代表的，它在文档模型里表现为元素的子对象。如果一个元素拥有多个子对象且它们都包含文本，那么这些对象都会以同样的方式进行处理。</p>
                <table>
                    <caption>Text对象的成员</caption>
                    <thead>
                        <tr>
                            <th>成员</th>
                            <th>说明</th>
                            <th>返回</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>appendData(string)</td>
                            <td>把指定字符串附加到文本块的末尾</td>
                            <td>void</td>
                        </tr>
                        <tr>
                            <td>data</td>
                            <td>获取或设置文本</td>
                            <td>字符串</td>
                        </tr>
                        <tr>
                            <td>deleteData(offset, count)</td>
                            <td>从文本中移除字符串。第一个数字是偏移量，第二个是要移除的字符数量</td>
                            <td>void</td>
                        </tr>
                        <tr>
                            <td>insertData(offset, string)</td>
                            <td>在指定偏移量处插入指定字符串</td>
                            <td>void</td>
                        </tr>
                        <tr>
                            <td>length</td>
                            <td>返回字符的数量</td>
                            <td>数值</td>
                        </tr>
                        <tr>
                            <td>replaceData(offset, count, string)</td>
                            <td>用指定字符串替换一段文本</td>
                            <td>void</td>
                        </tr>
                        <tr>
                            <td>replaceWholeText(string)</td>
                            <td>替换全部文本</td>
                            <td>Text</td>
                        </tr>
                        <tr>
                            <td>splitText(number)</td>
                            <td>将现有的text元素在指定偏移量处一分为二</td>
                            <td>Text</td>
                        </tr>
                        <tr>
                            <td>substringData(offset, count)</td>
                            <td>返回文本的子串</td>
                            <td>字符串</td>
                        </tr>
                        <tr>
                            <td>wholeText</td>
                            <td>获取文本</td>
                            <td>字符串</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_4_3">
                    <p id="textblock_4">
                        There are lots of different kinds of fruit - there are over <b id="textblock_4_1">500</b> varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    </p>
                    <p id="results_4"></p>
                    <button id="pressme" onClick={this.getText}>pressme</button>
                </div>
                <h4>1.3 修改模型</h4>
                <p>可以按照任何你想要的方式添加、移除和复制元素。具体而言就是改动DOM的层级结构，因为连接是实时的，所以你对层级结构所做的改动会立即反映到浏览器中。</p>
                <table>
                    <caption>DOM操纵成员</caption>
                    <thead>
                        <tr>
                            <th>成员</th>
                            <th>说明</th>
                            <th>返回</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>appendChild(HTMLElement)</td>
                            <td>将制定元素添加到当前元素的子元素</td>
                            <td>HTMLElement</td>
                        </tr>
                        <tr>
                            <td>cloneNode(boolean)</td>
                            <td>复制一个元素</td>
                            <td>HTMLElement</td>
                        </tr>
                        <tr>
                            <td>compareDocumentPosition(HTMLElement)</td>
                            <td>判断一个元素的相对位置</td>
                            <td>数值</td>
                        </tr>
                        <tr>
                            <td>innerHTML</td>
                            <td>获取或设置元素的内容</td>
                            <td>数值</td>
                        </tr>
                        <tr>
                            <td>insertAjacentHTML(pos, text)</td>
                            <td>相对于元素插入HTML</td>
                            <td>void</td>
                        </tr>
                        <tr>
                            <td>insertBefore(newElem, childElem)</td>
                            <td>在第二个（子）元素之前插入第一个子元素</td>
                            <td>HTMLElement</td>
                        </tr>
                        <tr>
                            <td>isEqualNode(HTMLElememt)</td>
                            <td>判断指定元素是否与当前元素相同</td>
                            <td>布尔值</td>
                        </tr>
                        <tr>
                            <td>isSameNode(HTMLElement)</td>
                            <td>判断指定元素是否就是当前元素</td>
                            <td>布尔值</td>
                        </tr>
                        <tr>
                            <td>outerHTML</td>
                            <td>获取或设置某个元素的HTML和内容</td>
                            <td>字符串</td>
                        </tr>
                        <tr>
                            <td>removeChild(HTMLElement)</td>
                            <td>从当前元素上移除指定的子元素</td>
                            <td>HTMLElement</td>
                        </tr>
                        <tr>
                            <td>replaceChid(HTMLElement, HTMLElement)</td>
                            <td>替换当前元素的某个子元素</td>
                            <td>HTMLElement</td>
                        </tr>
                    </tbody>
                </table>
                <p>这些属性和方法对所有对象都是可用的。另外，document对象定义了两个允许你创建新元素的方法。</p>
                <table>
                    <caption>DOM操纵成员</caption>
                    <thead>
                        <tr>
                            <th>成员</th>
                            <th>说明</th>
                            <th>返回</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>createElement(tag)</td>
                            <td>创建一个属于指定标签类型的新HTMLElement对象</td>
                            <td>HTMLElement</td>
                        </tr>
                        <tr>
                            <td>createTextNode(text)</td>
                            <td>创建一个带有指定内容的新Text对象</td>
                            <td>text</td>
                        </tr>
                    </tbody>
                </table>
                <h5>1.3.1 创建和删除元素</h5>
                <div id="demo_5_3">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Color</th>
                            </tr>
                        </thead>
                        <tbody id="fruitsBody">
                            <tr>
                                <td>Banana</td>
                                <td>Yellow</td>
                            </tr>
                            <tr>
                                <td>Aplle</td>
                                <td>Red/Green</td>
                            </tr>
                        </tbody>
                    </table>
                    <button id="addElement" onClick={this.handleCreate}>添加元素</button>
                    <button id="removeElement" onClick={this.handleCreate}>移除元素</button>
                </div>
                <h5>1.3.1 复制元素</h5>
                <p>可以使用cloneNode方法来复制现有的元素。这个方法有时候很方便，因为它允许你不必从头爱是创建想要的元素。</p>
                <div id="demo_6_3">
                    <table>
                        <thead>
                            <tr>
                                <th>Multiply</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody id="fruitsBody_1">
                            <tr>
                                <td className="sum">1 * 1</td>
                                <td className="res">1</td>
                            </tr>
                        </tbody>
                    </table>
                    <button id="cloneElement" onClick={this.handleClone}>复制元素</button>
                </div>
                <h5>1.3.2 移动元素</h5>
                <p>要把元素从文档的一处移到另一处，需要做的仅仅是把待移动的元素关联到新的父元素上，而不需要让该元素脱离它的初始位置。</p>
                <div id="demo_7_3">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Color</th>
                            </tr>
                        </thead>
                        <tbody id="fruitsBody_2">
                            <tr>
                                <td>Banana</td>
                                <td>Yellow</td>
                            </tr>
                            <tr id="apple">
                                <td>Apple</td>
                                <td>Red/Green</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>Fruit</th>
                                <th>Color</th>
                            </tr>
                        </thead>
                        <tbody id="fruitsBody_3">
                            <tr>
                                <td>Plum</td>
                                <td>Purple</td>
                            </tr>
                        </tbody>
                    </table>
                    <button id="moveElement" onClick={this.handleMove}>移动元素</button>
                </div>
                <h5>1.3.3 插入HTML片段</h5>
                <p>如果想要用HTML片段来插入新元素，就必须使用insertAdjacentHTML方法。这个方法需要两个参数，第一个是定位参数值，第二个参数是要插入的片段。</p>
                <table>
                    <caption>insertAdjacentHTML方法的定位参数值</caption>
                    <thead>
                        <tr>
                            <th>值</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>afterbegin</td>
                            <td>将片段作为当前元素的第一个子元素插入</td>
                        </tr>
                        <tr>
                            <td>afterend</td>
                            <td>将片段插入当前元素之后</td>
                        </tr>
                        <tr>
                            <td>beforebegin</td>
                            <td>将片段插入当前之前</td>
                        </tr>
                        <tr>
                            <td>beforeend</td>
                            <td>将片段作为当前元素的最后一个子元素插入</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_8_3">
                    <table>
                        <thead>
                            <tr>
                                <th>Fruit</th>
                                <th>Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="targetrow">
                                <td>Placerholder</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        <button id="ab" onClick={this.insertAdjacentHTML}>After Begin</button>
                        <button id="ae" onClick={this.insertAdjacentHTML}>After End</button>
                        <button id="bb" onClick={this.insertAdjacentHTML}>Before Begin</button>
                        <button id="be" onClick={this.insertAdjacentHTML}>Before End</button>
                    </p>
                </div>

            </div>
        );
    };
    getInfoOfElement(){
        var res = document.getElementById("results");
        var ele = document.getElementById("textblock");
        res.innerHTML = "";
        res.innerHTML += "tag: " + ele.tagName + '\n';
        res.innerHTML += "id: " + ele.id + "\n";
        res.innerHTML += "dir: " + ele.dir + "\n";
        res.innerHTML += "lang: " + ele.lang + "\n";
        res.innerHTML += "hidden: " + ele.hidden + "\n";
        res.innerHTML += "disabled: " + ele.disabled + "\n";
    };
    handleToggle(){
        var res = document.getElementById('results_1');
        listClass();
        toggle();
        function toggle(){
            document.getElementById('textblock').classList.toggle('newclass');
            listClass();
        }
        function listClass(){
            var classlist = document.getElementById("textblock").classList;
            res.innerHTML = "Current classes: ";
            for(var i = 0; i < classlist.length; i++){
                res.innerHTML += classlist[i] + " ";
            }
        }
    };
    getElementProperty(){
        var res = document.getElementById("results_2");
        var elem = document.getElementById("textblock_2");
        res.innerHTML = "Element has lang attribute: " + elem.hasAttribute('lang') + '\n';
        res.innerHTML = "Adding lang attribute\n";
        elem.setAttribute('lang', 'chinese');
        res.innerHTML += "Attr value is: " + elem.getAttribute('lang') + '\n';
        res.innerHTML += "data-" + elem.dataset;
        console.log(elem.attributes);
        console.log(elem.attributes.id);
    };
    getText(){
        var res = document.getElementById("results_4");
        var ele = document.getElementById("textblock_4_1");
        var textElem = ele.firstChild;
        console.log(textElem);
        console.log(textElem.data);
        res.innerHTML += "The element has " + textElem.length + " chars \n";
        res.innerHTML += "Text: " + textElem.data + "\n";
        textElem.deleteData(0, 3);
        textElem.appendData("么么哒");
        res.innerHTML += "Text: " + textElem.data + "\n";
        textElem.insertData(0, "😆");
        res.innerHTML += "Text: " + textElem.data + "\n";

    };
    handleCreate(event){
        var tableBody = document.getElementById("fruitsBody");
        if(event.target.id === 'addElement'){
            var row = tableBody.appendChild(document.createElement('tr'));
            row.setAttribute('id', 'newRow');
            row.appendChild(document.createElement('td')).appendChild(document.createTextNode("Plum"));
            row.appendChild(document.createElement('td')).appendChild(document.createTextNode("Purple"));
        }
        else{
           if(row){
               row.parentNode.removeChild(row);
           }
        }
    };
    handleClone(event){
        var tableBody = document.getElementById("fruitsBody_1");
        var count = tableBody.getElementsByTagName("tr").length + 1;
        var newEle = tableBody.getElementsByTagName('tr')[0].cloneNode(true);
        newEle.getElementsByClassName('sum')[0].firstChild.data = count + " * " + count;
        newEle.getElementsByClassName('res')[0].firstChild.data = count * count;
        tableBody.appendChild(newEle);
    };
    handleMove(event){
        var ele = document.getElementById("apple");
        document.getElementById('fruitsBody_3').appendChild(ele);
    }
    insertAdjacentHTML(event){
        var target = document.getElementById('targetrow');
        var id = event.target.id;
        if(id === 'ab'){
            target.insertAdjacentHTML("afterbegin", "<td>After Begin</td>");
        }
        else if(id === 'be'){
            target.insertAdjacentHTML("beforeend", "<td>Before End</td>");
        }
        else if(id === 'bb'){
            target.insertAdjacentHTML("beforebegin", "<td>Before Begin</td>")
        }
        else{
            target.insertAdjacentHTML("afterend", "<td>After End</td>");
        }
    }

}

export default UnderstandElements;