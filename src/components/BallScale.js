import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const scale = keyframes`
  0% {
    opacity: 1;
    transform: scale(0);
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
  const BallScale = css`
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
      opacity: 0;
      animation: ${scale} 1s 0s ease-in-out infinite;
    }
  `;
  return {
    BallScale,
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
)(({ center, loading, BallScale }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div className={BallScale}>
        <div></div>
      </div>
    ) : null}
  </div>
));