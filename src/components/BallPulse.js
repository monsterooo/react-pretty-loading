import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const scale = keyframes`
  0%,
  60%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  30% {
    opacity: .1;
    transform: scale(.01);
  }
`;
const props = ({
  color,
  width,
}) => {
  const sWidth = width / 3 / 1.8;
  const sMargin = (width / 3 - sWidth) / 2;
  const BallPulse = css`
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
      animation: ${scale} 1s ease infinite;
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
    BallPulse,
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
)(({ center, loading, BallPulse }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallPulse}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));