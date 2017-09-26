import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './css/App.css';
import ExploreHTML from "./components/ExploreHTML";
import ExploreCSS from "./components/ExploreCSS";
import ExploreJavaScript from "./components/ExploreJavaScript";
import ExploreHTML5 from "./components/ExploreHTML5";
import ExploreContent from "./components/ExploreContent";
import ExploreParts from "./components/ExploreParts";
import ExploreTable from "./components/ExploreTable";
import ExploreForm from "./components/ExploreForm";
import ExploreInput from "./components/ExploreInput";
import ExploreOthers from "./components/ExploreOthers";
import InsertContent from "./components/InsertContent";
import UnderstandCSS from "./components/UnderstandCSS";
import UseBorderAndBackground from "./components/UseBorderAndBackground";
import TransitionAnimationTransform from "./components/TransitionAnimationTransform";
import UnderstandDOM from "./components/UnderstandDOM";
import UnderstandElements from "./components/UnderstandElements";
import UseEvent from "./components/UseEvent";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div>
                  <nav>
                      <ol>
                          <li><Link to="/ExploreHTML">初探HTML</Link></li>
                          <li><Link to="/ExploreCSS">初探CSS</Link></li>
                          <li><Link to="/ExploreJavaScript">初探JavaScript</Link></li>
                          <li><Link to="/ExploreHTML5">html5初探</Link></li>
                          <li><Link to="/ExploreContent">组织内容</Link></li>
                          <li><Link to="/ExploreParts">文档分节</Link></li>
                          <li><Link to='/ExploreTable'>表单元素</Link></li>
                          <li><Link to="/ExploreForm">表单</Link></li>
                          <li><Link to="/ExploreInput">定制input元素</Link></li>
                          <li><Link to="/ExploreOthers">其他表单元素及输入验证</Link></li>
                          <li><Link to="/InsertContent">嵌入内容</Link></li>
                          <li><Link to="/UnderstandCSS">使用CSS选择器</Link></li>
                          <li><Link to="/UseBorderAndBackground">使用边框和背景</Link></li>
                          <li><Link to="/TransitionAnimationTransform">过渡、动画和变换</Link></li>
                          <li><Link to="/UnderstandDOM">使用Document对象</Link></li>
                          <li><Link to="/UnderstandElements">使用DOM元素</Link></li>
                          <li><Link to="/UseEvent">使用事件</Link></li>
                      </ol>
                  </nav>
                  <Route path="/ExploreHTML" component={ExploreHTML} />
                  <Route path="/ExploreCSS" component={ExploreCSS}/>
                  <Route path="/ExploreJavaScript" component={ExploreJavaScript}/>
                  <Route path="/ExploreHTML5" component={ExploreHTML5}/>
                  <Route path="/ExploreContent" component={ExploreContent}/>
                  <Route path="/ExploreParts" component={ExploreParts} />
                  <Route path="/ExploreTable" component={ExploreTable}/>
                  <Route path="/ExploreForm" component={ExploreForm}/>
                  <Route path="/ExploreInput" component={ExploreInput}/>
                  <Route path="/ExploreOthers" component={ExploreOthers}/>
                  <Route path="/InsertContent" component={InsertContent}/>
                  <Route path="/UnderstandCSS" component={UnderstandCSS}/>
                  <Route path="/UseBorderAndBackground" component={UseBorderAndBackground}/>
                  <Route path="/TransitionAnimationTransform" component={TransitionAnimationTransform}/>
                  <Route path="/UnderstandDOM" component={UnderstandDOM}/>
                  <Route path="/UnderstandElements" component={UnderstandElements}/>
                  <Route path="/UseEvent" component={UseEvent}/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
