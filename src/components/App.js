import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,  //容器
  Route, //一条路由
  Link,  //a 标签跳转
  Switch   //匹配到路由中其中一个就不再匹配别的
} from 'react-router-dom';    //引入路由
import Home from './Home'
import User from './User'
import Profile from './Profile'

import Menu from './Menu';


// 判断用户是否登录  显示个人中心
// 否则跳转到登录页面

import ProtectedRoute from './ProtectedRoute';
import Login from './Login'


export default (
  <Router>
    <div>
      <nav className='navbar navbar-inverse'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <div className='navbar-brand'>
              管理系统
            </div>
          </div>
          <ul className="nav navbar-nav">
            <Menulink label="" to="/home"></Menulink>
            <li><Link to='/home'>首页</Link></li>
            <li><Link to='/user'>用户管理</Link></li>
            <li><Link to='/profile'>个人设置</Link></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className='row'>
          <div className='col-sm-12'>
            <Switch>{/*加上 switch  拼配到其中一个 会立即停止*/}

              {/* exact 精确匹配   /  不会是 /home 不会被匹配 */}
              <Route exact path="/" render={props=><div>这个会精准匹配  ， 简单的渲染 不需要component 引入</div>}/>

              {/* <Route path="/:name" render={props=><div>如果是 /home 这个也会被匹配  {props.match.params.name}会输出当前name</div>}/> */}

              <Route path="/home" component={Home}/>
              <Route path="/user" component={User}/>
              {/* <Route path="/profile" component={Profile}/> */}


              <Route path="/login" component={Login}/>

              {/* 自定义路由  重定向路由*/}
              <ProtectedRoute path="/profile" component={Profile}/>

            </Switch>
          </div>
        </div>
      </div>



    </div>
  </Router>
)
