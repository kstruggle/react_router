
import React from 'react';
export default function(props){
  return <button className="btn btn-primary" onClick={()=>{
    localStorage.setItem('login','true');
    console.log(props.location);
    props.history.push(props.location.state.from);
  }}>登陆</button>
}
