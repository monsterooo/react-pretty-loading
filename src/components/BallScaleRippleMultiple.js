import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const scale = keyframes`
  0% {
    opacity: 1;
    transform: scale(.1);
  }
  70% {
    opacity: .5;
    transform: scale(1);
  }
  95% {
    opacity: 0;
  }
`;
const props = ({
  color,
  width
}) => {
  const BallScaleRippleMultiple = css`
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
      background: transparent;
      border-width: 2px;
      border-radius: 100%;
      opacity: 0;
      animation: ${scale} 1.25s 0s infinite cubic-bezier(.21, .53, .56, .8);
    }
    > div:nth-child(1) {
      animation-delay: 0s;
    }
    > div:nth-child(2) {
      animation-delay: .25s;
    }
    > div:nth-child(3) {
      animation-delay: .5s;
    }
  `;
  return {
    BallScaleRippleMultiple,
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
)(({ center, loading, BallScaleRippleMultiple }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallScaleRippleMultiple}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));