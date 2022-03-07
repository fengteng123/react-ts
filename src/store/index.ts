import { createStore } from 'redux'

// 导入我们自己写的reducer

import { reducer } from '../reducer'

const store = createStore(reducer)

export default store
