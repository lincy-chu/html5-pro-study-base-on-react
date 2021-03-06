import React, {Component} from 'react';

class ExploreJavaScript extends Component{
    handleNumberToString(event){
        const numberArray = [2, 8, 10, 16];
        console.log(Math.ceil(26 / 5));
        numberArray.forEach((value) => {
            var reg = new RegExp(value, 'g');
            if(Number(event.target.value.match(reg)) === value){
                const res = (18).toString(value);
                alert("18转为字符串以" + value + "进制形式表示数值为：" +res);
                return;
            }
        });
    };
    handleToExponential(event){
        const type = event.target.value.match(/5/g) ? 5: '';
        if(type){
            const res = (18).toExponential(type);
            alert("18以指数形式表示数值，并以尾数的小数点有5位数字：" + res);
            return;
        }
        const res1 = (18).toExponential();
        alert("18以指数形式表示数值，并以尾数的小数点有1位数字：" + res1);
    };
    handleToFixed(event){
        const type = event.target.value.match(/3/g) ? 3: 0;
        const res = (18).toFixed(type);
        if(type === 3){
            alert("18小数点后保留3位有效数字：" + res);
            return;
        }
        alert("18小数点后保留0位有效数字：" + res);
    };
    handleToPrecision(event){
        const type = event.target.value.match(/3/g) ? 3: 1;
        const res = (18).toPrecision(type);
        if(type === 3){
            alert("18小数点后保留3位有效数字：" + res);
            return;
        }
        alert("18小数点后保留0位有效数字：" + res);
    };
    handleArray(event){
        const type = event.target.value;
        if(type === 'concat()'){
            alert([1, 2, 3, 4, 5].concat([6, 7, 8], [9, 10]));
        }
        else if(type === 'join()'){
            alert([1, 2, 3, 4, 5].join('-'));
        }
        else if(type === 'pop()'){
            alert("pop()方法删除数组的最后一个元素并返回它：" + [1, 2, 3, 4, 5].pop());
        }
        else if(type === 'push()'){
            var arr = [1, 2, 3, 4, 5];
            arr.push(6);
            alert("数组执行push()方法后：" + arr);
        }
        else if(type === 'reverse()'){
            alert([1, 2, 3, 4, 5].reverse());
        }
        else if(type === 'unshift()'){
            const arr = [0, 1, 'a', 'b'];
            arr.unshift('2');
            alert("unshift()方法将携带的参数作为新元素添加到数组的开头位置，结果为：" + arr);
        }
        else if(type === 'shift()'){
            alert("shift()方法删除并返回数组的第一个元素：" + [1, 2, 3, 4, 5].shift());
        }
        else if(type === 'slice()'){
            alert("slice(0， 2)方法返回从0到2位置之间的子数组：" + [1, 2, 3, 4, 5].slice(0, 2));
            alert("slice(3)方法返回从3之后的子数组：" + [1, 2, 3, 4, 5].slice(3));
        }
        else if(type === 'sort()'){
            const arr = [1, 'a', 'b', 3, 'd', 'f', 8];
            alert("sort()不携带参数按照正常的顺序排列的结果：" + arr.sort());
            alert("sort()携带参数按照参数方法规定的顺序排列的结果：" + arr.sort((a, b) => {if(a>b) return -1; else return 1;}));
        }
        else if(type === 'indexOf()'){
            const arr = [1, 2, 3, 5, 5, 10, 20];
            console.log(arr.indexOf(5));
            console.log(arr.indexOf(5, 4));
            console.log(arr.indexOf(100));
            alert("请于控制台查看结果");
        }
        else if(type === 'lastIndexOf()'){
            const arr = [1, 2, 3, 4, 5, 6];
            console.log(arr.lastIndexOf(5));
            console.log(arr.lastIndexOf(5, 3));
            console.log(arr.lastIndexOf(8));
            alert("请于控制台查看结果");
        }
        else if(type === 'every()'){
            const arr = [1, 2, 3, 4, 5, 6];
            const res = arr.every(function(item){
                return item > 5;
            });
            console.log(res);
            alert("请于控制台查看结果");
        }
        else if(type === 'some()'){
            const arr = [1, 2, 3, 4, 5, 6];
            const res = arr.some(function(item){
                return item > 3;
            });
            const res1 = arr.some(function(item){
                return item > 10;
            });
            console.log(res, res1);
            alert("请于控制台查看结果");
        }
        else if(type === 'reduce()'){
            const arr = [1, 2, 3, 4, 5, 6];
            const indexArr = [];
            var res = arr.reduce(function(prev, cur, index, array){
                indexArr.push(index);
                return prev + cur;
            }, 0); //此处初始值为0
            console.log(res, indexArr);
            alert("请于控制台查看结果");
        }
        else if(type === 'reduceRight()'){
            const arr = [1, 2, 3, 4, 5];
            const indexArr = [];
            res = arr.reduceRight(function (prev, cur, index, array){
                indexArr.push(index);
                return prev + cur;
            }, 0);
            console.log(res);
            console.log(indexArr);
            alert("请于控制台查看结果");
        }
        else if(type === 'insertOne()'){
            const arr = [1, 2, 3, 5, 6];
            arr.splice(3, 0, 4);
            console.log(arr);
        }
    };
    render(){
        return (
            <div>
                <h3>将数值转换为字符串</h3>
                <input type="button" onClick={this.handleNumberToString} value="将数值转换为字符串，以10进制形式表示数值"/>
                <input type="button" onClick={this.handleNumberToString} value="将数值转换为字符串，以2进制形式表示数值"/>
                <input type="button" onClick={this.handleNumberToString} value="将数值转换为字符串，以8进制形式表示数值"/>
                <input type="button" onClick={this.handleNumberToString} value="将数值转换为字符串，以16进制形式表示数值"/>
                <h3>toExponential(n)</h3>
                <p>以指数表示法表示数值。尾数的小数点前后分别为1位数字和n(取值范围为0~20)位数字</p>
                <input type="button" onClick={this.handleToExponential} value="toExponential()"/>
                <input type="button" onClick={this.handleToExponential} value="toExponential(5)"/>
                <h3>toFixed(n)</h3>
                <p>以小数点后有n(取值范围为0~20)位数字的形式表示实数</p>
                <input type="button" onClick={this.handleToFixed} value="toFixed()"/>
                <input type="button" onClick={this.handleToFixed} value="toFixed(3)"/>
                <h3>toPrecision(n)</h3>
                <p>用n(取值范围为1~21)位有效数字表示数值，在必要的情况下使用指数表示法</p>
                <input type="button" onClick={this.handleToPrecision} value="toPrecision()"/>
                <input type="button" onClick={this.handleToPrecision} value="toPrecision(3)"/>
                <h3>使用数组内置的数组方法</h3>
                <ul>
                    <li>1.concat(&lt;otherArray&gt;)——将数组和参数所指数组的内容合并为一个新数组，可指定多个数组——返回数组</li>
                    <li>2.join(&lt;separator&gt;)——将所有数组元素连接为一个字符串，各元素内容用参数指定的字符串分隔——返回字符串</li>
                    <li>3.pop()——把数组当做栈使用，删除并返回数组的最后一个元素——返回对象</li>
                    <li>4.push()——把数组当做栈使用，将指定的数据添加到数组中——无返回</li>
                    <li>5.reverse()——就地反转数组的元素的次序——返回数组</li>
                    <li>6.shift()——把数组当做栈使用，删并返回数组的第一个元素——返回对象</li>
                    <li>7.slice(&lt;start&gt;, &lt;end&gt;)——返回一个子数组——返回数组</li>
                    <li>8.sort()——就地对数组排序——返回数组</li>
                    <li>9.unshift(&lt;item&gt;)——把数组当做栈使用，将指定的数组添加到数组的开头位置。</li>
                    <li>10.indexOf(要查找的项, 查询起点位置(可选))——在数组中从指定位置“向后”开始查找指定的项，查找到则返回其索引值，否则返回-1。</li>
                    <li>11.lastIndexOf(要查找的项，查询起点位置(可选))——在数组中从指定位置“向前”开始查找指定的项，查找到则返回其索引值，否则返回-1。</li>
                    <li>12.every()——判断数组中每一项都是否满足条件，只有所有项都满足条件才会返回true，否则发挥false。</li>
                    <li>13.some()——判断数组中是否存在条件的项，只要有一项条件，就会返回true。</li>
                    <li>14.reduce(在每一项上调用的函数，作为归并基础的初始值(可选))——从数组的第一项开始，逐个遍历到最后。</li>
                    <li>15.reduceRight(在每一项上调用的函数, 作为归并基础的初始值(可选))——从数组的最后一项开始，逐个遍历到第一项。</li>
                    <li>16.在数组指定索引的位置插入一项。</li>
                </ul>
                <input type="button" onClick={this.handleArray} value="concat()"/>
                <input type="button" onClick={this.handleArray} value="join()"/>
                <input type="button" onClick={this.handleArray} value="pop()"/>
                <input type="button" onClick={this.handleArray} value="push()"/>
                <input type="button" onClick={this.handleArray} value="reverse()"/>
                <input type="button" onClick={this.handleArray} value="shift()"/>
                <input type="button" onClick={this.handleArray} value="slice()"/>
                <input type="button" onClick={this.handleArray} value="sort()"/>
                <input type="button" onClick={this.handleArray} value="unshift()"/>
                <input type="button" onClick={this.handleArray} value="indexOf()"/>
                <input type="button" onClick={this.handleArray} value="lastIndexOf()" />
                <input type="button" onClick={this.handleArray} value="every()"/>
                <input type="button" onClick={this.handleArray} value="some()"/>
                <input type="button" onClick={this.handleArray} value="reduce()"/>
                <input type="button" onClick={this.handleArray} value="reduceRight()"/>
                <input type="button" onClick={this.handleArray} value="insertOne()"/>
            </div>
        );
    }
}

export default ExploreJavaScript;