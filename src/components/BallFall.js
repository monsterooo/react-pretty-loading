import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const rotate = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-145%);
  }
  10% {
    opacity: .5;
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  80% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: .5;
  }
  100% {
    opacity: 0;
    transform: translateY(145%);
  }
`;
const props = ({
  width,
  color,
}) => {
  const smallBall = width / 3 / 1.8;

  const BallFall = css`
    position: relative;
    box-sizing: border-box;
    display: block;
    font-size: 0;
    color: ${color};
    width: ${width}px;
    height: ${width / 3}px;

    > div {
      position: relative;
      box-sizing: border-box;
      display: inline-block;
      float: none;
      background-color: currentColor;
      border: 0 solid currentColor;
    }
    > div {
      width: ${smallBall}px;
      height: ${smallBall}px;
      margin: ${smallBall / 2.5}px;
      border-radius: 100%;
      opacity: 0;
      animation: ${rotate} 1s ease-in-out infinite;
    }
    > div:nth-child(1) {
      animation-delay: -200ms;
    }
    > div:nth-child(2) {
      animation-delay: -100ms;
    }
    > div:nth-child(3) {
      animation-delay: 0ms;
    }
  `;
  return {
    BallFall,
  };
};
export default compose(
  pure,
  defaultProps({
    width: 54,
    color: '#fff',
    loading: false,
  }),
  withProps(props),
)(({ center, loading, BallFall }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallFall}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));