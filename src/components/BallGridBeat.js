import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const gridBeat = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: .35;
  }
  100% {
    opacity: 1;
  }
`;
const props = ({
  color,
  width,
}) => {
  const BallGridBeat = css`
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
      width: ${width / 4.5}px;
      height: ${width / 4.5}px;
      margin: ${width / 4.5 / 4}px;
      border-radius: 100%;
      animation-name: ${gridBeat};
      animation-iteration-count: infinite;
    }
    > div:nth-child(1) {
      animation-duration: .65s;
      animation-delay: .03s;
    }
    > div:nth-child(2) {
      animation-duration: 1.02s;
      animation-delay: .09s;
    }
    > div:nth-child(3) {
      animation-duration: 1.06s;
      animation-delay: -.69s;
    }
    > div:nth-child(4) {
      animation-duration: 1.5s;
      animation-delay: -.41s;
    }
    > div:nth-child(5) {
      animation-duration: 1.6s;
      animation-delay: .04s;
    }
    > div:nth-child(6) {
      animation-duration: .84s;
      animation-delay: .07s;
    }
    > div:nth-child(7) {
      animation-duration: .68s;
      animation-delay: -.66s;
    }
    > div:nth-child(8) {
      animation-duration: .93s;
      animation-delay: -.76s;
    }
    > div:nth-child(9) {
      animation-duration: 1.24s;
      animation-delay: -.76s;
    }
  `;
  return {
    BallGridBeat,
  };
};
export default compose(
  pure,
  defaultProps({
    width: 34,
    color: '#fff',
    loading: false,
  }),
  withProps(props),
)(({ center, loading, BallGridBeat }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallGridBeat}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));