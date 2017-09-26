import React, {Component} from "react";
class ExploreHTML extends Component{
    handleDataCreator(){
        var data_creator = document.getElementById('creator').getAttribute("data-creator");
        alert(data_creator);
    };
    handleGetClasses(){
        var obj = document.getElementsByClassName("class1")[0];
        alert(obj.getAttribute("class"));
    };
    handleChangeDir(event){
        var obj = document.getElementById('changeDir');
        var dirVal = obj.getAttribute('dir');
        if(dirVal){
            if(dirVal === 'ltr'){
                obj.setAttribute('dir', 'rtl');
                return;
            }
            obj.setAttribute('dir', 'ltr');
        }
    };
    handleHidden(event){
        event.preventDefault();
        var obj = document.getElementById('hidden');
        if(obj.getAttribute('hidden')){
            obj.removeAttribute("hidden");
            return;
        }
        obj.setAttribute("hidden", "hidden");
    };

    render(){
        return (
            <div>
                <h2>初探HTML</h2>
                <h3>使用自定义属性</h3>
                <p><input type="text" data-creator="lincy chu" id="creator"/><button onClick={this.handleDataCreator}>获取自定义属性值</button></p>
                <h3>使用accesskey属性</h3>
                <p>使用accesskey属性可以设定一个或多个用来选择页面上的元素的快捷键(alt + 快捷键)。</p>
                <form onSubmit={(e) => {e.preventDefault();}}>
                    Name: <input type="text" name="name" accessKey="n"/><br/>
                    Password: <input type="password" name="password" accessKey="p"/><br/>
                    <input type="submit" value="Log in" accessKey="s"/>
                </form>
                <h3>使用class属性</h3>
                <p className="class1 class2">获取class属性的值</p>
                <button onClick={this.handleGetClasses}>获取class属性的值</button>
                <h3>contenteditable属性</h3>
                <p>contenteditable是HTML5中新增的属性，其用途是让用户可以修改页面上的内容</p>
                <p><span contentEditable="true">视图修改我吧！</span></p>
                <h3>dir属性</h3>
                <p>dir属性用来规定元素中文字的方向。其有效值有两个：ltr（用于从左到右的文字）和rtl（用于从右到左的文字）</p>
                <p id="changeDir" dir="ltr" style={{width: '100%'}}>12345678</p>
                <button onClick={this.handleChangeDir}>修改上面段落的dir属性</button>
                <h3>使用hidden属性</h3>
                <p>hidden是个布尔值，表示相关元素被显示还是隐藏。</p>
                <p><span id="hidden">让我显示或隐藏吧</span><button onClick={this.handleHidden}>点我改变span的hidden值</button></p>
                <h3>spellcheck属性</h3>
                <p>spellcheck属性用来表明浏览器是否应该对元素的内容进行拼写检查。这个属性只有在用户可以编辑的元素上才有意义。</p>
                <textarea type="text" spellCheck="true" value="This is some mispelled text"></textarea>
                <h3>tabindex属性</h3>
                <p>HTML页面上的键盘焦点可以通过Tab键在钩各元素之间切换。用tabindex属性可以改变默认的转移顺序。</p>
                <form>
                    <label>
                        Name: <input type="text" tabIndex="1"/>
                    </label>
                    <br/>
                    <input type="radio" id="city" tabIndex="4"/>
                    <label htmlFor="city">上海</label>
                    <br/>
                    <input type="checkbox" id="area" tabIndex="3"/>
                    <label htmlFor="area">浦东新区</label>
                    <br/>
                    <label>
                        County: <input type="text" tabIndex="2"/>
                    </label>
                </form>
                <h3>title属性</h3>
                <p>title属性提供了元素的额外信息。浏览器通常用这些显示工具提示。</p>
                <a href="#" title="一个链接而已">鼠标移过来看看</a>
            </div>
        );
    }
}

export default ExploreHTML;