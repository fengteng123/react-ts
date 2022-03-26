/**
 * 接收两个参数
 * 一个是store
 * 一个是action
 */

const initState = {
  count:0,
}

export const reducer = (state = initState, action:{type:String | number,[key: string]:any}) =>{

  switch (action.type) {
    case 'add_count':
      state.count = action.value
      return {...state}
  
    default:
      alert(123)
      return state;
  }
 }