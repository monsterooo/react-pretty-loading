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
  BallGridBeat,
  BallGridPulse,
  BallNewtonCradle,
  BallPulse,
  BallPulseRise,
  BallPulseSync,
} from 'react-pretty-loading';

export default class App extends Component {
  render () {
    return (
      <div className="container">
        <h1>react-pretty-loading</h1>
        <div className="loading">
          <div className="loading__item">
            <Ball8bits loading center />
          </div>
          <div className="loading__item">
            <Ball8bits loading center />
          </div>
          <div className="loading__item">
            <BallClipRotate loading center />
          </div>
          <div className="loading__item">
            <BallClipRotateMultiple loading center />
          </div>
          <div className="loading__item">
            <BallClipRotatePulse loading center />
          </div>
          <div className="loading__item">
            <BallAtom loading center />
          </div>
          <div className="loading__item">
            <BallBeat loading center />
          </div>
          <div className="loading__item">
            <BallCircus loading center />
          </div>
          <div className="loading__item">
            <BallClimbingDot loading center />
          </div>
          <div className="loading__item">
            <BallElasticDots loading center />
          </div>
          <div className="loading__item">
            <BallFall loading center />
          </div>
          <div className="loading__item">
            <BallFussion loading center />
          </div>
          <div className="loading__item">
            <BallGridBeat loading center />
          </div>
          <div className="loading__item">
            <BallGridPulse loading center />
          </div>
          <div className="loading__item">
            <BallNewtonCradle loading center />
          </div>
          <div className="loading__item">
            <BallPulse loading center />
          </div>
        </div>
      </div>
    )
  }
}
