import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const rotate = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;
const props = ({
  color,
  width,
  height,
}) => {
  const BallClipRotateBox = css`
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    font-size: 0;
    color: ${color};
    width: ${width}px;
    height: ${height}px;

    > div {
      position: relative;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      display: inline-block;
      float: none;
      background-color: currentColor;
      border: 0 solid currentColor;
    }
    > div {
      width: ${width}px;
      height: ${height}px;
      background: transparent;
      border-width: 2px;
      border-bottom-color: transparent;
      border-radius: 100%;
      animation: ${rotate} .75s linear infinite;
    }
  `;
  return {
    BallClipRotateBox
  }
};
export default compose(
  pure,
  defaultProps({
    width: 32,
    height: 32,
    loading: false,
    color: '#fff'
  }),
  withProps(props),
)(({ BallClipRotateBox, center, loading }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallClipRotateBox}>
        <div></div>
      </div>
    ) : null}
  </div>
));