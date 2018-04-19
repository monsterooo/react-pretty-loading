import React, { Component } from 'react'
import {
  Ball8bits,
  BallClipRotate,
  BallClipRotateMultiple,
  BallClipRotatePulse,
  BallAtom,
  BallBeat,
} from 'react-loading';

export default class App extends Component {
  render () {
    return (
      <div className="example">
        <Ball8bits loading center color="#ff0066" />
        <Ball8bits loading center color="#9787ea" />
        <BallClipRotate loading center color="#ff0066" />
        <BallClipRotateMultiple loading center color="#ff0066" />
        <BallClipRotatePulse loading center color="#ff0066" />
        <BallAtom loading center color="#ff0066" />
        <BallBeat loading center color="#ff0066" />
      </div>
    )
  }
}
