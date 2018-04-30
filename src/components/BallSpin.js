import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const spin = keyframes`
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  20% {
      opacity: 1;
  }
  80% {
    opacity: 0;
    transform: scale(0);
  }
`;
const props = ({
  color,
  width,
}) => {
  const BallSpin = css`
    position: relative;
    box-sizing: border-box;
    display: block;
    font-size: 0;
    color: ${color};
    width: ${width}px;
    height: ${width}px;

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
      width: ${width / 4}px;
      height: ${width / 4}px;
      margin-top: -${width / 4 / 2}px;
      margin-left: -${width / 4 / 2}px;
      border-radius: 100%;
      animation: ${spin} 1s infinite ease-in-out;
    }

    > div:nth-child(1) {
      top: 5%;
      left: 50%;
      animation-delay: -1.125s;
    }
    > div:nth-child(2) {
      top: 18.1801948466%;
      left: 81.8198051534%;
      animation-delay: -1.25s;
    }
    > div:nth-child(3) {
      top: 50%;
      left: 95%;
      animation-delay: -1.375s;
    }
    > div:nth-child(4) {
      top: 81.8198051534%;
      left: 81.8198051534%;
      animation-delay: -1.5s;
    }
    > div:nth-child(5) {
      top: 94.9999999966%;
      left: 50.0000000005%;
      animation-delay: -1.625s;
    }
    > div:nth-child(6) {
      top: 81.8198046966%;
      left: 18.1801949248%;
      animation-delay: -1.75s;
    }
    > div:nth-child(7) {
      top: 49.9999750815%;
      left: 5.0000051215%;
      animation-delay: -1.875s;
    }
    > div:nth-child(8) {
      top: 18.179464974%;
      left: 18.1803700518%;
      animation-delay: -2s;
    }
  `;
  return {
    BallSpin,
  };
};
export default compose(
  pure,
  defaultProps({
    width: 32,
    color: '#fff',
    loading: false,
  }),
  withProps(props),
)(({ center, loading, BallSpin }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallSpin}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));