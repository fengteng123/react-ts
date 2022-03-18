/**
 * 接收两个参数
 * 一个是store
 * 一个是action
 */

const initState = {
  count:"",
}

export const reducer = (state = initState, action:{type:String | number,[key: string]:any}) =>{
  console.log(action);
  console.log(state);
  
  
  return state

 }