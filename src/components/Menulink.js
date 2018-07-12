
import React from 'react';
//导航的 组件  不需要状态就可以写成函数  children 默认显示高亮 默认选中
import {Route,Link} from 'react-router-dom';
export default function({to,label}){ //props {to,label}  解构
  return <Route path={to} children={({match})=>{
      return <li className={match?'active':''}>
              <Link to={to}>{label}</Link>
            </li>
    }}></Route>
}
