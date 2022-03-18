import React from 'react'

import { connect } from 'react-redux'

function my() {
  return (
    <div>
      <div> 我的页面</div>
      <div>redux的数据{}</div>
    </div>
  )
}

const mapStateToProps = (state:any) =>{
  console.log("my", state);
  return state
  
}

export default connect(mapStateToProps)(my)