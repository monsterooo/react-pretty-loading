import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const BallBeatOpacity = keyframes`
  50% {
    opacity: .2;
    transform: scale(.75);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
const props = ({
  width,
  color,
}) => {
  const bWidth = width;
  const bHeight = width / 3;

  const sMargin = bHeight / 2.25 / 2;
  const sWidth = bHeight - sMargin * 2;
  const sHeight = bHeight - sMargin * 2;

  const BallBeat = css`
    position: relative;
    box-sizing: border-box;
    display: block;
    font-size: 0;
    color: ${color};
    width: ${bWidth}px;
    height: ${bHeight}px;

    > div {
      position: relative;
      box-sizing: border-box;
      display: inline-block;
      float: none;
      background-color: currentColor;
      border: 0 solid currentColor;
      width: ${sWidth}px;
      height: ${sHeight}px;
      margin: ${sMargin}px;
      border-radius: 100%;
      animation: ${BallBeatOpacity} .7s -.15s infinite linear;
    }
    > div:nth-child(2n-1) {
      animation-delay: -.5s;
    }
  `;
  return {
    BallBeat,
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
)(({ center, loading, BallBeat }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallBeat}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));