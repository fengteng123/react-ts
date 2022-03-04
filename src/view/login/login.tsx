import React, { useState, useEffect } from 'react'
import styles from './login.module.sass'
import {
  useNavigate,
  Link
} from "react-router-dom";

export default function Login() {

  const [allNumber, setAllNumber] = React.useState(0)

  const [data, setData] = React.useState({
    admin: '',
    password: ""
  })

  /**
   * 加一时间
   */
  const loginClick = () => {
    let countNumber = allNumber + 1
    setAllNumber(
      countNumber
    )
  }
  const adminChange = (e: any) => {
    let dataInfo = Object.assign({}, data, {
      admin: e.target.value
    })
    setData(
      dataInfo
    )
  }

  const passwordChange = (e: any) => {
    let dataInfo = Object.assign({}, data, {
      password: e.target.value
    })
    setData(
      dataInfo
    )
  }

  const navigate = useNavigate();

  useEffect(() => {
    // effect
    console.log('进入页面');

    console.log(navigate);

    return () => {
      // cleanup
      console.log('离开页面');

    }
  })
  return (
    <div className={styles["login"]}>
      <div className={styles["center"]}>
        <div className={styles["title"]}>登陆页面</div>
        <input onChange={adminChange} value={data.admin} type="text" />
        <input onChange={passwordChange} value={data.password} type="text" />
        <button onClick={loginClick} >事件加一</button>
        <Link to="/Index">登陆
        </Link>
      </div>
    </div>
  )
}

