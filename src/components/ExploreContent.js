import React, {Component} from "react";
import '../css/exploreContent.css';
class ExploreContent extends Component{
    render() {
        return (
            <div>
                <h2>组织内容</h2>
                <h3>引用他处内容</h3>
                <p>blockquote元素表示引自他处的一片内容。</p>
                <p><blockquote cite="http://www.baidu,com">百度是中国最大的搜索引擎！</blockquote></p>
                <h3>ol元素</h3>
                <p>ol有3个局部属性：1.start——用老设定的是列表首项的编号值。 2.type(可以为1, a, A, i, I)——用来设定显示在各列表旁的编号类型。 3.reversed——使用它则列表序号降序。</p>
                <ol start="5">
                    <li>苹果</li>
                    <li>香蕉</li>
                    <li>芒果</li>
                </ol>
                <ol type="I">
                    <li>苹果</li>
                    <li>香蕉</li>
                    <li>芒果</li>
                </ol>
                <ol reversed>
                    <li>苹果</li>
                    <li>香蕉</li>
                    <li>芒果</li>
                </ol>
                <h3>li元素</h3>
                <p>li元素允许具有的父元素有ul、ol、menu，局部属性为value(仅用于父元素为ol元素时)。</p>
                <ol>
                    <li>bananas</li>
                    <li value="5">mangoes</li>
                    <li>cherries</li>
                    <li value="8">plums</li>
                    <li>peaches</li>
                </ol>
                <h3>生成自定义列表</h3>
                <p>HTML对列表的支持不像看上去那么简单，实际上要灵活得多。结合CSS中的counter特性和:before选择器，可以用ul元素生成复杂的列表。</p>
                <p>I like apples and oranges.</p>
                <p>I also like: </p>
                <ul id="outerlist" style={{listStyleType: 'none'}}>
                    <li>banana</li>
                    <li>mango, including:</li>
                        <ul class="innerlist">
                            <li>Haden mango</li>
                            <li>Keitt mango</li>
                            <li>Kent mango</li>
                        </ul>
                    <li>cherries</li>
                    <li>
                        plums, including:
                        <ul className="innerlist">
                            <li>Elephant Heart plums</li>
                            <li>Stanley plums</li>
                            <li>Seneca plums</li>
                        </ul>
                    </li>
                </ul>
                <h3>使用插图</h3>
                <p>HTML5中这样定义插图(figure)："一个独立的内容单元，可带标题。通常作为一个整体被文档的主体引用，把它从文档主体中删除也不会影响文档的意思。"figure元素包含了一个figcaption元素，后者表示插图的标题。</p>
                <figure>
                    <figcaption>Listing 23. Using the code element</figcaption>
                    <code>
                        var fruits = ["apple", "orange", "mango", "cherry"];
                        document.writeIn("I like " + fruits.length + " fruits.");
                    </code>
                </figure>
            </div>
        );
    }
}

export default ExploreContent;