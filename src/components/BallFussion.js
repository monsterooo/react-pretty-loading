import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const Ball1 = keyframes`
  0% {
    opacity: .35;
  }
  50% {
    top: -100%;
    left: 200%;
    opacity: 1;
  }
  100% {
    top: 50%;
    left: 100%;
    z-index: 2;
    opacity: .35;
  }
`;
const Ball2 = keyframes`
  0% {
    opacity: .35;
  }
  50% {
    top: 200%;
    left: 200%;
    opacity: 1;
  }
  100% {
    top: 100%;
    left: 50%;
    z-index: 1;
    opacity: .35;
  }
`;
const Ball3 = keyframes`
  0% {
    opacity: .35;
  }
  50% {
    top: 200%;
    left: -100%;
    opacity: 1;
  }
  100% {
    top: 50%;
    left: 0;
    z-index: 2;
    opacity: .35;
  }
`;
const Ball4 = keyframes`
  0% {
    opacity: .35;
  }
  50% {
    top: -100%;
    left: -100%;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 50%;
    z-index: 1;
    opacity: .35;
  }
`;
const props = ({
  color,
  width,
}) => {
  const BallFussion = css`
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
      width: ${width * 1.5}px;
      height: ${width * 1.5}px;
      border-radius: 100%;
      transform: translate(-50%, -50%);
      animation: ${Ball1} 1s 0s ease infinite;
    }
    > div:nth-child(1) {
      top: 0;
      left: 50%;
      z-index: 1;
    }
    > div:nth-child(2) {
      top: 50%;
      left: 100%;
      z-index: 2;
      animation-name: ${Ball2};
    }
    > div:nth-child(3) {
        top: 100%;
        left: 50%;
        z-index: 1;
        animation-name: ${Ball3};
    }
    > div:nth-child(4) {
        top: 50%;
        left: 0;
        z-index: 2;
        animation-name: ${Ball4};
    }
  `;
  return {
    BallFussion,
  };
};
export default compose(
  pure,
  defaultProps({
    width: 12,
    color: '#fff',
    loading: false,
  }),
  withProps(props),
)(({ center, loading, BallFussion }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallFussion}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));