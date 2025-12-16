import React, { lazy, Suspense, type JSX } from 'react';

const LazyMemeSvgViewer = lazy(() => import('./MemeSvgViewer'));

const MemeSvgViewer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMemeSvgViewer {...props} />
  </Suspense>
);

export default MemeSvgViewer;
