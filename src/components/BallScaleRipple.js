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
    opacity: .65;
    transform: scale(1);
  }
  100% {
    opacity: 0;
  }
`;
const props = ({
  color,
  width,
}) => {
  const BallScaleRipple = css`
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
      width: ${width}px;
      height: ${width}px;
      background: transparent;
      border-width: 2px;
      border-radius: 100%;
      opacity: 0;
      animation: ${scale} 1s 0s infinite cubic-bezier(.21, .53, .56, .8);
    }
  `;
  return {
    BallScaleRipple,
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
)(({ center, loading, BallScaleRipple }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallScaleRipple}>
        <div></div>
      </div>
    ) : null}
  </div>
));