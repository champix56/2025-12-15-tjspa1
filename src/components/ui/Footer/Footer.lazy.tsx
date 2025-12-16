import React, { lazy, Suspense, type JSX } from 'react';

const LazyFooter = lazy(() => import('./Footer'));

const Footer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFooter {...props} />
  </Suspense>
);

export default Footer;
