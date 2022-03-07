
/**
 * 这个文件是创建reducer 函数专门来处理发送过来的action
 */

const initState = {
  value:"默认值"
}

export const reducer = (state:any = initState, action:any) =>{
  switch (action.type) {
    case "SEND_TYPE":
      
      // break;
      return Object.assign({}, state, action)
  
    default:
      // break;
      return state
  }
}