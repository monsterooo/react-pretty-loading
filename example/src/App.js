import React, { Component } from 'react';
import Detail from './Detail';
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
  BallRotate,
  BallRunningDots,
  BallScale,
  BallScaleMultiple,
  BallScalePulse,
  BallScaleRipple,
  BallScaleRippleMultiple,
  BallSpin,
  BallSpinClockWise,
} from 'react-pretty-loading';

const buildCode = (name) => {
  return `import { ${name} } from 'react-pretty-loading';\r\n<${name} loading={loading} center />`;
}

export default class App extends Component {
  state = {
    showDetail: false,
  };

  handleClick = (code) => {
    this.setState({ showDetail: true, code });
  }
  handleClose = () => {
    this.setState({ showDetail: false });
  }
  render () {
    const { showDetail, code } = this.state;

    return (
      <div className="container">
        <h1>react-pretty-loading</h1>
        <div className="loading">
          <div onClick={this.handleClick.bind(this, buildCode('Ball8bits'))} className="loading__item">
            <Ball8bits loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallClipRotate'))} className="loading__item">
            <BallClipRotate loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallClipRotateMultiple'))} className="loading__item">
            <BallClipRotateMultiple loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallClipRotatePulse'))} className="loading__item">
            <BallClipRotatePulse loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallAtom'))} className="loading__item">
            <BallAtom loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallBeat'))} className="loading__item">
            <BallBeat loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallCircus'))} className="loading__item">
            <BallCircus loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallClimbingDot'))} className="loading__item">
            <BallClimbingDot loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallElasticDots'))} className="loading__item">
            <BallElasticDots loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallFall'))} className="loading__item">
            <BallFall loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallFussion'))} className="loading__item">
            <BallFussion loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallGridBeat'))} className="loading__item">
            <BallGridBeat loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallGridPulse'))} className="loading__item">
            <BallGridPulse loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallNewtonCradle'))} className="loading__item">
            <BallNewtonCradle loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallPulse'))} className="loading__item">
            <BallPulse loading center />
          </div>

          <div onClick={this.handleClick.bind(this, buildCode('BallPulseRise'))} className="loading__item">
            <BallPulseRise loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallPulseSync'))} className="loading__item">
            <BallPulseSync loading center />
          </div>

          <div onClick={this.handleClick.bind(this, buildCode('BallRotate'))} className="loading__item">
            <BallRotate loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallRunningDots'))} className="loading__item">
            <BallRunningDots loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallScale'))} className="loading__item">
            <BallScale loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallScaleMultiple'))} className="loading__item">
            <BallScaleMultiple loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallScalePulse'))} className="loading__item">
            <BallScalePulse loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallScaleRipple'))} className="loading__item">
            <BallScaleRipple loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallScaleRippleMultiple'))} className="loading__item">
            <BallScaleRippleMultiple loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallSpin'))} className="loading__item">
            <BallSpin loading center />
          </div>
          <div onClick={this.handleClick.bind(this, buildCode('BallSpinClockWise'))} className="loading__item">
            <BallSpinClockWise loading center />
          </div>
        </div>
        <Detail active={showDetail} code={code} handleClose={this.handleClose} />
      </div>
    )
  }
}
