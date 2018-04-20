import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const dotsAnim = keyframes`
  0%,
  100% {
    margin: 0;
    transform: scale(1);
  }
  50% {
    margin: 0 5%;
    transform: scale(.65);
  }
`;
const props = ({
  color,
  width,
}) => {
  const BallElasticDots = css`
    position: relative;
    box-sizing: border-box;
    display: block;
    font-size: 0;
    color: ${color};
    width: ${width}px;
    height: ${width / 12}px;
    font-size: 0;
    text-align: center;

    > div {
      position: relative;
      box-sizing: border-box;
      display: inline-block;
      float: none;
      background-color: currentColor;
      border: 0 solid currentColor;
      display: inline-block;
      width: ${width / 12}px;
      height: ${width / 12}px;
      white-space: nowrap;
      border-radius: 100%;
      animation: ${dotsAnim} 1s infinite;
    }
  `;
  return {
    BallElasticDots,
  };
};
export default compose(
  pure,
  defaultProps({
    width: 240,
    color: '#fff',
    loading: false,
  }),
  withProps(props),
)(({ center, loading, BallElasticDots }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallElasticDots}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ) : null}
  </div>
));