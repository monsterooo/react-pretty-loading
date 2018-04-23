import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const left = keyframes`
  25% {
    transform: translateX(-100%);
    animation-timing-function: ease-in;
  }
  50% {
    transform: translateX(0%);
  }
`;
const right = keyframes`
  50% {
    transform: translateX(0%);
  }
  75% {
    transform: translateX(100%);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateX(0%);
  }
`;
const props = ({
  color,
  width,
}) => {
  const BallNewtonCradle = css`
    position: relative;
    box-sizing: border-box;
    display: block;
    font-size: 0;
    color: ${color};
    width: ${width}px;
    height: ${width / 4}px;

    > div {
      display: inline-block;
      float: none;
      background-color: currentColor;
      border: 0 solid currentColor;
      width: ${width / 4}px;
      height: ${width / 4}px;
      border-radius: 100%;
    }
    > div:first-child {
      transform: translateX(0%);
      animation: ${left} 1s 0s ease-out infinite;
    }
    > div:last-child {
      transform: translateX(0%);
      animation: ${right} 1s 0s ease-out infinite;
    }
  `;
  return {
    BallNewtonCradle,
  };
};
export default compose(
  pure,
  defaultProps({
    width: 40,
    color: '#fff',
    loading: false,
  }),
  withProps(props),
)(({ center, loading, BallNewtonCradle }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallNewtonCradle}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));