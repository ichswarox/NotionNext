import React from 'react';
import Root from '@theme-original/Root';
import CrispChat from '@site/src/components/CrispChat';

export default function RootWrapper(props) {
  return (
    <>
      <Root {...props} />
      <CrispChat />
    </>
  );
}
