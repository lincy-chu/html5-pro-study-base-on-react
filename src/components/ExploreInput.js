import React, {Component} from 'react';

class ExploreInput extends Component {
    render(){
        return (
            <div>
                <h2>定制input元素</h2>
                <h3>1.用input元素输入文字</h3>
                <p>maxlength属性设定用户能够设定用户输入的字符的最大数目，size属性则设定了文本框能够显示的字符数目。二者的字符数目均已以整数表示。</p>
                <p><input type="text" maxLength="10" size="5"/></p>
                <h3>2.使用数据列表</h3>
                <p>可以将input元素的list属性设置为一个datalist元素的id属性值，这样用于在文本框输入数据时值只需要从这一元素提供的一批选择项中选择就是了。</p>
                <p>datalist元素是HTML5中新增的，它可以用来提供一批值，以便帮助用户输入需要的数据。不同类型的input元素使用datalist元素的方式略有差异。对于text型的input元素，datalist元素提供的值以自动补全建议值的方式呈现。提供给用户选择的值各用一个option元素指定。</p>
                <input type="text" list="datalist1" />
                <datalist id="datalist1">
                    <option value="Apple" label="Lovely Apples"/>
                    <option value="Orange" label="最爱的橙子"/>
                    <option value="Cherry" label="真的很不错"/>
                </datalist>
                <h3>生成只读或被禁用的文本框</h3>
                <p>readonly和disabled属性都可以用来生成用户不能编辑的文本框，其结果的外观不同。</p>
                <p><input type="text" value="lincy chu" disabled/></p>
                <p><input type="text" value="lincy chu" readOnly/></p>
                <h3>用input元素为输入数据把关</h3>
                <ol>
                    <li>type属性设置为number的input元素生成的输入框只接受数值。</li>
                    <li>type属性设置为range的input元素，只能用它从事先规定的范围内选择一个数值。range型input元素只支持的属性与number型相同。</li>
                    <li>type属性设置为checkbox的input元素，会生成供用户选择是或否的复选框</li>
                    <li>type属性设置为radio的input元素，生辰一组固定选项。</li>
                    <li>type属性设置为email、tel和url的input元素能接受的输入数据分别为有效的电子邮箱地址、电话号码和URL。</li>
                    <li>type属性设置为date，获取本地日期。</li>
                    <li>type属性设置为month，获取年月信息。</li>
                    <li>type属性设置为hidden，生成隐藏的数据项。</li>
                </ol>
                <p>number: <input type="number" max="10" min="0" step="1" defaultValue="0"/></p>
                <p>range:  0<input type="range" max="100" min="0" step="1" defaultValue="37"/>100</p>
                <p>checkbox: <label htmlFor="selectMe"><input type="checkbox" id="selectMe"/>&nbsp;选我</label></p>
                <fieldset>
                    <legend>Vote for your favorite fruit</legend>
                    <label htmlFor="apple" style={{padding: '5px'}}>
                        <input type="radio" value="apple" id="apple" name='fave'/>&nbsp;Apple
                    </label>
                    <label htmlFor="orange" style={{padding: '5px'}}>
                        <input type="radio" value="orange" id="orange" name="fave"/>&nbsp;orange
                    </label>
                    <label htmlFor="cherry" style={{padding: '5px'}}>
                        <input type="radio" value="cherry" id="cherry" name="fave"/>&nbsp;cherry
                    </label>
                </fieldset>
                <p><label htmlFor="email">Email: <input type="email" id="email" required/></label></p>
                <p><label htmlFor="tel">Tel: <input type="tel" id="tel"/></label></p>
                <p><label htmlFor="url">URL: <input type="url" id="url" name="url"/></label></p>
                <p><label htmlFor="datetime">datetime: <input type="date" id="datetime"/></label></p>
                <p>获取日期：<input type="month"/></p>
                <p>获取时间：<input type="time"/></p>
                <p>获取当前星期：<input type="week"/></p>
                <p>color: <input type="color"/></p>
                <p>search: <input type="search"/></p>
                <p>file: <input type="file" multiple/></p>
            </div>
        );
    }
}

export default ExploreInput;