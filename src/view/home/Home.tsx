import React from 'react'
import { useNavigate, Outlet } from "react-router-dom";

import { connect } from 'react-redux'
import { Dispatch } from "redux";


function Home(porps:any) {

  const navigate = useNavigate();

  const testReactRedux = () =>{
    // console.log(123);
    console.log(porps);
    
    porps.sendAction(123)
    
  }


  return (
    <div>
      <h2>home Pag123e</h2>

      <button onClick={testReactRedux}>
        测试react-redux
      </button>

    </div>
  )
}

/**
 * 这个函数的返回值是一个对象
 * @param dispatch 
 */
const dispatchToProps = (dispatch:Dispatch) =>{

  return {
    sendAction: (value:number) =>{
      // 利用dispatch发送一个action
      // 传递action 对象我们要定义一个type属性
      dispatch({
        type:'add_action',
        value
      })
      
    }
  }

}

const connectHome = connect(null, dispatchToProps)(Home)

export default connectHome