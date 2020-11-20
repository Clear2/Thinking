import React from 'react';
import styles from './index.less';
import { Link } from 'umi'
import { useModel } from 'umi';

export default () => {
  const { memoizedValue, needRender, setNeedRender } = useModel('count', model => ({
    memoizedValue: model.memoizedValue,
    needRender: model.needRender,
    setNeedRender: model.setNeedRender
  }));



  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to='/next'>去往Next</Link>
      {memoizedValue}
    </div>
  );
}
