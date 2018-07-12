import React from 'react'
import {Link,Route} from 'react-router-dom';

class UserAdd extends React.Component {
  handleSubmit = ()=>{
    let name = this.name.value;   // 把当前的对象绑定到  全局的 name 上
    console.log(name);
    let userStr = localStorage.getItem('users');
    let users = userStr ? JSON.parse(userStr) : [];
    
    users.push({id:Date.now(),name});
    localStorage.setItem('users',JSON.stringify(users));

    this.props.history.push('/user/list')  //跳转
  }
  render () {
    return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">姓名</label>
            <input type="text" className='form-control' ref={ref=>this.name=ref}/>
          </div>
          <div className="form-group">
            <input type="submit" className='btn btn-primary'/>
          </div>
        </form>
    )
  }
}

export default UserAdd;
