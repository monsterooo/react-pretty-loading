import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const BallAtomPosition = keyframes`
  50% {
    top: 100%;
    left: 100%;
  }
`;
const BallAtomSize = keyframes`
  50% {
    transform: scale(.5, .5);
  }
`;
const BallAtomZindex = keyframes`
  50% {
    z-index: 10;
  }
`;
const BallAtomShrink = keyframes`
  50% {
    transform: translate(-50%, -50%) scale(.8, .8);
  }
`;
const props = ({
  width,
  height,
  color,
}) => {
  const BallAtom = css`
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
    > div:nth-child(1) {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      width: 60%;
      height: 60%;
      background: #aaa;
      border-radius: 100%;
      transform: translate(-50%, -50%);
      animation: ${BallAtomShrink} 4.5s infinite linear;
    }
    > div:not(:nth-child(1)) {
      position: absolute;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background: none;
      animation: ${BallAtomZindex} 1.5s 0s infinite steps(2, end);
    }
    > div:not(:nth-child(1)):before {
      position: absolute;
      top: 0;
      left: 0;
      width: ${width / 3.2}px;
      height: ${width / 3.2}px;
      margin-top: ${width / 3.2 / 2}px;
      margin-left: ${width / 3.2 / 2}px;
      content: "";
      background: currentColor;
      border-radius: 50%;
      opacity: .75;
      animation: ${BallAtomPosition} 1.5s 0s infinite ease, ${BallAtomSize} 1.5s 0s infinite ease;
    }
    > div:nth-child(2) {
      animation-delay: .75s;
    }
    > div:nth-child(2):before {
      animation-delay: 0s, -1.125s;
    }
    > div:nth-child(3) {
      transform: rotate(120deg);
      animation-delay: -.25s;
    }
    > div:nth-child(3):before {
        animation-delay: -1s, -.75s;
    }
    > div:nth-child(4) {
      transform: rotate(240deg);
      animation-delay: .25s;
    }
    > div:nth-child(4):before {
      animation-delay: -.5s, -.125s;
    }
  `;
  return {
    BallAtom,
  };
};
export default compose(
  pure,
  defaultProps({
    width: 24,
    height: 24,
    color: '#fff',
    loading: false,
  }),
  withProps(props),
)(({ center, loading, BallAtom }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallAtom}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));