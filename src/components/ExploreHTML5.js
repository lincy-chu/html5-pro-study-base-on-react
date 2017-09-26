import React, {Component} from 'react';

class ExploreHTML5 extends Component{
    render(){
        return (
            <div>
                <h2 id="title">HTML5初探</h2>
                <h3>base元素</h3>
                <p>base元素可用来设置一个基准URL，让HTML文档中的相对链接在此基础上进行解析。相对于链接省略了URL中的协议、主机和端口部分需要根据别的URL得出其完整形式。base元素还能设定链接在用户点击时打开方式，以及提交表单时浏览器如何反应。</p>
                <h3>style元素</h3>
                <p>如果style元素中scoped属性存在，那么其中定义的样式只作用于该元素的父元素及所有兄弟元素。</p>
                <h3>a原生生成内部超链接</h3>
                <p>超链接也可以用来将同一文档中的另一个元素移入视野。为此需要用到形如CSS中针对目标元素的ID选择器的表达式：#&lt;id&gt;</p>
                <p>Your can see the title I like <a href="#title">title</a> here</p>
                <h3>em元素表示对一段文字的强调，还可以用来想读者提供关于句子或段落含义的一种语境。</h3>
                <p><em>I</em> like <b>apples</b> and oranges.</p>
                <h3>s元素用来表示一段文字不在正确或者错误。</h3>
                <p><s>哈哈哈</s></p>
                <p><strong>strong表示重要的文字</strong></p>
                <h3>为文字添加下划线</h3>
                <p>u元素让文字从周围中凸显出来，但并不表示强调或其重要性有所增加。u元素以前只有呈现方便的作用（为文字加下划线），没有实际的语义。实际上这仍是一个呈现性的元素，其效果是问文字添加下划线。</p>
                <h3>small元素</h3>
                <p>small元素表示小号字体内容，常用于免责声明和澄清声明。</p>
                <p>Oranges at my local store are $1 each <small>(plus tat).</small></p>
                <h3>添加上标和下标</h3>
                <p>sub和sup元素分别用于表示下标和上标。有些语言需要用到上标，而在数学中，一个简单的表达式也会用到上标和下标。</p>
                <p>3<sup>2</sup> + 5<sup>2</sup> = 34</p>
                <p>x<sub>1</sub> + y<sub>1</sub> = 5</p>
                <h3>wbr</h3>
                <p>wbr指明可以安全换行的建议位置。wbr元素是HTML5中新增的，用来表示长度超过当前浏览器窗口的内容适合在此换行，究竟换不换行由浏览器决定。wbr元素只不过是对恰当的换行位置的建议而已。</p>
                <h3>表示输入和输出</h3>
                <p>有四个元素暴露了HTML的极客起源，它们代表的是计算机的输入和输出。</p>
                <ul>
                    <li>code 表示计算机代码片段</li>
                    <li>var 在编程环境中表示变量，也可以表示一个供读者在想象中插入一个指定值的占位符</li>
                    <li>samp 表示程序或计算机系统的输出</li>
                    <li>kbd 表示用户输入</li>
                </ul>
                <p><code>var fruits = ["apple", "orange", "mango", "cherry"]</code></p>
                <p>The variable in the example is <var>fruits</var></p>
                <p>The output from the code is: <samp>I like 4 fruits</samp></p>
                <p>When prompted for my favorite fruit, I typed: <kbd>cherries.</kbd></p>
                <h3>使用标题引用、引文、定义和缩写</h3>
                <p>abbr元素用来表示缩写，其title属性表示的是该缩写所代表的完整词语。</p>
                <p>The <abbr title="Florida Department of Citrus">FDOC</abbr> regulates the Florida citrus industry.</p>
                <p>dfn元素表好似定义中的术语，也即在用来解释一个词的含义的句子中的词（短语）。</p>
                <p>The <dfn title="apple">apple</dfn> is the pomaceous fruit of the apple tree.</p>
                <p>q元素表示引自他处的内容。</p>
                <p><q cite="http://en.wikipedia">The <dfn title="apple">apple</dfn> is the pomaceous fruits of the apple tree.</q></p>
                <p>cite元素表示所引用作品（如图书、文章、电影和诗歌）的标题。</p>
                <p>My favorite book on fruits is <cite>Fruit: Edible, Inedible, Incredible</cite> by Stuppy & Kesseler.</p>
                <h3>使用语言元素</h3>
                <p>注音符号（ruby character）是用来帮助读者掌握表意语言（如汉语和日语）文字正确发音的符号，位于这些文字上方或右方。ruby元素表示一段包含拼音符号的文字。ruby元素需要与rt元素和rp元素搭配使用。rt元素用来标记注音符号，rp元素则用来标记供不支持注音符号特性的浏览器显示在注音符号前后的括号。</p>
                <p>
                    <ruby>魑<rp>(</rp><rt>chī</rt><rp>)</rp></ruby>
                    <ruby>魅<rp>(</rp><rt>mèi</rt><rp>)</rp></ruby>
                    <ruby>魍<rp>(</rp><rt>wǎng</rt><rp>)</rp></ruby>
                    <ruby>魉<rp>(</rp><rt>liǎng</rt><rp>)</rp></ruby>
                </p>
                <h3>bdo元素</h3>
                <p>bdo元素可以用来撇开默认的文字方向设置，明确地确定其内容中文字的方向。使用bdo元素必须加上dir属性。</p>
                <p>This is left-to-right: <bdo dir="ltr">I like oranges</bdo></p>
                <p>This is right-to-left: <bdo dir="rtl">I like oranges</bdo></p>
                <h3>bdi元素</h3>
                <p>bdi元素表示一段出于文字方向考虑而与其他内容隔开来的文字。</p>
                <p>阿拉伯语：<bdi>عربية‎ لغة</bdi></p>
                <h3>突出显示文本</h3>
                <p>mark元素是HTML5中新增的，用来表示因为与某段上下文相关而被突出显示的一段文字。</p>
                <p>I would like a <mark>pair</mark> of <mark>pears</mark></p>
                <h3>表示添加和删除的内容</h3>
                <p>ins元素和del元素可以分别用来表示文档中添加和删除的文字。</p>
                <p><del>I can <mark>sea</mark> the <mark>see</mark></del></p>
                <p><ins>I can <mark>sea</mark> the <mark>see</mark></ins></p>
                <h3>表示时间和日期</h3>
                <p>I bought it at <time dateTime="15:00">3 o'clock</time></p>
                <p>on <time dateTime="1988-12-08">December 8th</time></p>
            </div>
        );
    }
}

export default ExploreHTML5;