import React, {Component} from 'react';

class ExploreForm extends Component {
    render(){
        return (
            <div>
                <h2>表单</h2>
                <h3>input元素</h3>
                <form target="_blank">
                    <input type="text" autoFocus/>
                    <input type="text" autoComplete="on"/>
                    <input type="text" autoComplete="off"/>
                    <button>Submit Vote</button>
                </form>
                <p>label元素是为表单中的每个元素提供说明</p>
                <form>
                    <input type="checkbox" id="apple"/>
                    <label htmlFor="apple">
                        苹果
                    </label>
                    <input type="checkbox" id="banana"/>
                    <label htmlFor="banana">
                        香蕉
                    </label>
                </form>
                <p>禁用input</p>
                <form>
                    <input type="checkbox" id="apple1" disabled/>
                    <label htmlFor="apple1">
                        苹果
                    </label>
                    <input type="checkbox" id="banana1"/>
                    <label htmlFor="banana1">
                        香蕉
                    </label>
                </form>
                <h3>对表单元素编组</h3>
                <p>对于更为复杂的表单，有时需要将一些元素组织起来。fieldset元素有name、form、disabled属性。</p>
                <p>legend元素作为说明标签，必须为fieldset元素的第一个子元素。</p>
                <form>
                    <fieldset>
                        <legend>Enter Your Details</legend>
                        <p><label htmlFor="name">Name: <input type="text" id="name"/></label></p>
                        <p><label htmlFor="city">City: <input type="text" id="city"/></label></p>
                    </fieldset>
                    <fieldset>
                        <legend>Vote For You Three Favorite Fruits</legend>
                        <p><input type="checkbox" id="fave1"/><label htmlFor="fave1">香蕉</label></p>
                        <p><input type="radio" id="fave2"/><label htmlFor="fave2">芒果</label></p>
                        <p><input type="checkbox" id="fave3"/><label htmlFor="fave3">火龙果</label></p>
                    </fieldset>
                    <input type="submit" value="Submit Vote"/>
                </form>
                <p>用fieldset禁用整组input元素</p>
                <form>
                    <fieldset>
                        <legend>Enter Your Details</legend>
                        <p><label htmlFor="name1">Name: <input type="text" id="name1"/></label></p>
                        <p><label htmlFor="city1">City: <input type="text" id="city1"/></label></p>
                    </fieldset>
                    <fieldset disabled>
                        <legend>Vote For You Three Favorite Fruits</legend>
                        <p><input type="checkbox" id="fave11"/><label htmlFor="fave11">香蕉</label></p>
                        <p><input type="radio" id="fave21"/><label htmlFor="fave21">芒果</label></p>
                        <p><input type="checkbox" id="fave31"/><label htmlFor="fave31">火龙果</label></p>
                    </fieldset>
                    <input type="submit" value="Submit Vote"/>
                </form>
                <h3>button元素</h3>
                <p>如果将button元素的type属性设置为submit，那么按下按钮会提交包含它的表单这是未设置type属性的button元素的默认行为。</p>
                <form>
                    <label htmlFor="name_1">name: <input type="text" id="name_1"/></label>
                    <button type="submit" formAction="http://www.baidu.com" formMethod="post">提交</button>
                </form>
                <h3>button元素重置表单</h3>
                <form>
                    <input type="radio" id="apple_1"/>
                    <label htmlFor="apple_1">苹果</label>
                    <button type="reset">重置</button>
                </form>
                <h3>使用表单外的元素</h3>
                <p>input、button元素都定义了一个form属性，就是想与其非其祖先元素的form元素挂钩，只需将其form属性设置为相关form元素的id属性即可。</p>
                <form id="voteForm" action="http://www.mi.com" method="post" target="_blank">
                    <label htmlFor="">
                        name: <input type="text"/>
                    </label>
                </form>
                <button form="voteForm" type="submit">Submit Vote</button>
                <button form="voteForm" type="reset">Reset</button>

            </div>
        );
    }
}

export default ExploreForm;