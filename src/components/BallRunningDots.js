import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const dots = keyframes`
  0%,
  100% {
    width: 100%;
    height: 100%;
    transform: translateY(0) translateX(500%);
  }
  80% {
    transform: translateY(0) translateX(0);
  }
  85% {
    width: 100%;
    height: 100%;
    transform: translateY(-125%) translateX(0);
  }
  90% {
    width: 200%;
    height: 75%;
  }
  95% {
    width: 100%;
    height: 100%;
    transform: translateY(-100%) translateX(500%);
  }
`;
const props = ({
  color,
  width,
}) => {
  const BallRunningDots = css`
    position: relative;
    box-sizing: border-box;
    display: block;
    font-size: 0;
    color: ${color};
    width: ${width}px;
    height: ${width}px;

    > div {
      display: inline-block;
      float: none;
      background-color: currentColor;
      border: 0 solid currentColor;
      position: absolute;
      width: 10px;
      height: 10px;
      margin-left: -25px;
      border-radius: 100%;
      animation: ${dots} 2s linear infinite;
    }

    > div:nth-child(1) {
      animation-delay: 0s;
    }
    > div:nth-child(2) {
      animation-delay: -.4s;
    }
    > div:nth-child(3) {
      animation-delay: -.8s;
    }
    > div:nth-child(4) {
      animation-delay: -1.2s;
    }
    > div:nth-child(5) {
      animation-delay: -1.6s;
    }
    > div:nth-child(6) {
      animation-delay: -2s;
    }
    > div:nth-child(7) {
      animation-delay: -2.4s;
    }
    > div:nth-child(8) {
      animation-delay: -2.8s;
    }
    > div:nth-child(9) {
      animation-delay: -3.2s;
    }
    > div:nth-child(10) {
      animation-delay: -3.6s;
    }
  `;
  return {
    BallRunningDots,
  };
};
export default compose(
  pure,
  defaultProps({
    width: 10,
    color: '#fff',
    loading: false,
  }),
  withProps(props),
)(({ center, loading, BallRunningDots }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallRunningDots}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));