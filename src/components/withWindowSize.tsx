import React from 'react'

import { connect } from 'react-redux'


export interface withPorps {
  x: number,
  y: number
}

// interface withComState extends withPorps {

// }

export default function withWindowSize<withPorps>(
  Component: React.ComponentType<any>
) {
  class withCom extends React.Component<null, any> {

    state = {
      x: document.documentElement.clientWidth,
      y: document.documentElement.clientHeight,
    }

    getSize = () => {
      this.setState({
        x: document.documentElement.clientWidth,
        y: document.documentElement.clientHeight,
      })
    }

    componentDidMount() {
      window.addEventListener('resize', this.getSize);
    }
    componentWillMount() {
      window.addEventListener('resize', this.getSize);
    }

    render() {
      return <Component {...this.state} />
    }
  }

  return withCom
}
