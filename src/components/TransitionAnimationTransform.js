import React, {Component} from 'react';
import "./../css/TransitionAnimationTransform.css";

class TransitionAnimationTransform extends Component{
    render(){
        return (
            <div>
                <h2>过渡、动画和变换</h2>
                <h3>1. 使用过渡</h3>
                <p>CSS过渡特性允许我们控制应用新属性值的速度。</p>
                <table>
                    <caption>过渡属性</caption>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>transition-delay</td>
                            <td>指定过渡开始之前的延迟时间</td>
                            <td>时间</td>
                        </tr>
                        <tr>
                            <td>transition-duration</td>
                            <td>指定过渡的持续时间</td>
                            <td>时间</td>
                        </tr>
                        <tr>
                            <td>transition-property</td>
                            <td>指定应用过渡的属性</td>
                            <td>字符串</td>
                        </tr>
                        <tr>
                            <td>transition-timing-function</td>
                            <td>指定过渡期间计算中间值的方式</td>
                            <td>ease(默认值)、linear、ease-in、ease-out、ease-in-out</td>
                        </tr>
                        <tr>
                            <td>transition</td>
                            <td>在一条声明中指定所有过渡细节的简写属性</td>
                            <td>&lt;transition-property&gt;&lt;transition-duration&gt;&lt;transition-timing-function&gt;&lt;transition-delay&gt;</td>
                        </tr>
                    </tbody>
                </table>
                <h4>1.1 创建过渡</h4>
                <div id="demo_1_1">
                    <p>
                        There are lots of different kinds of fruit - there are over <strong>500</strong> varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    </p>
                </div>
                <h4>1.2 创建反向过渡</h4>
                <div id="demo_2_1">
                    <p>
                        There are lots of different kinds of fruit - there are over <strong>500</strong> varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    </p>
                </div>
                <h4>1.3 使用transition-timing-function属性</h4>
                <div id="demo_3_1">
                    <p id="demo_3_1_p">
                        There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    </p>
                    <button data-type="ease" onClick={this.handleTransition}>ease</button>
                    <button data-type="linear" onClick={this.handleTransition}>linear</button>
                    <button data-type="ease-in" onClick={this.handleTransition}>ease-in</button>
                    <button data-type="ease-out" onClick={this.handleTransition}>ease-out</button>
                    <button data-type="ease-in-out" onClick={this.handleTransition}>ease-in-out</button>
                </div>
                <h3>2. 使用动画</h3>
                <p>CSS动画本质上是增强的过渡。</p>
                <table>
                    <caption>动画属性</caption>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>animation-delay</td>
                            <td>设置动画开始前的延迟</td>
                            <td>时间</td>
                        </tr>
                        <tr>
                            <td>animation-direction</td>
                            <td>设置动画循环播放的时候是否反向播放</td>
                            <td>normal、alternate</td>
                        </tr>
                        <tr>
                            <td>animation-duration</td>
                            <td>设置动画播放的持续时间</td>
                            <td>时间</td>
                        </tr>
                        <tr>
                            <td>animation-iteration-count</td>
                            <td>设置动画的播放次数</td>
                            <td>数值</td>
                        </tr>
                        <tr>
                            <td>animation-name</td>
                            <td>指定动画名称</td>
                            <td>none、字符串</td>
                        </tr>
                        <tr>
                            <td>animation-play-state</td>
                            <td>允许动画站厅和重新播放</td>
                            <td>running、paused</td>
                        </tr>
                        <tr>
                            <td>animation-timing-function</td>
                            <td>指定如何计算中间动画值</td>
                            <td>ease、ease-in、ease-out、ease-in-out、cubic-bezier</td>
                        </tr>
                        <tr>
                            <td>animation</td>
                            <td>简写属性</td>
                            <td>&lt;animation-name&gt;&lt;animation-duration&gt;&lt;animation-timing-function&gt;&lt;animation-delay&gt;&lt;animation-iteration-count&gt;</td>
                        </tr>
                    </tbody>
                </table>
                <div id="demo_4_1">
                    There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                </div>
                <h4>2.1 使用关键帧</h4>
                <div id="demo_5_1">
                    There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                </div>
                <h4>2.2 使用中间帧</h4>
                <div id="demo_6_1">
                    There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                </div>
                <h4>2.3 设置重复方向</h4>
                <div id="demo_7_1">
                    There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                </div>
                <h4>2.4 为一个元素应用多个关键帧</h4>
                <div id="demo_8_1">
                    There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                </div>
                <h4>2.5 停止和启动动画</h4>
                <p>animation-play-state属性可以用来停止和启动动画。如果这个属性的值为paused，动画就会停止。如果换成playing，动画就会开始播放。</p>
                <div id="demo_9_1">
                    There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                </div>
                <button id="animation" onClick={this.handleClick}>播放</button>
                <h3>3. 使用变换</h3>
                <p>可以使用CSS变换为元素应用线性变换，也就是说你可以旋转、缩放和平移某个元素。</p>
                <table>
                    <caption>transform属性</caption>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>值</th>
                            <th>值说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan="5">transform</td>
                            <td rowSpan="5">指定应用的变换功能</td>
                            <td>translate(&lt;长度值或百分数值&gt;)、translateX(&lt;&长度值或百分数值gt;)、translateY(&lt;长度值或百分数字&gt;)</td>
                            <td>在水平方向、垂直方式或者两个方向上平移元素</td>
                        </tr>
                        <tr>
                            <td>scale(&lt;数值&gt;)、scaleX(&lt;数值&gt;)、scale(&lt;数值&gt;)</td>
                            <td>在水平方向和垂直方向或者两个方向上缩放元素</td>
                        </tr>
                        <tr>
                            <td>rotate(&lt;角度&gt;)</td>
                            <td>旋转元素</td>
                        </tr>
                        <tr>
                            <td>skew(&lt;角度&gt;)、skewX(&lt;角度&gt;)、skewY(&lt;角度&gt;)</td>
                            <td>在水平、垂直方向或者两个方向上使元素倾斜一定的角度</td>
                        </tr>
                        <tr>
                            <td>matrix(4~6个值，逗号隔开)</td>
                            <td>指定自定义变换。大多浏览器还没有实现Z轴缩放，因此最后两个数值卡伊忽略（有些情况下必须要省略）。</td>
                        </tr>
                        <tr>
                            <td rowSpan="4">transform-origin</td>
                            <td rowSpan="4">指定变换的起点</td>
                            <td>&lt;%&gt;</td>
                            <td>指定元素x或者y轴的起点</td>
                        </tr>
                        <tr>
                            <td>&lt;长度值&gt;</td>
                            <td>指定距离</td>
                        </tr>
                        <tr>
                            <td>left、center、right</td>
                            <td>指定x轴上的位置</td>
                        </tr>
                        <tr>
                            <td>top、center、bottom</td>
                            <td>指定y轴上的位置</td>
                        </tr>
                    </tbody>
                </table>
                <p>注意：transform在行内元素上无效</p>
                <h4>3.1 为元素应用变换</h4>
                <div id="demo_10_1">
                    There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    <p style={{width: "100px"}}>Banana</p>
                </div>
                <h4>3.2 使用transform-origin属性</h4>
                <div id="demo_11_1">
                    There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    <p style={{width: '100px'}}>Banana</p>
                </div>
                <h4>3.2 将变换作为动画和过渡处理</h4>
                <div id="demo_12_1">
                    There are lots of different kinds of fruit - there are over 500 varieties of banana alone. By the time we add the countless types of apples, oranges, and other well-known fruit, we are faced with thousands of choices.
                    <p style={{width: '100px'}}>Banana</p>
                </div>







            </div>
        );
    };
    handleTransition(event){
        document.getElementById("demo_3_1_p").style.transitionTimingFunction = event.target.getAttribute("data-type");
    };
    handleClick(){
        var btn = document.getElementById('animation');
        var animationObj = document.getElementById("demo_9_1");
        console.log(btn.innerHTML);
        if(btn.innerHTML === '播放'){
            btn.innerHTML = '暂停';
            animationObj.style.webkitAnimationPlayState = "running";
            return;
        }
        btn.innerHTML = '播放';
        animationObj.style.webkitAnimationPlayState = "paused";
    }
}

export default TransitionAnimationTransform;