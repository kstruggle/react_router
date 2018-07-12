import React from 'react'
import {Link,Route} from 'react-router-dom';

class UserAdd extends React.Component {
  render () {
    console.log(this.props.match.params.id); //  路由上的 传过来的  id

    let id = this.props.match.params.id;
    let userStr = localStorage.getItem('users');
    let users = userStr ? JSON.parse(userStr) : [];

    let user = users.find(user=>{
      return user.id == id    //返回users 中每一项  是否是true  否则不返回
    })


    return (
        <div>
          <div className="alert alert-success" role="alert">用户详情页</div>
          <table className='table table-bordered'>
            <thead>
              <tr className='success'>
                <th>ID</th>
                <th>姓名</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
    )
  }
}

export default UserAdd;
