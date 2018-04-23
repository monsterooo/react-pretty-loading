import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const sync = keyframes`
  33% {
    transform: translateY(100%);
  }
  66% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;
const props = ({
  color,
  width,
}) => {
  const sMargin = width / 3 / 4.5;
  const sWidth = width / 3 - sMargin * 2;
  const BallPulseSync = css`
    position: relative;
    box-sizing: border-box;
    display: block;
    font-size: 0;
    color: ${color};
    width: ${width}px;
    height: ${width / 3}px;

    > div {
      display: inline-block;
      float: none;
      background-color: currentColor;
      border: 0 solid currentColor;
      width: ${sWidth}px;
      height: ${sWidth}px;
      margin: ${sMargin}px;
      border-radius: 100%;
      animation: ${sync} .6s infinite ease-in-out;
    }

    > div:nth-child(1) {
      animation-delay: -.14s;
    }
    > div:nth-child(2) {
      animation-delay: -.07s;
    }
    > div:nth-child(3) {
      animation-delay: 0s;
    }
  `;
  return {
    BallPulseSync,
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
)(({ center, loading, BallPulseSync }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallPulseSync}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));