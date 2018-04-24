import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const props = ({
  color,
  width,
}) => {
  const BallRotate = css`
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
      width: ${width}px;
      height: ${width}px;
      border-radius: 100%;
      animation: ${rotate} 1s cubic-bezier(.7, -.13, .22, .86) infinite;
    }
    > div:before,
    > div:after {
      position: absolute;
      width: inherit;
      height: inherit;
      margin: inherit;
      content: "";
      background: currentColor;
      border-radius: inherit;
      opacity: .8;
    }
    > div:before {
      top: 0;
      left: -150%;
    }
    > div:after {
      top: 0;
      left: 150%;
    }
  `;
  return {
    BallRotate,
  };
};
export default compose(
  pure,
  defaultProps({
    width: 10,
    color: '#fff',
    loading: false,
  }),
  withProps(props),
)(({ center, loading, BallRotate }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallRotate}>
        <div></div>
      </div>
    ) : null}
  </div>
));