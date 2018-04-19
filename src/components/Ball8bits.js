import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const rotate = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
`
const defaultColor = '#fff';
const props = ({
  width = 12,
  height = 12,
  color = defaultColor,
}) => {
  const BallBox = css`
    display: block;
    font-size: 0;
    color: ${color};
    width: ${width}px;
    height: ${height}px;
    position: relative;
    > div {
      position: relative;
      -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
          box-sizing: border-box;
    }
    > div {
      display: inline-block;
      float: none;
      background-color: currentColor;
      border: 0 solid currentColor;
    }
    > div {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 4px;
      height: 4px;
      border-radius: 0;
      opacity: 0;
      -webkit-transform: translate(100%, 100%);
         -moz-transform: translate(100%, 100%);
          -ms-transform: translate(100%, 100%);
           -o-transform: translate(100%, 100%);
              transform: translate(100%, 100%);
      -webkit-animation: ${rotate} 1s 0s ease infinite;
         -moz-animation: ${rotate} 1s 0s ease infinite;
           -o-animation: ${rotate} 1s 0s ease infinite;
              animation: ${rotate} 1s 0s ease infinite;
    }
    > div:nth-child(1) {
      -webkit-animation-delay: -.9375s;
         -moz-animation-delay: -.9375s;
           -o-animation-delay: -.9375s;
            animation-delay: -.9375s;
    }
    > div:nth-child(2) {
      -webkit-animation-delay: -.875s;
         -moz-animation-delay: -.875s;
           -o-animation-delay: -.875s;
            animation-delay: -.875s;
    }
    > div:nth-child(3) {
      -webkit-animation-delay: -.8125s;
         -moz-animation-delay: -.8125s;
          -o-animation-delay: -.8125s;
            animation-delay: -.8125s;
    }
    > div:nth-child(4) {
      -webkit-animation-delay: -.75s;
         -moz-animation-delay: -.75s;
           -o-animation-delay: -.75s;
            animation-delay: -.75s;
    }
    > div:nth-child(5) {
      -webkit-animation-delay: -.6875s;
         -moz-animation-delay: -.6875s;
           -o-animation-delay: -.6875s;
            animation-delay: -.6875s;
    }
    > div:nth-child(6) {
      -webkit-animation-delay: -.625s;
         -moz-animation-delay: -.625s;
           -o-animation-delay: -.625s;
            animation-delay: -.625s;
    }
    > div:nth-child(7) {
      -webkit-animation-delay: -.5625s;
         -moz-animation-delay: -.5625s;
           -o-animation-delay: -.5625s;
            animation-delay: -.5625s;
    }
    > div:nth-child(8) {
      -webkit-animation-delay: -.5s;
         -moz-animation-delay: -.5s;
           -o-animation-delay: -.5s;
            animation-delay: -.5s;
    }
    > div:nth-child(9) {
      -webkit-animation-delay: -.4375s;
         -moz-animation-delay: -.4375s;
           -o-animation-delay: -.4375s;
            animation-delay: -.4375s;
    }
    > div:nth-child(10) {
      -webkit-animation-delay: -.375s;
         -moz-animation-delay: -.375s;
           -o-animation-delay: -.375s;
            animation-delay: -.375s;
    }
    > div:nth-child(11) {
      -webkit-animation-delay: -.3125s;
         -moz-animation-delay: -.3125s;
           -o-animation-delay: -.3125s;
            animation-delay: -.3125s;
    }
    > div:nth-child(12) {
      -webkit-animation-delay: -.25s;
         -moz-animation-delay: -.25s;
           -o-animation-delay: -.25s;
            animation-delay: -.25s;
    }
    > div:nth-child(13) {
      -webkit-animation-delay: -.1875s;
         -moz-animation-delay: -.1875s;
           -o-animation-delay: -.1875s;
            animation-delay: -.1875s;
    }
    > div:nth-child(14) {
      -webkit-animation-delay: -.125s;
         -moz-animation-delay: -.125s;
           -o-animation-delay: -.125s;
            animation-delay: -.125s;
    }
    > div:nth-child(15) {
      -webkit-animation-delay: -.0625s;
         -moz-animation-delay: -.0625s;
           -o-animation-delay: -.0625s;
            animation-delay: -.0625s;
    }
    > div:nth-child(16) {
      -webkit-animation-delay: 0s;
         -moz-animation-delay: 0s;
           -o-animation-delay: 0s;
            animation-delay: 0s;
    }
    > div:nth-child(1) {
      top: -100%;
      left: 0;
    }
    > div:nth-child(2) {
      top: -100%;
      left: 33.3333333333%;
    }
    > div:nth-child(3) {
      top: -66.6666666667%;
      left: 66.6666666667%;
    }
    > div:nth-child(4) {
      top: -33.3333333333%;
      left: 100%;
    }
    > div:nth-child(5) {
      top: 0;
      left: 100%;
    }
    > div:nth-child(6) {
      top: 33.3333333333%;
      left: 100%;
    }
    > div:nth-child(7) {
      top: 66.6666666667%;
      left: 66.6666666667%;
    }
    > div:nth-child(8) {
      top: 100%;
      left: 33.3333333333%;
    }
    > div:nth-child(9) {
      top: 100%;
      left: 0;
    }
    > div:nth-child(10) {
      top: 100%;
      left: -33.3333333333%;
    }
    > div:nth-child(11) {
      top: 66.6666666667%;
      left: -66.6666666667%;
    }
    > div:nth-child(12) {
      top: 33.3333333333%;
      left: -100%;
    }
    > div:nth-child(13) {
      top: 0;
      left: -100%;
    }
    > div:nth-child(14) {
      top: -33.3333333333%;
      left: -100%;
    }
    > div:nth-child(15) {
      top: -66.6666666667%;
      left: -66.6666666667%;
    }
    > div:nth-child(16) {
      top: -100%;
      left: -33.3333333333%;
    }
  `;
  return {
    BallBox,
  };
}

export default compose(
  pure,
  defaultProps({ loading: false }),
  withProps(props),
)(({ loading, center, BallBox }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallBox}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
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
