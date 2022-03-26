import React from 'react'
import { useNavigate, Outlet } from "react-router-dom";

import { connect } from 'react-redux'
import { Dispatch } from "redux";
import { useState, useEffect } from 'react';

import withWindowSize, { withPorps } from '../../components/withWindowSize'

interface homeInfoProps  extends withPorps{
  count: number,
  sendAction: (count: number) => void
}

function Home(porps: homeInfoProps) {

  const navigate = useNavigate();

  // 类似于componentDidMount 和 componentDidUpdate:
  // useEffect的第二个参数为一个空数组，初始化调用一次之后不再执行，相当于componentDidMount。
  // 页面刚上来 所有的 useEffect 第一个参数函数 都会执行

  // 如果没有配置 useEffect 的依赖向(第二个参数) 在函数初始化和更新的时候都会执行
  useEffect(()=>{
    console.log(111,porps.x);
    console.log(111,porps.y);
  })

  // porps.x 改变之后就会执行 
  useEffect(()=>{
    console.log(222,porps.x);
    console.log(222, porps.y);

  },[
    porps.x
  ])


  // 如果依赖配置为空,第一次会执行，其他时间都不执行
  // 卸载组件
  useEffect(()=>{
    console.log(333,'卸载');
    
    return () => {
      console.log('3组件卸载');
      
    }
  },[
    
  ])

  useEffect(()=> { return ()=> {}},[])
  // 参数 1 effect 函数  => 发送请求 修改数据  ...
  // 参数 2 effect 函数依赖参数 决定effect 的更新方式
  // return 返还函数 ==> 组件要卸载的时候做一些事情



  const testReactRedux = () => {
    let count = porps.count + 1;
    // porps.sendAction(count)

    
  }


  return (
    <div>
      <h2>home Pag123e</h2>

      <button onClick={testReactRedux}>
        测试react-redux
      </button>

      <div>高阶函数 出来的屏幕尺寸X{porps.x}Y{porps.y}</div>

    </div>
  )
}

/**
 * 这个函数的返回值是一个对象
 * @param dispatch 
 */
const dispatchToProps = (dispatch: Dispatch) => {
  return {
    sendAction: (value: number) => {
      // 利用dispatch发送一个action
      // 传递action 对象我们要定义一个type属性
      dispatch({
        type: 'add_count',
        value
      })

    }
  }
}

const mapStateToProps = (state: any) => {
  return state

}

const withWindowSizeHome = withWindowSize<withPorps>(Home)

const connectHome = connect(mapStateToProps, dispatchToProps)(withWindowSizeHome as any)


export default connectHome