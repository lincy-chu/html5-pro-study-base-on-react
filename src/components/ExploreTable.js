import React, {Component} from "react";

class ExploreTable extends Component {
    render(){
        return (
            <div>
                <h2>表单元素</h2>
                <h3>生成基本表格</h3>
                <p>table元素内容可以是caption、colgroup、thead、tbody、tfoot、tr和td元素.</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Apples</td>
                            <td>Green</td>
                            <td>Medium</td>
                        </tr>
                        <tr>
                            <td>Oranges</td>
                            <td>Mangoes</td>
                            <td>Cherries</td>
                        </tr>
                    </tbody>
                </table>
                <h3>添加表头单元格</h3>
                <p>th元素表示表头单元格，可以用来区分数据和对数据的说明。 </p>
                <table>
                    <tbody>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Size</th>
                        </tr>
                        <tr>
                            <th>1st Favorite</th>
                            <td>Apple</td>
                            <td>Green</td>
                            <td>Medium</td>
                        </tr>
                        <tr>
                            <th>2nd Favorite</th>
                            <td>Oranges</td>
                            <td>Orange</td>
                            <td>large</td>
                        </tr>
                    </tbody>
                </table>
                <h3>制作不规则表格</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Color</th>
                            <th colSpan="2">Size & Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Favorite</th>
                            <td>Apple</td>
                            <td>Green</td>
                            <td>Medium</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <th>2nd Favorite</th>
                            <td>Oranges</td>
                            <td>Orange</td>
                            <td>large</td>
                            <td>450</td>
                        </tr>
                        <tr>
                            <th>3rd Favorite</th>
                            <td>Pomegranate</td>
                            <td colSpan="2" rowSpan="2">
                                Pomegranates and cherries can both come in a range of colors and size
                            </td>
                            <td>203</td>
                        </tr>
                        <tr>
                            <th rowSpan="2">Joint 4th:</th>
                            <td>Cherries</td>
                            <td rowSpan="2">75</td>
                        </tr>
                        <tr>
                            <td>Pineapple</td>
                            <td>Brown</td>
                            <td>Very large</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="5">&copy; 2017 lincy chu Fruit Data Enterprises</th>
                        </tr>
                    </tfoot>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td rowSpan="3">2</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>9</td>
                        </tr>
                    </tbody>
                </table>
                <h3>处理列</h3>
                <p>处理列的解决办法涉及到colgroup和col元素。colgroup的span属性指定colgroup元素负责的列数。使用col元素的好处在于能够获得更多的控制权。col元素位于colgroup元素之中，每个col元素代表列组中的一列（未使用span属性的情况）。</p>
                <table>
                    <caption>Results of the 2011 Fruits Survey</caption>
                    <colgroup id="colgroup1" span="3"/>
                    <colgroup id="colgroup2" span="2"/>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Color</th>
                            <th colSpan="2">Size & Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Favorite: </th>
                            <td>Apples</td>
                            <td>Green</td>
                            <td>Medium</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <th>2nd Favorite: </th>
                            <td>Oranges</td>
                            <td>Orange</td>
                            <td>Large</td>
                            <td>450</td>
                        </tr>
                        <tr>
                            <th>3rd Favorite: </th>
                            <td>Pomegranate</td>
                            <td colSpan="2" rowSpan="2">Pomegranate and cherries can both come in a range of colors and size.</td>
                            <td>203</td>
                        </tr>
                        <tr>
                            <th rowSpan="2">Joint 4th:</th>
                            <td>Cherries</td>
                            <td rowSpan="2">75</td>
                        </tr>
                        <tr>
                            <td>Pineapple</td>
                            <td>Brown</td>
                            <td>Very large</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="5">&copy; 2017 lincy chu</th>
                        </tr>
                    </tfoot>
                </table>
                <table style={{border: 1}}>
                    <caption>Results of the 2011 Fruits Survey</caption>
                    <colgroup>
                        <col id="col1And2" span="2"/>
                        <col id="col3"/>
                    </colgroup>
                    <colgroup id="colgroup2" span="2"/>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Color</th>
                            <th colSpan="2">Size & Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Favorite: </th>
                            <td>Apples</td>
                            <td>Green</td>
                            <td>Medium</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <th>2nd Favorite: </th>
                            <td>Oranges</td>
                            <td>Orange</td>
                            <td>Large</td>
                            <td>450</td>
                        </tr>
                        <tr>
                            <th>3rd Favorite: </th>
                            <td>Pomegranate</td>
                            <td colSpan="2" rowSpan="2">Pomegranate and cherries can both come in a range of colors and size.</td>
                            <td>203</td>
                        </tr>
                        <tr>
                            <th rowSpan="2">Joint 4th:</th>
                            <td>Cherries</td>
                            <td rowSpan="2">75</td>
                        </tr>
                        <tr>
                            <td>Pineapple</td>
                            <td>Brown</td>
                            <td>Very large</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="5">&copy; 2017 lincy chu</th>
                        </tr>
                    </tfoot>
                </table>



            </div>
        );
    }
}

export default ExploreTable;