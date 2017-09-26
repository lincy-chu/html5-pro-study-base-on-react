import React, {Component} from "react";
import "../css/exploreParts.css";

class ExploreParts extends Component{
    render(){
        return (
            <div>
                <h2>文档分节</h2>
                <h3>隐藏子标题</h3>
                <p>hgroup元素可以用来讲几个标题元素作为一个整体，以免搅乱HTML文档的大纲。</p>
                <hgroup>
                    <h1>Welcome to my WWF</h1>
                    <h2>For a living planet</h2>
                </hgroup>
                <h3>生成节</h3>
                <p>section元素是HTML5中新增的。它表示的是文档中的一节。使用标题元素的时候实际上也生成了隐含的节。用section元素则可以明确地生成节并且将其与标题分来。至于什么情况下应该用section元素，并没有明确的规定。不过从经验上讲，section元素用来包含的是那种应该列入文档大纲或目录中的内容。section元素通常包含一个或多个段落及一个标题，不过标题并不是必须的。其父元素可以是任何可以包含流元素的元素，但section元素不能是address元素的后代元素。</p>
                <hgroup>
                    <h1>Fruit I Like</h1>
                    <h2>How I Learned to Love Citrus</h2>
                </hgroup>
                I like apples and oranges.
                <section>
                    <h1>Additional fruits</h1>
                    I also like bananas, mangoes, cherries
                    <section>
                        <h1>More Information</h1>
                        You can see other fruits I like it.
                    </section>
                </section>
                <h3>添加首部和尾部</h3>
                <p>header元素表示一节的首部，里面可以包含适合出现在首部的东西，包括刊头或徽标。在内嵌的元素方面，header元素通常包含一个标题元素或者一个hgroup元素，还可以包含该节的导航元素。header元素的父元素可以是任何包含流元素的元素，但不能是address、footer和其他header元素。footer元素是header元素的配套元素，表示一节的尾部。footer通常包含着该节的总结信息，还包括作者介绍、版权信息、到相关内容的链接、徽标及免责声明。footer的父元素可以是任何包含流元素的元素，但不能是address、header以及其他footer元素的后代元素。</p>
                <header>
                    <hgroup>
                        <h2>Things I Like</h2>
                        <h3>By lincy chu</h3>
                    </hgroup>
                </header>
                <section>
                    <header>
                        <h3>Activities I Like</h3>
                    </header>
                </section>
                <footer>
                    &#169; 2017, lincy chu.
                </footer>
                <h3>添加导航区域</h3>
                <p>nav元素表示文档中一个区域，它包含了到其他页面或同一页面的其他部分的链接。虽然，并非所有的超链接都要放到nav元素中。该元素的目的是规划文档中的主要导航区域。它不能是address元素的后代元素。</p>
                <nav>
                    <h1>content</h1>
                    <ul>
                        <li><a href="#">Fruits I Like</a></li>
                        <ul>
                            <li><a href="#">Additional Fruits</a></li>
                        </ul>
                        <li><a href="#">Activities I Like</a></li>
                        <ul>
                            <li><a href="#">Kinds of Me</a></li>
                            <li><a href="#">The Kind of triathlon I am aiming for</a></li>
                        </ul>
                    </ul>
                </nav>
                <nav>
                    More Information:
                    <a href="#">Learn More About Fruit</a>
                    <a href="#">Learn More About People</a>
                </nav>
                <h3>使用article</h3>
                <p>article元素代表HTML文档中一段独立成篇的内容，从理论上讲，可以独立于页面其它内容发布或者使用（通过RSS）。这不是说作者必须单独发布它，而是说判断是否使用该元素时要以独立性为依据。</p>
                <article>
                    <header>
                        <h3>article header</h3>
                    </header>
                    <section>
                        <p>I like to swim, cycle and run. I am in training for my first triathlon, but it is hard work.</p>
                        <section>
                            <h4>The kind of triathlon I am aiming for</h4>
                            I am aiming for Olympic, which consists of the following:
                            <ol>
                                <li>1.5km swim</li>
                                <li>40km cycle</li>
                                <li>10km run</li>
                            </ol>
                        </section>
                    </section>
                    <footer>
                        <nav>
                            More Information: <a href="#">Learn More About Triathlon</a>
                        </nav>
                    </footer>
                </article>
                <footer>
                    &#169; 2017, lincy chu
                </footer>
                <h3>生成附注栏</h3>
                <p>aside元素用来表示跟周边内容稍沾边儿的内容，类似于书籍或杂志的侧栏。其内容与页面其它内容、article或section有点关系，但并非主体内容的一部分。它可能是一些背景信息、到相关文章的链接等等。它不能是address元素的后代元素。</p>
                <aside>
                    <h3>Why Fruit is Healthy</h3>
                    <section>
                        Here are reasons why everyone should eat ore fruit:
                        ol
                        <li>Fruit contains lots of vitamins</li>
                        <li>Fruit is source of fibre</li>
                        <li>Fruit contains few calories</li>
                    </section>
                </aside>
                <h3>提供联系信息</h3>
                <p>address元素用来表示文档或article元素的联系信息。它的内容是流内容，但标题h1~h6、section、header、footer、nav、article和aside元素不能做该元素的后代元素。</p>
                <p>address元素身为article元素的后代元素时，它提供的联系信息被视为该article的，否则，当address元素身为body元素的子元素时（在body元素和address元素之间没有隔着article元素），它提供的联系信息被视为整个文档的。address元素不能用来表示文档或文章的联系信息之外的地址。例如，它不能用在文档内容中表示客户或用户的地址。</p>
                <address>
                    Question and comments ? <a href="mailto:adam@myboringblog.com">Email me</a>
                </address>
                <h3>生成详情区域</h3>
                <p>details元素在文档中生成一个区域，用户可以展开它以了解关于某主题的更多详情。details元素通常包含一个summary元素，后者的作用是为详情区域生成一个说明标签或标题。</p>
                <p>要让页面以一显示details元素就呈现展开状态，需要使用它的open属性。</p>
                <section>
                    <p>I like to swim, cycle and run. I am training for my first triathlon, but it is hard work.</p>
                    <details>
                        <summary style={{border: "none", outline: "none"}}>Kinds of Triathlon</summary>
                        There are different kinds of triathlon - sprint, Olympic and so on. I am aiming for Olympic, which consists of the following:
                        <ol>
                            <li>1.5km swim</li>
                            <li>40km cycle</li>
                            <li>10km run</li>
                        </ol>
                    </details>
                </section>




            </div>
        );
    }
}

export default ExploreParts;