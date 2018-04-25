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

const props = ({
  width,
  color,
}) => {
  const BallBox = css`
    display: block;
    font-size: 0;
    color: ${color};
    width: ${width}px;
    height: ${width}px;
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
      width: ${width / 3}px;
      height: ${width / 3}px;
      border-radius: 0;
      opacity: 0;
      transform: translate(100%, 100%);
      animation: ${rotate} 1s 0s ease infinite;
    }
    > div:nth-child(1) {
      animation-delay: -.9375s;
    }
    > div:nth-child(2) {
      animation-delay: -.875s;
    }
    > div:nth-child(3) {
      animation-delay: -.8125s;
    }
    > div:nth-child(4) {
      animation-delay: -.75s;
    }
    > div:nth-child(5) {
      animation-delay: -.6875s;
    }
    > div:nth-child(6) {
      animation-delay: -.625s;
    }
    > div:nth-child(7) {
      animation-delay: -.5625s;
    }
    > div:nth-child(8) {
      animation-delay: -.5s;
    }
    > div:nth-child(9) {
      animation-delay: -.4375s;
    }
    > div:nth-child(10) {
      animation-delay: -.375s;
    }
    > div:nth-child(11) {
      animation-delay: -.3125s;
    }
    > div:nth-child(12) {
      animation-delay: -.25s;
    }
    > div:nth-child(13) {
      animation-delay: -.1875s;
    }
    > div:nth-child(14) {
      animation-delay: -.125s;
    }
    > div:nth-child(15) {
      animation-delay: -.0625s;
    }
    > div:nth-child(16) {
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
  defaultProps({
    width: 12,
    color: '#fff',
    loading: false
  }),
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
