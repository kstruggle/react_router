

//当通过函数来定义组件的时候参数是属性对象
//当一个组件不需要状态的时候可以用函数来 声明
//当一个组件必须要状态的时候必须用类
import React from 'react';
//<ProtectedRoute path="/profile" component={Profile}/>
//props = {path:'/profile',component:Profile}

import {Redirect,Route} from 'react-router-dom';  //导入重定向 和 路由模板
export default function({component:Component,...rest}){   //  ...rest 其余参数
       return <Route {...rest} render={(props)=>
         localStorage.getItem('login')
           ?<Component/>
           :<Redirect to={{
             pathname:'/login',
             state:{from:props.location.pathname}
           }}/>
       }/>;

}
