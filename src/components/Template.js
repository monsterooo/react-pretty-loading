import React from 'react';
import { css, cx } from 'emotion';
import { keyframes } from 'react-emotion'
import { compose, pure, withProps, defaultProps } from 'recompose';
import { flexCenter } from '../utils';

const props = () => {

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
)(({ center, loading }) => (
  <div className={cx('react-loading-wrap', {[flexCenter]: center})}>
    {loading ? (
      <div>content</div>
    ) : null}
  </div>
));