import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const scale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  5% {
    opacity: .75;
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`;
const props = ({
  color,
  width,
}) => {
  const BallScaleMultiple = css`
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
      opacity: 0;
      animation: ${scale} 1s 0s linear infinite;
    }
    > div:nth-child(2) {
      animation-delay: .2s;
    }
    > div:nth-child(3) {
      animation-delay: .4s;
    }
  `;
  return {
    BallScaleMultiple,
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
)(({ center, loading, BallScaleMultiple }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallScaleMultiple}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));