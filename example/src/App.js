import React, { Component } from 'react'
import {
  Ball8bits,
  BallClipRotate,
  BallClipRotateMultiple,
  BallClipRotatePulse,
  BallAtom,
  BallBeat,
  BallCircus,
  BallClimbingDot,
  BallElasticDots,
  BallFall,
  BallFussion,
} from 'react-pretty-loading';

export default class App extends Component {
  render () {
    return (
      <div>
        <div className="example">
          <Ball8bits loading center color="#ff0066" />
          <Ball8bits loading center color="#9787ea" />
          <BallClipRotate loading center color="#ff0066" />
          <BallClipRotateMultiple loading center color="#ff0066" />
          <BallClipRotatePulse loading center color="#ff0066" />
          <BallAtom loading center color="#ff0066" />
          <BallBeat loading center color="#ff0066" />
          <BallCircus loading center color="#ff0066" />
          <BallClimbingDot loading center color="#ff0066" />
          <div>
            <BallElasticDots loading center color="#ff0066" />
          </div>
        </div>
        <div className="example">
          <BallFall loading center color="#ff0066" />
          <BallFussion loading center color="#9787ea" />
        </div>
      </div>
      
    )
  }
}
