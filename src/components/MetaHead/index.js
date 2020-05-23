import React from 'react';
import { Helmet } from 'react-helmet';

export const MetaHead = ({
  children,
  title,
  subTitle,
  ogTitle,
  ogUrl,
  ogImage,
}) => {
  return (
    <>
      <Helmet>
        {title && <title>{title}</title>}
        {subTitle && <meta name="description" content={subTitle} />}
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogUrl && <meta property="og:url" content={ogUrl} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
      </Helmet>
      {children}
    </>
  );
};
