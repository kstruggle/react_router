import React from 'react'
import {Prompt} from 'react-router-dom';  //弹出框  路由的属性

class UserAdd extends React.Component {
  constructor(props){
    super(props);
    this.state = {blocking:false};  //默认不阻止跳转

  }
  handleSubmit = ()=>{
    let name = this.name.value;   // 把当前的对象绑定到  全局的 name 上
    console.log(name);
    let userStr = localStorage.getItem('users');
    let users = userStr ? JSON.parse(userStr) : [];

    users.push({id:Date.now(),name});
    localStorage.setItem('users',JSON.stringify(users));
    this.setState({
      blocking:false
    },()=>{
      this.props.history.push('/user/list')  //跳转
    })
    
  }
  handleChange = (e)=>{  //当输入内容是  判断当前元素是否有值 和 值的长度大于0
    this.setState({
      blocking:e.target.value && e.target.value.length>0
    })
  }
  render () {
    return (
      <div>
        {/*  路由的弹出框   自带  当this.this.state.blocking 是true 就提示 \*/}
        <Prompt
          when={this.state.blocking}
          message={(location)=>`你确定要跳转到${location.pathname}吗？`}
        >
        </Prompt>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">姓名</label>
            <input onChange={this.handleChange} type="text" className='form-control' ref={ref=>this.name=ref}/>
          </div>
          <div className="form-group">
            <input type="submit" className='btn btn-primary'/>
          </div>
        </form>
      </div>
    )
  }
}

export default UserAdd;
