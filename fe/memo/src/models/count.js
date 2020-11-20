import React, {useMemo, useState} from 'react';

export default () => {
  const [needRender, setNeedRender] = useState(true)
  const memoizedValue = useMemo(() => {
    console.error('memo--->')
    return (
      <input />
    )
  }, [needRender])

  return {
    memoizedValue,
    needRender,
    setNeedRender
  };
};

