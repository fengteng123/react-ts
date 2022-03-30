/**
 * 接收两个参数
 * 一个是store
 * 一个是action
 */

const initState = {
  count:1,
}

export const reducer = (state = initState, action:{type:String | number,[key: string]:any}) =>{
  console.log(action);
  console.log(state);

  switch (action.type) {
    case 'add_count':
      state.count = action.value
      return  {...state}

    default:
      return state;
  }
  
  
  return state

 }