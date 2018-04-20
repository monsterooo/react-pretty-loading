import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const dotJump = keyframes`
  0% {
    transform: scale(1, .7);
  }
  20% {
    transform: scale(.7, 1.2);
  }
  40% {
    transform: scale(1, 1);
  }
  50% {
    bottom: 125%;
  }
  46% {
    transform: scale(1, 1);
  }
  80% {
    transform: scale(.7, 1.2);
  }
  90% {
    transform: scale(.7, 1.2);
  }
  100% {
    transform: scale(1, .7);
  }
`;
const dotStep = keyframes`
  0% {
    top: 0;
    right: 0;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    top: 100%;
    right: 100%;
    opacity: 0;
  }
`;
const props = ({
  color,
  width,
}) => {
  const ratio = 1.3125;
  const boxWidth = width;
  const boxHeight = width / ratio;
  const stepWidth = boxWidth;
  const smallMeasure = width / 3;

  const BallClimbingDot = css`
    position: relative;
    box-sizing: border-box;
    display: block;
    font-size: 0;
    color: ${color};
    width: ${boxWidth}px;
    height: ${boxHeight}px;

    > div {
      display: inline-block;
      float: none;
      background-color: currentColor;
      border: 0 solid currentColor;
    }
    > div:nth-child(1) {
      position: absolute;
      bottom: 32%;
      left: 18%;
      width: ${smallMeasure}px;
      height: ${smallMeasure}px;
      border-radius: 100%;
      transform-origin: center bottom;
      animation: ${dotJump} .6s ease-in-out infinite;
    }
    > div:not(:nth-child(1)) {
      position: absolute;
      top: 0;
      right: 0;
      width: ${smallMeasure}px;
      height: ${smallMeasure / 7}px;
      border-radius: 0;
      transform: translate(60%, 0);
      animation: ${dotStep} 1.8s linear infinite;
    }
    > div:not(:nth-child(1)):nth-child(2) {
        animation-delay: 0ms;
    }
    > div:not(:nth-child(1)):nth-child(3) {
      animation-delay: -600ms;
    }
    > div:not(:nth-child(1)):nth-child(4) {
      animation-delay: -1200ms;
    }
  `;
  return {
    BallClimbingDot,
  };
};
export default compose(
  pure,
  defaultProps({
    width: 42,
    color: '#fff',
    loading: false,
  }),
  withProps(props),
)(({ center, loading, BallClimbingDot }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallClimbingDot}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));