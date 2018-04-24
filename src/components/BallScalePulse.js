import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const scale = keyframes`
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`;
const props = ({
  color,
  width,
}) => {
  const BallScalePulse = css`
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
      top: 0;
      left: 0;
      width: ${width}px;
      height: ${width}px;
      border-radius: 100%;
      opacity: .5;
      animation: ${scale} 2s infinite ease-in-out;
    }
    > div:last-child {
      animation-delay: -1.0s;
    }
  `;
  return {
    BallScalePulse,
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
)(({ center, loading, BallScalePulse }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallScalePulse}>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));