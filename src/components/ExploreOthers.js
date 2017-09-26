import React, {Component} from "react";

class ExploreOthers extends Component{
    Calculator(event){
        console.log(event);
    };
    render(){
        return (
            <div>
                <h2>其他表单元素及输入验证</h2>
                <h3>使用其他表单元素</h3>
                <p>
                    <select id="fave" defaultValue="Pear">
                        <option value="Apple">Apple</option>
                        <option value="Orange">Orange</option>
                        <option value="Cherry">Cherry</option>
                        <option value="Pear">Pear</option>
                    </select>
                </p>
                <p>select的size属性可让select元素显示多个选项，设置multiples属性则可让用户一次选择多个选项。</p>
                <select id="fave1" size="3" multiple>
                    <option value="Apple">Apple</option>
                    <option value="Orange">Orange</option>
                    <option value="Cherry">Cherry</option>
                    <option value="Pear">Pear</option>
                </select>
                <h3>在select元素中建立解构</h3>
                <p>optgroup元素可以用来在select元素的内容中建立一定的结构。</p>
                <select name="fave2" id="fave2">
                    <optgroup label="Top Choices">
                        <option value="apple" label="Apple">Apple</option>
                        <option value="orange" label="Orange">Orange</option>
                    </optgroup>
                    <optgroup label="Other Choices">
                        <option value="cherry" label="Cherry">Cherry</option>
                        <option value="pear" label="Pear">Pear</option>
                    </optgroup>
                </select>
                <h3>确保用户提供了一个值</h3>
                <p>最简单的输入验证是检查用户是否提供了一个值，这正是required属性的用途。</p>
                <form>
                    <label htmlFor="accept">
                        <input type="checkbox" required id="accept"/>
                        Accept Term & Conditions
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <h3>确保输入值与指定模式匹配</h3>
                <p>pattern属性可以用来确保输入值与一个正则表达式匹配。</p>
                <form>
                    <label htmlFor="name">
                        Name: <input type="text" id="name" pattern="^.*.*$"/>
                    </label>
                    <input type="submit"/>
                </form>
                <p>将pattern属性与email型input元素结合</p>
                <form>
                    <label htmlFor="email">
                        Email: <input type="email" required pattern=".*@live.cn$" id="email" name="email"/>
                    </label>
                    <input type="submit" value="提交"/>
                </form>
                <h3>禁用输入验证</h3>
                <p>要想不经输入验证就能提交表单，可以设置form元素的novalidate属性，也可以设置用来提交表单的button或input元素的formnovalidate属性。</p>
                <form>
                    <input type="text"/>
                    <input type="submit" formNoValidate/>
                </form>


            </div>
        );
    }
}

export default ExploreOthers;