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
const props = ({
  width,
  height,
  color,
}) => {
  const BallClipRotateMultiple = css`
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
      background: transparent;
      border-style: solid;
      border-width: 2px;
      border-radius: 100%;
      animation: ${rotate} 1s ease-in-out infinite;
    }
    > div:first-child {
      position: absolute;
      width: ${width}px;
      height: ${width}px;
      border-right-color: transparent;
      border-left-color: transparent;
    }
    > div:last-child {
      width: ${width / 2}px;
      height: ${height / 2}px;
      border-top-color: transparent;
      border-bottom-color: transparent;
      animation-duration: .5s;
      animation-direction: reverse;
    }
  `;
  return {
    BallClipRotateMultiple,
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
)(({ center, loading, BallClipRotateMultiple }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallClipRotateMultiple}>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));