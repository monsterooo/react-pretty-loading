import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const position = keyframes`
  50% {
    left: 100%;
  }
`;
const size = keyframes`
  50% {
    transform: scale(.3, .3);
  }
`;
const props = ({
  color,
  width,
  height,
}) => {
  const BallCircus = css`
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
      top: 0;
      left: -100%;
      display: block;
      width: ${width}px;
      width: 100%;
      height: ${height}px;
      height: 100%;
      border-radius: 100%;
      opacity: .5;
      animation: ${position} 2.5s infinite cubic-bezier(.25, 0, .75, 1), ${size} 2.5s infinite cubic-bezier(.25, 0, .75, 1);
    }
    > div:nth-child(1) {
      animation-delay: 0s, -.5s;
    }
    > div:nth-child(2) {
      animation-delay: -.5s, -1s;
    }
    > div:nth-child(3) {
      animation-delay: -1s, -1.5s;
    }
    > div:nth-child(4) {
      animation-delay: -1.5s, -2s;
    }
    > div:nth-child(5) {
      animation-delay: -2s, -2.5s;
    }
  `;
  return {
    BallCircus,
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
)(({ center, loading, BallCircus }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallCircus}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));