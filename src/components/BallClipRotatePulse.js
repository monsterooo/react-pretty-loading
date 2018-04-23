import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const rotate = keyframes`
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  50% {
    -webkit-transform: translate(-50%, -50%) rotate(180deg);
    transform: translate(-50%, -50%) rotate(180deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;
const scale = keyframes`
  0%,
  100% {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) scale(1);
    transform: translate(-50%, -50%) scale(1);
  }
  30% {
    opacity: .3;
    -webkit-transform: translate(-50%, -50%) scale(.15);
    transform: translate(-50%, -50%) scale(.15);
  }
`;
const props = ({
  width,
  height,
  color,
}) => {
  const BallClipRotatePulse = css`
    position: relative;
    box-sizing: border-box;
    display: block;
    font-size: 0;
    color: ${color};
    width: ${width}px;
    height: ${height}px;
    
    > div {
      position: relative;
      box-sizing: border-box;
      display: inline-block;
      float: none;
      background-color: currentColor;
      border: 0 solid currentColor;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 100%;
    }
    > div:first-child {
      position: absolute;
      width: ${width}px;
      height: ${height}px;
      background: transparent;
      border-style: solid;
      border-width: 2px;
      border-right-color: transparent;
      border-left-color: transparent;
      animation: ${rotate} 1s cubic-bezier(.09, .57, .49, .9) infinite;
    }
    > div:last-child {
      width: ${width / 2}px;
      height: ${height / 2}px;
      animation: ${scale} 1s cubic-bezier(.09, .57, .49, .9) infinite;
    }
  `;
  return {
    BallClipRotatePulse,
  };
};
export default compose(
  pure,
  defaultProps({
    width: 24,
    height: 24,
    color: '#fff',
    loading: false,
  }),
  withProps(props),
)(({ center, loading, BallClipRotatePulse }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallClipRotatePulse}>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));