import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const anima = keyframes`
  0% {
    opacity: 1;
    transform: scale(1.1);
  }
  25% {
    transform: translateY(-200%);
  }
  50% {
    opacity: .35;
    transform: scale(.3);
  }
  75% {
    transform: translateY(200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    transform: scale(1);
  }
`;
const odd = keyframes`
0% {
  opacity: .35;
  transform: scale(.4);
}
25% {
  transform: translateY(200%);
}
50% {
  opacity: 1;
  transform: scale(1.1);
}
75% {
  transform: translateY(-200%);
}
100% {
  opacity: .35;
  transform: translateY(0);
  transform: scale(.75);
}
`;
const props = ({
  color,
  width,
}) => {
  const sMargin = width / 5 / 7;
  const sWidth = width / 5 - sMargin * 2;
  const BallPulseRise = css`
    position: relative;
    box-sizing: border-box;
    display: block;
    font-size: 0;
    color: ${color};
    width: ${width}px;
    height: ${width / 5}px;

    > div {
      display: inline-block;
      float: none;
      background-color: currentColor;
      border: 0 solid currentColor;
      width: ${sWidth}px;
      height: ${sWidth}px;
      margin: ${sMargin}px;
      border-radius: 100%;
      animation: ${anima} 1s cubic-bezier(.15, .36, .9, .6) 0s infinite;
    }
    > div:nth-child(2n-1) {
      animation-name: ${odd};
    }
  `;
  return {
    BallPulseRise,
  };
};
export default compose(
  pure,
  defaultProps({
    width: 70,
    color: '#fff',
    loading: false,
  }),
  withProps(props),
)(({ center, loading, BallPulseRise }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallPulseRise}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));